/* app.js - Fixed full version for Memolingua MVP
   - 4 languages: German, French, Italian, English
   - 4 categories: Animals, Food, Family, Jobs
   - Same emojis across languages
   - Random shuffle per session
   - Consecutive-answer streak counter (resets on wrong)
*/

const APP_TITLE = 'Memolingua';

/* === DATA: each entry has:
      emoji: the emoji shown
      word: the word in the language (this file uses 'word' for clarity),
      english: english translation (for feedback)
   For backward compatibility with earlier UI code that expected "german",
   we also set a "german" property equal to the word (the practice code uses cur.german),
   so nothing else needs changing in your HTML.
*/
const DATA = {
  "German": {
    "Animals": [
      {emoji:"🐶", word:"der Hund", english:"dog"},
      {emoji:"🐱", word:"die Katze", english:"cat"},
      {emoji:"🐭", word:"die Maus", english:"mouse"},
      {emoji:"🐰", word:"das Kaninchen", english:"rabbit"},
      {emoji:"🐔", word:"das Hähnchen", english:"chicken"},
      {emoji:"🦆", word:"die Ente", english:"duck"},
      {emoji:"🐴", word:"das Pferd", english:"horse"},
      {emoji:"🐮", word:"die Kuh", english:"cow"},
      {emoji:"🐷", word:"das Schwein", english:"pig"},
      {emoji:"🐟", word:"der Fisch", english:"fish"}
    ],
    "Food": [
      {emoji:"🍎", word:"der Apfel", english:"apple"},
      {emoji:"🍓", word:"die Erdbeere", english:"strawberry"},
      {emoji:"🍅", word:"die Tomate", english:"tomato"},
      {emoji:"🥕", word:"die Karotte", english:"carrot"},
      {emoji:"🥔", word:"die Kartoffel", english:"potato"},
      {emoji:"🥖", word:"das Brot", english:"bread"},
      {emoji:"🧀", word:"der Käse", english:"cheese"},
      {emoji:"🥚", word:"das Ei", english:"egg"},
      {emoji:"🥗", word:"der Salat", english:"salad"},
      {emoji:"🍬", word:"die Bonbons", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"der Vater", english:"father"},
      {emoji:"👩", word:"die Mutter", english:"mother"},
      {emoji:"👦", word:"der Sohn", english:"son"},
      {emoji:"👧", word:"die Tochter", english:"daughter"},
      {emoji:"👶", word:"das Baby", english:"baby"},
      {emoji:"👴", word:"der Großvater", english:"grandfather"},
      {emoji:"👵", word:"die Großmutter", english:"grandmother"},
      {emoji:"👦", word:"der Enkel", english:"grandson"},
      {emoji:"👧", word:"die Enkelin", english:"granddaughter"},
      {emoji:"👨‍🦰", word:"der Onkel", english:"uncle"},
      {emoji:"👩‍🦰", word:"die Tante", english:"aunt"},
      {emoji:"🧑‍🦰", word:"der Cousin", english:"cousin (m)"},
      {emoji:"👱‍♀️", word:"die Cousine", english:"cousin (f)"},
      {emoji:"👦", word:"der Neffe", english:"nephew"},
      {emoji:"👧", word:"die Nichte", english:"niece"},
      {emoji:"👩‍⚕️", word:"der Arzt", english:"doctor"}
    ],
    "Jobs":[
      {emoji:"😷", word:"der Zahnarzt", english:"dentist"},
      {emoji:"👩‍⚕️", word:"die Krankenschwester", english:"nurse"},
      {emoji:"🧑‍💼", word:"der Anwalt", english:"lawyer"},
      {emoji:"👩‍🏫", word:"die Lehrerin", english:"teacher"},
      {emoji:"👩‍💻", word:"der Schüler", english:"student"},
      {emoji:"👩‍💻", word:"die Sekretärin", english:"secretary"},
      {emoji:"👨‍🚒", word:"der Feuerwehrmann", english:"firefighter"},
      {emoji:"👮‍♂️", word:"der Polizist", english:"policeman"},
      {emoji:"🪖", word:"der Soldat", english:"soldier"},
      {emoji:"🧑‍🌾", word:"der Bauer", english:"farmer"},
      {emoji:"🧑‍💼", word:"der Journalist", english:"journalist"},
      {emoji:"👨‍🔧", word:"der Mechaniker", english:"mechanic"},
      {emoji:"🧑‍⚕️", word:"der Tierarzt", english:"veterinarian"},
      {emoji:"💁🏻‍♂️", word:"der Kellner", english:"waiter"},
      {emoji:"👨‍🍳", word:"der Koch", english:"cook"}
    ]
  },

  "French": {
    "Animals": [
      {emoji:"🐶", word:"le chien", english:"dog"},
      {emoji:"🐱", word:"le chat", english:"cat"},
      {emoji:"🐭", word:"la souris", english:"mouse"},
      {emoji:"🐰", word:"le lapin", english:"rabbit"},
      {emoji:"🐔", word:"le poulet", english:"chicken"},
      {emoji:"🦆", word:"le canard", english:"duck"},
      {emoji:"🐴", word:"le cheval", english:"horse"},
      {emoji:"🐮", word:"la vache", english:"cow"},
      {emoji:"🐷", word:"le cochon", english:"pig"},
      {emoji:"🐟", word:"le poisson", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"la pomme", english:"apple"},
      {emoji:"🍓", word:"la fraise", english:"strawberry"},
      {emoji:"🍅", word:"la tomate", english:"tomato"},
      {emoji:"🥕", word:"la carotte", english:"carrot"},
      {emoji:"🥔", word:"la pomme de terre", english:"potato"},
      {emoji:"🥖", word:"le pain", english:"bread"},
      {emoji:"🧀", word:"le fromage", english:"cheese"},
      {emoji:"🥚", word:"l'œuf", english:"egg"},
      {emoji:"🥗", word:"la salade", english:"salad"},
      {emoji:"🍬", word:"les bonbons", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"le père", english:"father"},
      {emoji:"👩", word:"la mère", english:"mother"},
      {emoji:"👦", word:"le fils", english:"son"},
      {emoji:"👧", word:"la fille", english:"daughter"},
      {emoji:"👶", word:"le bébé", english:"baby"},
      {emoji:"👴", word:"le grand-père", english:"grandfather"},
      {emoji:"👵", word:"la grand-mère", english:"grandmother"},
      {emoji:"👦", word:"le petit-fils", english:"grandson"},
      {emoji:"👧", word:"la petite-fille", english:"granddaughter"},
      {emoji:"👨‍🦰", word:"l'oncle", english:"uncle"},
      {emoji:"👩‍🦰", word:"la tante", english:"aunt"},
      {emoji:"🧑‍🦰", word:"le cousin", english:"cousin (m)"},
      {emoji:"👱‍♀️", word:"la cousine", english:"cousin (f)"},
      {emoji:"👦", word:"le neveu", english:"nephew"},
      {emoji:"👧", word:"la nièce", english:"niece"},
      {emoji:"👩‍⚕️", word:"le médecin", english:"doctor"}
    ],
    "Jobs":[
      {emoji:"😷", word:"le dentiste", english:"dentist"},
      {emoji:"👩‍⚕️", word:"l'infirmière", english:"nurse"},
      {emoji:"🧑‍💼", word:"l'avocat", english:"lawyer"},
      {emoji:"👩‍🏫", word:"le professeur", english:"teacher"},
      {emoji:"👩‍💻", word:"l'élève", english:"student"},
      {emoji:"👩‍💻", word:"la secrétaire", english:"secretary"},
      {emoji:"👨‍🚒", word:"le pompier", english:"firefighter"},
      {emoji:"👮‍♂️", word:"le policier", english:"policeman"},
      {emoji:"🪖", word:"le soldat", english:"soldier"},
      {emoji:"🧑‍🌾", word:"le fermier", english:"farmer"},
      {emoji:"🧑‍💼", word:"le journaliste", english:"journalist"},
      {emoji:"👨‍🔧", word:"le mécanicien", english:"mechanic"},
      {emoji:"🧑‍⚕️", word:"le vétérinaire", english:"veterinarian"},
      {emoji:"💁🏻‍♂️", word:"le serveur", english:"waiter"},
      {emoji:"👨‍🍳", word:"le cuisinier", english:"cook"}
    ]
  },

  "Italian": {
    "Animals": [
      {emoji:"🐶", word:"il cane", english:"dog"},
      {emoji:"🐱", word:"il gatto", english:"cat"},
      {emoji:"🐭", word:"il topo", english:"mouse"},
      {emoji:"🐰", word:"il coniglio", english:"rabbit"},
      {emoji:"🐔", word:"il pollo", english:"chicken"},
      {emoji:"🦆", word:"l'anatra", english:"duck"},
      {emoji:"🐴", word:"il cavallo", english:"horse"},
      {emoji:"🐮", word:"la mucca", english:"cow"},
      {emoji:"🐷", word:"il maiale", english:"pig"},
      {emoji:"🐟", word:"il pesce", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"la mela", english:"apple"},
      {emoji:"🍓", word:"la fragola", english:"strawberry"},
      {emoji:"🍅", word:"il pomodoro", english:"tomato"},
      {emoji:"🥕", word:"la carota", english:"carrot"},
      {emoji:"🥔", word:"la patata", english:"potato"},
      {emoji:"🥖", word:"il pane", english:"bread"},
      {emoji:"🧀", word:"il formaggio", english:"cheese"},
      {emoji:"🥚", word:"l'uovo", english:"egg"},
      {emoji:"🥗", word:"l'insalata", english:"salad"},
      {emoji:"🍬", word:"i dolci", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"il padre", english:"father"},
      {emoji:"👩", word:"la madre", english:"mother"},
      {emoji:"👦", word:"il figlio", english:"son"},
      {emoji:"👧", word:"la figlia", english:"daughter"},
      {emoji:"👶", word:"il bambino", english:"baby"},
      {emoji:"👴", word:"il nonno", english:"grandfather"},
      {emoji:"👵", word:"la nonna", english:"grandmother"},
      {emoji:"👦", word:"il nipote", english:"grandson"},
      {emoji:"👧", word:"la nipote", english:"granddaughter"},
      {emoji:"👨‍🦰", word:"lo zio", english:"uncle"},
      {emoji:"👩‍🦰", word:"la zia", english:"aunt"},
      {emoji:"🧑‍🦰", word:"il cugino", english:"cousin (m)"},
      {emoji:"👱‍♀️", word:"la cugina", english:"cousin (f)"},
      {emoji:"👦", word:"il nipote", english:"nephew"},
      {emoji:"👧", word:"la nipote", english:"niece"},
      {emoji:"👩‍⚕️", word:"il medico", english:"doctor"}
    ],
    "Jobs":[
      {emoji:"😷", word:"il dentista", english:"dentist"},
      {emoji:"👩‍⚕️", word:"l'infermiera", english:"nurse"},
      {emoji:"🧑‍💼", word:"l'avvocato", english:"lawyer"},
      {emoji:"👩‍🏫", word:"il professore", english:"teacher"},
      {emoji:"👩‍💻", word:"lo studente", english:"student"},
      {emoji:"👩‍💻", word:"la segretaria", english:"secretary"},
      {emoji:"👨‍🚒", word:"il pompiere", english:"firefighter"},
      {emoji:"👮‍♂️", word:"il poliziotto", english:"policeman"},
      {emoji:"🪖", word:"il soldato", english:"soldier"},
      {emoji:"🧑‍🌾", word:"il contadino", english:"farmer"},
      {emoji:"🧑‍💼", word:"il giornalista", english:"journalist"},
      {emoji:"👨‍🔧", word:"il meccanico", english:"mechanic"},
      {emoji:"🧑‍⚕️", word:"il veterinario", english:"veterinarian"},
      {emoji:"💁🏻‍♂️", word:"il cameriere", english:"waiter"},
      {emoji:"👨‍🍳", word:"lo chef", english:"cook"}
    ]
  },

  "English": {
    "Animals": [
      {emoji:"🐶", word:"dog", english:"dog"},
      {emoji:"🐱", word:"cat", english:"cat"},
      {emoji:"🐭", word:"mouse", english:"mouse"},
      {emoji:"🐰", word:"rabbit", english:"rabbit"},
      {emoji:"🐔", word:"chicken", english:"chicken"},
      {emoji:"🦆", word:"duck", english:"duck"},
      {emoji:"🐴", word:"horse", english:"horse"},
      {emoji:"🐮", word:"cow", english:"cow"},
      {emoji:"🐷", word:"pig", english:"pig"},
      {emoji:"🐟", word:"fish", english:"fish"}
    ],
    "Food":[
      {emoji:"🍎", word:"apple", english:"apple"},
      {emoji:"🍓", word:"strawberry", english:"strawberry"},
      {emoji:"🍅", word:"tomato", english:"tomato"},
      {emoji:"🥕", word:"carrot", english:"carrot"},
      {emoji:"🥔", word:"potato", english:"potato"},
      {emoji:"🥖", word:"bread", english:"bread"},
      {emoji:"🧀", word:"cheese", english:"cheese"},
      {emoji:"🥚", word:"egg", english:"egg"},
      {emoji:"🥗", word:"salad", english:"salad"},
      {emoji:"🍬", word:"sweets", english:"sweets"}
    ],
    "Family":[
      {emoji:"👨", word:"father", english:"father"},
      {emoji:"👩", word:"mother", english:"mother"},
      {emoji:"👦", word:"son", english:"son"},
      {emoji:"👧", word:"daughter", english:"daughter"},
      {emoji:"👶", word:"baby", english:"baby"},
      {emoji:"👴", word:"grandfather", english:"grandfather"},
      {emoji:"👵", word:"grandmother", english:"grandmother"},
      {emoji:"👦", word:"grandson", english:"grandson"},
      {emoji:"👧", word:"granddaughter", english:"granddaughter"},
      {emoji:"👨‍🦰", word:"uncle", english:"uncle"},
      {emoji:"👩‍🦰", word:"aunt", english:"aunt"},
      {emoji:"🧑‍🦰", word:"cousin (m)", english:"cousin (m)"},
      {emoji:"👱‍♀️", word:"cousin (f)", english:"cousin (f)"},
      {emoji:"👦", word:"nephew", english:"nephew"},
      {emoji:"👧", word:"niece", english:"niece"},
      {emoji:"👩‍⚕️", word:"doctor", english:"doctor"}
    ],
    "Jobs":[
      {emoji:"😷", word:"dentist", english:"dentist"},
      {emoji:"👩‍⚕️", word:"nurse", english:"nurse"},
      {emoji:"🧑‍💼", word:"lawyer", english:"lawyer"},
      {emoji:"👩‍🏫", word:"teacher", english:"teacher"},
      {emoji:"👩‍💻", word:"student", english:"student"},
      {emoji:"👩‍💻", word:"secretary", english:"secretary"},
      {emoji:"👨‍🚒", word:"firefighter", english:"firefighter"},
      {emoji:"👮‍♂️", word:"policeman", english:"policeman"},
      {emoji:"🪖", word:"soldier", english:"soldier"},
      {emoji:"🧑‍🌾", word:"farmer", english:"farmer"},
      {emoji:"🧑‍💼", word:"journalist", english:"journalist"},
      {emoji:"👨‍🔧", word:"mechanic", english:"mechanic"},
      {emoji:"🧑‍⚕️", word:"veterinarian", english:"veterinarian"},
      {emoji:"💁🏻‍♂️", word:"waiter", english:"waiter"},
      {emoji:"👨‍🍳", word:"cook", english:"cook"}
    ]
  }
};


