// ===================================================
let fcCards = [];
let fcIdx = 0;

function getAllWords() {
  return VOCAB_DATA.flatMap(l => l.words.map(w => ({...w, lesson: l.lesson})));
}

function initFlashcard() {
  const sel = document.getElementById('fcLesson').value;
  if (sel === 'all') {
    fcCards = getAllWords();
  } else {
    fcCards = VOCAB_DATA[parseInt(sel)].words.map(w => ({...w}));
  }
  fcIdx = 0;
  document.getElementById('flashcardWrap').classList.remove('flipped');
  updateFC();
}

function updateFC() {
  if (fcCards.length === 0) return;
  const w = fcCards[fcIdx];
  document.getElementById('fcZh').textContent = w.zh;
  document.getElementById('fcZh2').textContent = w.zh;
  document.getElementById('fcPy').textContent = w.py;
  document.getElementById('fcVi').textContent = w.vi + (w.type ? ' (' + w.type + ')' : '');
  document.getElementById('fcProgress').textContent = (fcIdx+1) + ' / ' + fcCards.length;
  document.getElementById('flashcardWrap').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('flashcardWrap').classList.toggle('flipped');
  if (document.getElementById('flashcardWrap').classList.contains('flipped')) {
    speak(fcCards[fcIdx].zh);
  }
}

function nextCard() {
  fcIdx = (fcIdx + 1) % fcCards.length;
  updateFC();
}

function prevCard() {
  fcIdx = (fcIdx - 1 + fcCards.length) % fcCards.length;
  updateFC();
}

function shuffleFlashcard() {
  for (let i = fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcCards[i], fcCards[j]] = [fcCards[j], fcCards[i]];
  }
  fcIdx = 0;
  updateFC();
}

// ===================================================
// EXERCISES
