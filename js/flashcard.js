// ===================================================
// FLASHCARD
// ===================================================
let fcCards = [];
let fcIdx = 0;

function getAllWords() {
  return VOCAB_DATA.flatMap(l => l.words.map(w => ({...w, lesson: l.lesson})));
}

// Tự động điền danh sách buổi học từ VOCAB_DATA (không bị thiếu buổi mới)
function populateFCLessons() {
  const sel = document.getElementById('fcLesson');
  if (!sel || sel.dataset.loaded) return;
  sel.dataset.loaded = '1';
  while (sel.options.length > 1) sel.remove(1); // giữ lại "Tất cả buổi học"
  VOCAB_DATA.forEach((lesson, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = lesson.lesson;
    sel.appendChild(opt);
  });
}

function initFlashcard() {
  populateFCLessons();
  const sel = document.getElementById('fcLesson').value;
  if (sel === 'all') {
    fcCards = getAllWords();
  } else {
    const lesson = VOCAB_DATA[parseInt(sel)];
    fcCards = lesson ? lesson.words.map(w => ({...w})) : [];
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
  if (fcCards.length === 0) { initFlashcard(); if (fcCards.length === 0) return; }
  document.getElementById('flashcardWrap').classList.toggle('flipped');
  if (document.getElementById('flashcardWrap').classList.contains('flipped')) {
    speak(fcCards[fcIdx].zh);
  }
}

function nextCard() {
  if (fcCards.length === 0) return;
  fcIdx = (fcIdx + 1) % fcCards.length;
  updateFC();
}

function prevCard() {
  if (fcCards.length === 0) return;
  fcIdx = (fcIdx - 1 + fcCards.length) % fcCards.length;
  updateFC();
}

function shuffleFlashcard() {
  if (fcCards.length === 0) return;
  for (let i = fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcCards[i], fcCards[j]] = [fcCards[j], fcCards[i]];
  }
  fcIdx = 0;
  updateFC();
}

// ===================================================
// EXERCISES