/* ------------------ Utilities ------------------ */
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
  // accept ae/oe/ue typed as such by mapping to base char (helpful for German)
  s = s.replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  // remove leading articles (a few languages) for forgiving matching
  s = s.replace(/^(le |la |l'|der |die |das |il |lo |la |le |les |the )/i,'');
  return s;
}

function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

/* ------------------ Page behaviours ------------------ */

/* index.html */
function renderLanguages(){
  document.getElementById('appTitle').innerText = APP_TITLE;
  const langs = Object.keys(DATA);
  const container = document.getElementById('langGrid');
  container.innerHTML = '';
  langs.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card';
    // use emoji flag based on language key
    const flag = l === 'German' ? '🇩🇪' : (l === 'French' ? '🇫🇷' : (l === 'Italian' ? '🇮🇹' : '🇬🇧'));
    card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${flag}</div><div class="card-title">${l}</div><div class="small">Start ${l}</div></div>`;
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
    const emoji = t === 'Animals' ? '🐾' : (t === 'Food' ? '🍽️' : (t === 'Family' ? '👨‍👩‍👧‍👦' : '💼'));
    card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${emoji}</div><div class="card-title">${t}</div><div class="small">Practice ${t}</div></div>`;
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
  sessionCorrectInRow: 0
};

function startPractice(){
  document.getElementById('appTitle').innerText = APP_TITLE;
  const lang = load('language') || Object.keys(DATA)[0];
  const theme = load('theme') || Object.keys(DATA[lang])[0];
  document.getElementById('subtitle').innerText = `${lang} • ${theme}`;

  const words = (DATA[lang] && DATA[lang][theme]) ? DATA[lang][theme] : [];
  practiceState.list = shuffle(words);
  practiceState.index = 0;
  practiceState.sessionCorrectInRow = 0;
  // alias: ensure entries have 'german' property because existing render expects cur.german
  practiceState.list = practiceState.list.map(item => {
    // set german alias to the language word (for compatibility)
    item.german = item.word;
    return item;
  });
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
  document.getElementById('prompt').innerText = 'Type the word';
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
  const normCorrect = normalizeAnswer(cur.german); // cur.german is alias to the language word

  if(normUser === normCorrect){
    // correct
    practiceState.sessionCorrectInRow++;
    showFeedback(true, cur);
    // update consecutive streak in localStorage
    let cs = load('consecStreak') || 0;
    cs = cs + 1;
    save('consecStreak', cs);
    // advance automatically after a short pause
    setTimeout(()=>{ nextWord(); }, 650);
  } else {
    // wrong -> reset consecutive streak
    practiceState.sessionCorrectInRow = 0;
    save('consecStreak', 0);
    showFeedback(false, cur);
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
  const consec = load('consecStreak') || 0;
  document.getElementById('streakBadge').innerText = `🔥 Streak: ${consec}`;
  updateProgress();
}

/* Bind: run page-specific setup from HTML:
   index.html -> renderLanguages()
   theme.html -> renderThemes()
   practice.html -> startPractice()
*/
