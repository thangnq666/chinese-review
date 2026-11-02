// ===================================================
// FLASHCARD — lật thẻ, Đã nhớ / Chưa nhớ, hai chiều Hán↔Việt
// ===================================================
let fcCards = [];
let fcIdx = 0;
let fcDir = 'zh';          // 'zh' = mặt trước chữ Hán, 'vi' = mặt trước nghĩa
let fcKnown = 0, fcAgain = 0;

function getAllWords() {
  return VOCAB_DATA.flatMap(l => l.words.map(w => ({...w, lesson: l.lesson})));
}

// Tự động điền danh sách buổi học từ VOCAB_DATA (mới nhất trước)
function populateFCLessons() {
  const sel = document.getElementById('fcLesson');
  if (!sel || sel.dataset.loaded) return;
  sel.dataset.loaded = '1';
  const total = VOCAB_DATA.reduce((a, l) => a + l.words.length, 0);
  let html = '';
  for (let i = VOCAB_DATA.length - 1; i >= 0; i--) {
    const t = parseLessonTitle(VOCAB_DATA[i].lesson);
    html += '<option value="' + i + '">' + escHtml(t.num + ' · ' + t.short + ' (' + VOCAB_DATA[i].words.length + ')') + '</option>';
  }
  html += '<option value="all">Tất cả ' + VOCAB_DATA.length + ' buổi (' + total + ' từ)</option>';
  sel.innerHTML = html;
  sel.value = String(VOCAB_DATA.length - 1);
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
  fcIdx = 0; fcKnown = 0; fcAgain = 0;
  updateFC();
}

function _fcSetFlipped(on) {
  const wrap = document.getElementById('flashcardWrap');
  wrap.classList.toggle('flipped', on);
  document.querySelector('.fc-layout').classList.toggle('is-flipped', on);
}

function updateFC() {
  const total = fcCards.length;
  document.getElementById('fcProgress').textContent = total ? ('Thẻ ' + (fcIdx + 1) + ' / ' + total) : 'Chưa có thẻ';
  document.getElementById('fcProgressFill').style.width = total ? Math.round((fcIdx + 1) / total * 100) + '%' : '0%';
  document.getElementById('fcKnown').textContent = fcKnown;
  document.getElementById('fcAgain').textContent = fcAgain;
  document.getElementById('fcLeft').textContent = Math.max(0, total - fcIdx - 1);
  if (!total) return;
  const w = fcCards[fcIdx];
  const ts = typeStyle(w.type);
  document.getElementById('fcZh').textContent = w.zh;
  document.getElementById('fcZh2').textContent = w.zh;
  document.getElementById('fcPy').innerHTML = toneHtml(w.py);
  document.getElementById('fcVi').textContent = w.vi;
  document.getElementById('fcViFront').textContent = w.vi;
  const tp = document.getElementById('fcType');
  tp.className = 'type-pill ' + ts.cls;
  tp.textContent = w.type || '';
  document.getElementById('fcArt').innerHTML = wordArtHtml(w, 88);
  document.getElementById('fcArtFront').innerHTML = wordArtHtml(w, 96);
  const e = w.ex && w.ex[0];
  document.getElementById('fcEx').innerHTML = e
    ? '<span class="ex-zh-line" lang="zh">' + escHtml(e.zh) + '</span><span class="ex-py-line">' + escHtml(e.py) + '</span><span class="ex-vi-line">' + escHtml(e.vi) + '</span>'
    : '';
  document.getElementById('flashcardWrap').dataset.dir = fcDir;
  _fcSetFlipped(false);
}

function flipCard() {
  if (fcCards.length === 0) { initFlashcard(); if (fcCards.length === 0) return; }
  const wrap = document.getElementById('flashcardWrap');
  const on = !wrap.classList.contains('flipped');
  _fcSetFlipped(on);
  const auto = document.getElementById('fcAutoSpeak');
  if (on && (!auto || auto.checked)) speak(fcCards[fcIdx].zh);
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

// Đã nhớ → sang thẻ sau; Chưa nhớ → chép thẻ xuống cuối bộ để ôn lại
function rateCard(known) {
  if (fcCards.length === 0) return;
  if (known) fcKnown++;
  else { fcAgain++; fcCards.push({...fcCards[fcIdx]}); }
  if (fcIdx < fcCards.length - 1) fcIdx++;
  updateFC();
}

function setFcDir(dir, btn) {
  fcDir = dir;
  document.querySelectorAll('.seg-btn[data-dir]').forEach(b => {
    const on = b.dataset.dir === dir;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  updateFC();
}

function shuffleFlashcard() {
  if (fcCards.length === 0) return;
  for (let i = fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcCards[i], fcCards[j]] = [fcCards[j], fcCards[i]];
  }
  fcIdx = 0; fcKnown = 0; fcAgain = 0;
  updateFC();
}
