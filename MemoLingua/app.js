/* app.js - core data + behaviour for Memolingua MVP */
/* Put this file alongside index.html, theme.html, practice.html */

const APP_TITLE = 'Memolingua'; // change this if you choose Glotta

/* === VOCABULARY DATA ===
   Extend/modify this object to add languages/themes/words.
*/
const DATA = {
  "German": {
    "Animals": [
      {emoji:"🐶", german:"der Hund", english:"dog"},
      {emoji:"🐱", german:"die Katze", english:"cat"},
      {emoji:"🐭", german:"die Maus", english:"mouse"},
      {emoji:"🐰", german:"das Kaninchen", english:"rabbit"},
      {emoji:"🐔", german:"das Hähnchen", english:"chicken"},
      {emoji:"🦆", german:"die Ente", english:"duck"},
      {emoji:"🐴", german:"das Pferd", english:"horse"},
      {emoji:"🐮", german:"die Kuh", english:"cow"},
      {emoji:"🐷", german:"das Schwein", english:"pig"},
      {emoji:"🐟", german:"der Fisch", english:"fish"}
    ],
    "Food": [
      {emoji:"🍎", german:"der Apfel", english:"apple"},
      {emoji:"🍓", german:"die Erdbeere", english:"strawberry"},
      {emoji:"🍅", german:"die Tomate", english:"tomato"},
      {emoji:"🥕", german:"die Karotte", english:"carrot"},
      {emoji:"🥔", german:"die Kartoffel", english:"potato"},
      {emoji:"🥖", german:"das Brot", english:"bread"},
      {emoji:"🧀", german:"der Käse", english:"cheese"},
      {emoji:"🥚", german:"das Ei", english:"egg"},
      {emoji:"🥗", german:"der Salat", english:"salad"},
      {emoji:"🍬", german:"die Bonbons", english:"sweets"}
    ]
  }
};

/* === Utilities === */
function save(key, val){ localStorage.setItem('ml_' + key, JSON.stringify(val)); }
function load(key){ const s = localStorage.getItem('ml_' + key); return s ? JSON.parse(s) : null; }

function stripDiacritics(str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function normalizeAnswer(s){
  if(!s) return '';
  s = s.trim().toLowerCase();
  s = stripDiacritics(s);
  s = s.replace(/\s+/g,' ');
  // accept ae/oe/ue typed as such by mapping to base char
  s = s.replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  // remove leading article if present
  s = s.replace(/^(der |die |das )/i,'');
  return s;
}
function getTodayStr(){
  return new Date().toISOString().slice(0,10);
}
function getYesterdayStr(){
  const d = new Date();
  d.setDate(d.getDate()-1);
  return d.toISOString().slice(0,10);
}
function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

/* === Page behaviours === */

/* index.html */
function renderLanguages(){
  document.getElementById('appTitle').innerText = APP_TITLE;
  const langs = Object.keys(DATA);
  const container = document.getElementById('langGrid');
  container.innerHTML = '';
  langs.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">🇩🇪</div><div class="card-title">${l}</div><div class="small">Start ${l}</div></div>`;
    card.onclick = ()=> {
      save('language', l);
      window.location.href = 'theme.html';
    };
    container.appendChild(card);
  });
}

