/* app.js - Memolingua MVP with Trial Mode
   - Trial mode: only Animals category unlocked
   - After completing Animals, redirect to email collection
   - Full access after email signup
*/

const APP_TITLE = 'Memolingua';

/* ------------------ Trial Mode Check ------------------ */
function isTrialMode(){
  return load('trialMode') === true;
}

function hasFullAccess(){
  return load('hasFullAccess') === true;
}

function hasCompletedTrial(){
  return load('trialCompleted') === true;
}

function setTrialMode(){
  save('trialMode', true);
  save('hasFullAccess', false);
}

function setFullAccess(){
  save('hasFullAccess', true);
  save('trialMode', false);
}

function markTrialCompleted(){
  save('trialCompleted', true);
}

/* ------------------ Utilities ------------------ */
function save(key, val){ localStorage.setItem('ml_' + key, JSON.stringify(val)); }
function load(key){ const s = localStorage.getItem('ml_' + key); return s ? JSON.parse(s) : null; }

function stripDiacritics(str){ return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
function normalizeAnswer(s){
  if(!s) return '';
  s = s.trim().toLowerCase();
  s = stripDiacritics(s);
  s = s.replace(/\s+/g,' ');
  s = s.replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
  s = s.replace(/^(le |la |l'|der |die |das |il |lo |la |le |les |the )/i,'');
  return s;
}
function shuffle(arr){ return arr.slice().sort(()=>Math.random()-0.5); }

/* ------------------ Email Storage ------------------ */
function saveEmail(email){
  const emails = load('collectedEmails') || [];
  if(!emails.includes(email)){
    emails.push(email);
    save('collectedEmails', emails);
  }
  setFullAccess();
}

// Admin function to export emails (call in console: exportEmails())
function exportEmails(){
  const emails = load('collectedEmails') || [];
  console.log('=== COLLECTED EMAILS ===');
  console.log(emails.join('\n'));
  console.log(`Total: ${emails.length}`);
  return emails;
}

/* ------------------ index.html (Languages) ------------------ */
function renderLanguages(){
  const titleEl = document.getElementById('appTitle');
  if(titleEl) titleEl.innerText = APP_TITLE;
  const langs = Object.keys(DATA);
  const container = document.getElementById('langGrid');
  if(!container) return;
  container.innerHTML = '';
  langs.forEach(l => {
    const card = document.createElement('div');
    card.className = 'card';
    const flag = l === 'German' ? '<img src="img/de.png" width="40" alt="de">' :
                 l === 'French' ? '<img src="img/fr.png" width="40" alt="fr">' :
                 l === 'Italian' ? '<img src="img/it.png" width="40" alt="it">' :
                 '<img src="img/en.png" width="40" alt="en">';
    card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${flag}</div><div class="card-title">${l}</div><div class="small">Start ${l}</div></div>`;
    card.onclick = ()=>{ save('language', l); window.location.href = 'theme.html'; };
    container.appendChild(card);
  });
}

/* ------------------ theme.html (Themes + Pagination) ------------------ */
const allThemes = [
  { name: "Animals", emoji: "🐶" },
  { name: "Food", emoji: "🍎" },
  { name: "Family", emoji: "👨‍👩‍👧‍👦" },
  { name: "Jobs", emoji: "👩‍⚕️" },
  { name: "Body", emoji: "💪" },
  { name: "Clothes", emoji: "👕" },
  { name: "Colors", emoji: "🎨" },
  { name: "Numbers", emoji: "🔢" }
];

let themePage = 0;
const themesPerPage = 4;

function renderThemes(){
  const grid = document.getElementById('themeGrid');
  const subtitle = document.getElementById('subtitle');
  const lang = load('language') || Object.keys(DATA)[0];
  if(subtitle) subtitle.innerText = `Language: ${lang}`;
  if(!grid) return;

  grid.innerHTML = '';
  const start = themePage * themesPerPage;
  const visibleThemes = allThemes.slice(start, start + themesPerPage);

  const trial = isTrialMode();
  const completed = hasCompletedTrial();

  visibleThemes.forEach(t => {
    const card = document.createElement('div');
    const isLocked = trial && t.name !== 'Animals';
    
    if(isLocked){
      card.className = 'card locked';
      card.style.opacity = '0.4';
      card.style.cursor = 'not-allowed';
      card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${t.emoji}</div><div class="card-title">${t.name}</div><div class="small">🔒 Locked</div></div>`;
      card.onclick = () => {
        if(completed){
          // Already completed trial, redirect to email
          window.location.href = 'email.html';
        } else {
          alert('Complete the Animals category to unlock full access!');
        }
      };
    } else {
      card.className = 'card';
      card.onclick = () => selectTheme(t.name);
      card.innerHTML = `<div style="text-align:center"><div class="lang-emoji">${t.emoji}</div><div class="card-title">${t.name}</div><div class="small">Practice ${t.name}</div></div>`;
    }
    
    grid.appendChild(card);
  });

  const prev = document.getElementById('prevThemes');
  const next = document.getElementById('nextThemes');
  if(prev) prev.disabled = themePage === 0;
  if(next) next.disabled = start + themesPerPage >= allThemes.length;
}

function selectTheme(themeName){
  save('theme', themeName);
  window.location.href = 'practice.html';
}

/* ------------------ practice.html (Practice / Progress / Streak / Feedback) ------------------ */
let practiceState = { list: [], index: 0, sessionCorrectInRow: 0 };

function startPractice(){
  const titleEl = document.getElementById('appTitle');
  if(titleEl) titleEl.innerText = APP_TITLE;

  const lang = load('language') || Object.keys(DATA)[0];
  const theme = load('theme') || (DATA[lang] ? Object.keys(DATA[lang])[0] : 'Animals');
  const subtitle = document.getElementById('subtitle');
  if(subtitle) subtitle.innerText = `${lang} • ${theme}`;

  const words = (DATA[lang] && DATA[lang][theme]) ? DATA[lang][theme] : [];
  practiceState.list = shuffle(words).map(item => ({ ...item, german: item.word }));
  practiceState.index = 0;
  practiceState.sessionCorrectInRow = 0;

  renderCurrent();
  updateStatus();

  setTimeout(() => {
    const flipCard = document.getElementById("flipCard");
    if (flipCard) {
      flipCard.onclick = () => flipCard.classList.toggle("flipped");
    }
  }, 0);

  const form = document.getElementById('answerForm');
  if(form){
    form.onsubmit = (e) => { e.preventDefault(); handleSubmit(); };
  }
  const input = document.getElementById('answerInput');
  if(input) input.focus();
}

function renderCurrent(){
  const cur = practiceState.list[practiceState.index];

  const flipFront = document.getElementById("flipFront");
  const flipBack = document.getElementById("flipBack");
  const flipCard = document.getElementById("flipCard");
  const emojiBox = document.getElementById('emojiBox');
  const prompt = document.getElementById('prompt');
  const input = document.getElementById('answerInput');

  if(!cur){
    if(flipFront) flipFront.textContent = '🎉';
    if(flipBack)  flipBack.textContent = '';
    if(flipCard)  flipCard.classList.remove('flipped');
    if(emojiBox) emojiBox.textContent = '🎉';
    if(prompt) prompt.innerText = 'All done — nice! Tap Restart or change theme.';
    if(input) input.value = '';
    updateProgress();
    return;
  }

  if(flipFront) flipFront.textContent = cur.emoji;
  if(flipBack)  flipBack.textContent = cur.english || '';
  if(flipCard)  flipCard.classList.remove('flipped');

  if(prompt) prompt.innerText = 'Need help? Click on the card above';

  if(emojiBox) emojiBox.textContent = cur.emoji;

  if(input) input.value = '';

  updateProgress();
}

function updateProgress(){
  const total = practiceState.list.length;
  const idx = Math.min(practiceState.index, total);
  const percent = total ? Math.round((idx / total) * 100) : 0;
  const bar = document.querySelector('.progress > i');
  if(bar) bar.style.width = `${percent}%`;
  const txt = document.getElementById('progressText');
  if(txt) txt.innerText = `${idx} / ${total}`;
}

function updateStatus(){
  const consec = load('consecStreak') || 0;
  const badge = document.getElementById('streakBadge');
  if(badge) badge.innerText = `🔥 Streak: ${consec}`;
}

function handleSubmit(){
  const input = document.getElementById('answerInput');
  const cur = practiceState.list[practiceState.index];
  if(!cur || !input) return;

  const normUser = normalizeAnswer(input.value);
  const normCorrect = normalizeAnswer(cur.german);

  if(normUser === normCorrect){
    practiceState.sessionCorrectInRow++;
    let cs = load('consecStreak') || 0;
    cs = cs + 1;
    save('consecStreak', cs);
    showFeedback(true, cur);
    setTimeout(()=> nextWord(), 650);
  } else {
    practiceState.sessionCorrectInRow = 0;
    save('consecStreak', 0);
    showFeedback(false, cur);
  }

  updateStatus();
}

function showFeedback(ok, cur){
  const fb = document.getElementById('feedback');
  if(!fb) return;
  fb.className = ok ? 'feedback correct' : 'feedback wrong';
  fb.innerText = ok ? `✅ Correct — ${cur.german} (${cur.english})` : `❌ Nope — correct: ${cur.german}`;
}

function nextWord(){
  practiceState.index++;
  const total = practiceState.list.length;
  const fb = document.getElementById('feedback');

  if(practiceState.index >= total){
    // Session complete
    const perfectRound = practiceState.sessionCorrectInRow === total;
    const flipFront = document.getElementById("flipFront");
    const flipBack = document.getElementById("flipBack");
    const flipCard = document.getElementById("flipCard");
    const prompt = document.getElementById('prompt');

    if(perfectRound){
      if(flipFront) flipFront.textContent = '🎉';
      if(flipBack)  flipBack.textContent = '';
      if(flipCard)  flipCard.classList.remove('flipped');
      if(prompt) prompt.innerText = 'Perfect round — you nailed it! 🎊';
      triggerConfetti();
    } else {
      if(flipFront) flipFront.textContent = '🏁';
      if(flipBack)  flipBack.textContent = '';
      if(flipCard)  flipCard.classList.remove('flipped');
      if(prompt) prompt.innerText = 'Session complete — nice work!';
    }

    if(document.getElementById('answerInput')) document.getElementById('answerInput').value = '';
    if(fb) fb.innerText = '';
    practiceState.sessionCorrectInRow = 0;

    // TRIAL MODE: redirect to email collection if trial user completes Animals
    const theme = load('theme');
    if(isTrialMode() && theme === 'Animals'){
      markTrialCompleted();
      setTimeout(() => {
        window.location.href = 'email.html';
      }, 2000); // 2 second delay to show completion
    }
  } else {
    renderCurrent();
  }

  updateProgress();
  updateStatus();
}

function revealAnswer(){
  const cur = practiceState.list[practiceState.index];
  const fb = document.getElementById('feedback');
  const flipBack = document.getElementById("flipBack");
  const flipCard = document.getElementById("flipCard");
  if(cur){
    if(fb){ fb.className = 'feedback'; fb.innerText = `Answer: ${cur.german} — ${cur.english}`; }
    if(flipBack) flipBack.textContent = cur.english || '';
    if(flipCard) flipCard.classList.add('flipped');
  }
}

function restartPractice(){
  practiceState.list = shuffle(practiceState.list);
  practiceState.index = 0;
  practiceState.sessionCorrectInRow = 0;
  const fb = document.getElementById('feedback');
  if(fb) fb.innerText = '';
  renderCurrent();
  updateStatus();
}

/* ------------------ Confetti ------------------ */
function triggerConfetti(){
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.overflow = 'visible';
  confettiContainer.className = 'confetti-container';
  document.body.appendChild(confettiContainer);

  const colors = ['#2979FF','#FF5A5F','#FFCC00'];
  for(let i=0;i<100;i++){
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    confetti.style.top = '-10px';
    confetti.style.left = Math.random()*window.innerWidth + 'px';
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random()*360}deg)`;
    confetti.style.borderRadius = '50%';
    confettiContainer.appendChild(confetti);

    const duration = 2000 + Math.random()*2000;
    confetti.animate([
      { transform: `translateY(0px) rotate(${Math.random()*360}deg)` },
      { transform: `translateY(${window.innerHeight+50}px) rotate(${Math.random()*720}deg)` }
    ], {duration: duration, iterations: 1, easing: 'ease-out'});

    setTimeout(()=>{ confetti.remove(); }, duration);
  }

  setTimeout(()=>{ confettiContainer.remove(); }, 4200);
}

/* ------------------ Security: Block non-Animals access in trial mode ------------------ */
function enforceTrialRestrictions(){
  // Only enforce on practice page
  if(document.body && document.body.id === 'page-practice'){
    const theme = load('theme');
    if(isTrialMode() && theme !== 'Animals'){
      // Trying to access locked category - redirect back to theme selection
      alert('This category is locked. Complete the Animals trial to unlock full access!');
      window.location.href = 'theme.html';
      return false;
    }
  }
  return true;
}

/* ------------------ Check for Beta Access Key in URL ------------------ */
function checkBetaAccessKey(){
  const urlParams = new URLSearchParams(window.location.search);
  const key = urlParams.get('key');
  
  // If they have the magic key, grant full access permanently
  if(key === 'fullaccess'){
    setFullAccess();
    // Clean up URL (remove the key) for cleaner look
    window.history.replaceState({}, document.title, window.location.pathname);
    return true;
  }
  return false;
}

/* ------------------ Boot (single DOMContentLoaded handler) ------------------ */
document.addEventListener('DOMContentLoaded', () => {
  // FIRST: Check if they came from a beta access link
  checkBetaAccessKey();
  
  // CRITICAL: Enforce trial restrictions before anything else
  if(!enforceTrialRestrictions()) return;
  
  if(document.getElementById('langGrid')) renderLanguages();
  if(document.getElementById('themeGrid')) renderThemes();
  
  const prevBtn = document.getElementById('prevThemes');
  const nextBtn = document.getElementById('nextThemes');
  if(prevBtn && nextBtn){
    prevBtn.addEventListener('click', () => { if(themePage>0){ themePage--; renderThemes(); }});
    nextBtn.addEventListener('click', () => { if((themePage+1)*themesPerPage < allThemes.length){ themePage++; renderThemes(); }});
  }
  
  if(document.body && document.body.id === 'page-practice') startPractice();
});