/* theme.html */
function renderThemes(){
  document.getElementById('appTitle').innerText = APP_TITLE;
  const lang = load('language') || Object.keys(DATA)[0];
  document.getElementById('subtitle').innerText = `Language: ${lang}`;
  const themes = Object.keys(DATA[lang] || {});
  const container = document.getElementById('themeGrid');
  container.innerHTML = '';
  themes.forEach(t => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${t === 'Animals' ? '🐾' : '🍽️'}</div><div class="card-title">${t}</div><div class="small">Practice ${t}</div></div>`;
    card.onclick = ()=> {
      save('theme', t);
      window.location.href = 'practice.html';
    };
    container.appendChild(card);
  });
}

/* practice.html */
let practiceState = {
  list: [],
  index: 0,
  sessionStreak: 0,
  sessionCorrectInRow: 0
};

function startPractice(){
  document.getElementById('appTitle').innerText = APP_TITLE;
  const lang = load('language') || Object.keys(DATA)[0];
  const theme = load('theme') || Object.keys(DATA[lang])[0];
  document.getElementById('subtitle').innerText = `${lang} • ${theme}`;

  const words = DATA[lang][theme] || [];
  practiceState.list = shuffle(words);
  practiceState.index = 0;
  practiceState.sessionStreak = 0;
  practiceState.sessionCorrectInRow = 0;
  renderCurrent();
  updateStatus();
  document.getElementById('answerInput').focus();

  document.getElementById('answerForm').onsubmit = (e)=>{
    e.preventDefault();
    handleSubmit();
  };
}

function renderCurrent(){
  const cur = practiceState.list[practiceState.index];
  if(!cur){
    document.getElementById('emojiBox').innerText = '🎉';
    document.getElementById('prompt').innerText = 'All done — nice! Tap Restart or change theme.';
    document.getElementById('answerInput').value = '';
    updateProgress();
    return;
  }
  document.getElementById('emojiBox').innerText = cur.emoji;
  document.getElementById('prompt').innerText = 'Type the word in German';
  document.getElementById('answerInput').value = '';
  updateProgress();
}

function updateProgress(){
  const total = practiceState.list.length;
  const idx = Math.min(practiceState.index, total);
  const percent = total ? Math.round((idx / total) * 100) : 0;
  document.querySelector('.progress > i').style.width = `${percent}%`;
  document.getElementById('progressText').innerText = `${idx} / ${total}`;
}

function handleSubmit(){
  const input = document.getElementById('answerInput').value;
  const cur = practiceState.list[practiceState.index];
  if(!cur) return;
  const normUser = normalizeAnswer(input);
  const normCorrect = normalizeAnswer(cur.german);
  const nounCorrect = normCorrect; // articles already removed by normalizeAnswer

  if(normUser === nounCorrect){
    // correct
    showFeedback(true, cur);
    practiceState.sessionCorrectInRow++;
    // daily streak logic (counts once per day if at least one correct)
    const lastDay = load('lastCorrectDay');
    const today = getTodayStr();
    if(lastDay !== today){
      let streak = load('dailyStreak') || 0;
      if(lastDay === getYesterdayStr()){
        streak = (streak || 0) + 1;
      } else {
        streak = 1;
      }
      save('dailyStreak', streak);
      save('lastCorrectDay', today);
    }
    // session streak (consecutive correct answers)
    practiceState.sessionStreak = practiceState.sessionCorrectInRow;
    // auto next
    setTimeout(()=>{ nextWord(); }, 700);
  } else {
    // wrong
    showFeedback(false, cur);
    practiceState.sessionCorrectInRow = 0;
  }
  updateStatus();
}

function showFeedback(ok, cur){
  const fb = document.getElementById('feedback');
  if(ok){
    fb.className = 'feedback correct';
    fb.innerText = `✅ Correct — ${cur.german} (${cur.english})`;
  } else {
    fb.className = 'feedback wrong';
    fb.innerText = `❌ Nope — correct: ${cur.german}`;
  }
}

function nextWord(){
  practiceState.index++;
  if(practiceState.index >= practiceState.list.length){
    // finished: show final and offer restart
    document.getElementById('emojiBox').innerText = '🏁';
    document.getElementById('prompt').innerText = 'Session complete — nice work!';
    document.getElementById('answerInput').value = '';
  } else {
    renderCurrent();
  }
  updateStatus();
}

function revealAnswer(){
  const cur = practiceState.list[practiceState.index];
  if(cur) {
    document.getElementById('feedback').className='feedback';
    document.getElementById('feedback').innerText = `Answer: ${cur.german} — ${cur.english}`;
  }
}

function restartPractice(){
  practiceState.list = shuffle(practiceState.list);
  practiceState.index = 0;
  practiceState.sessionCorrectInRow = 0;
  document.getElementById('feedback').innerText = '';
  renderCurrent();
  updateStatus();
}

function updateStatus(){
  const daily = load('dailyStreak') || 0;
  document.getElementById('streakBadge').innerText = `🔥 Streak: ${daily}`;
  updateProgress();
}

/* Bind tip: run page-specific setup from HTML:
   index.html -> renderLanguages()
   theme.html -> renderThemes()
   practice.html -> startPractice()
*/
