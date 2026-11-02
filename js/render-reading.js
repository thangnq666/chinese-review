// ===================================================
// BÀI ĐỌC — mỗi buổi một bài theo chủ đề; đọc từng câu / cả bài, ẩn-hiện pinyin & dịch, câu hỏi đọc hiểu
// ===================================================
let _rdIdx = null;                       // vị trí bài đang xem trong READING_DATA
let _rdShowPy = true, _rdShowVi = true;
let _readingPlaying = false;

function _rdLoadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem('zh_reading_v1') || '{}');
    if (typeof p.py === 'boolean') _rdShowPy = p.py;
    if (typeof p.vi === 'boolean') _rdShowVi = p.vi;
  } catch (e) {}
}
function _rdSavePrefs() {
  try { localStorage.setItem('zh_reading_v1', JSON.stringify({ py: _rdShowPy, vi: _rdShowVi })); } catch (e) {}
}

function _rdLessonLabel(r) {
  if (typeof r.lessonIdx !== 'number') return r.level || 'Tổng hợp';
  return parseLessonTitle(VOCAB_DATA[r.lessonIdx].lesson).num;
}

// Thứ tự hiển thị: buổi mới nhất trước, bài tổng hợp cuối
function _rdOrder() {
  return READING_DATA.map((r, i) => i).sort((a, b) => {
    const la = READING_DATA[a].lessonIdx, lb = READING_DATA[b].lessonIdx;
    const va = typeof la === 'number' ? la : -1, vb = typeof lb === 'number' ? lb : -1;
    return vb - va;
  });
}

function renderReading() {
  const sel = document.getElementById('readingSelect');
  if (!sel) return;
  _rdLoadPrefs();
  if (!sel.dataset.loaded) {
    sel.dataset.loaded = '1';
    sel.innerHTML = _rdOrder().map(i => {
      const r = READING_DATA[i];
      return '<option value="' + i + '">' + escHtml(_rdLessonLabel(r) + ' · ' + r.title) + '</option>';
    }).join('');
  }
  if (_rdIdx === null) _rdIdx = _rdOrder()[0];
  sel.value = String(_rdIdx);
  document.getElementById('rdTogglePy').classList.toggle('active', _rdShowPy);
  document.getElementById('rdToggleVi').classList.toggle('active', _rdShowVi);
  const cnt = document.getElementById('readingCount');
  if (cnt) cnt.textContent = READING_DATA.length + ' bài đọc theo chủ đề — mỗi bài chỉ dùng chữ đã học tới buổi đó.';
  _renderPassage();
}

function setReading(v) {
  stopReading();
  _rdIdx = +v;
  _renderPassage();
  const top = document.getElementById('readingContainer');
  if (top) top.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function stepReading(dir) {
  const order = _rdOrder();
  const pos = order.indexOf(_rdIdx);
  const next = order[pos + dir];
  if (next === undefined) return;
  document.getElementById('readingSelect').value = String(next);
  setReading(next);
}

function toggleReadingAid(kind) {
  if (kind === 'py') _rdShowPy = !_rdShowPy; else _rdShowVi = !_rdShowVi;
  _rdSavePrefs();
  document.getElementById('rdTogglePy').classList.toggle('active', _rdShowPy);
  document.getElementById('rdToggleVi').classList.toggle('active', _rdShowVi);
  const box = document.getElementById('readingContainer');
  box.classList.toggle('rd-hide-py', !_rdShowPy);
  box.classList.toggle('rd-hide-vi', !_rdShowVi);
}

function _rdWordInfo(zh) {
  for (const l of VOCAB_DATA) {
    const w = l.words.find(x => x.zh === zh);
    if (w) return w;
  }
  return null;
}

function _renderPassage() {
  const box = document.getElementById('readingContainer');
  const r = READING_DATA[_rdIdx];
  if (!box || !r) return;
  box.classList.toggle('rd-hide-py', !_rdShowPy);
  box.classList.toggle('rd-hide-vi', !_rdShowVi);
  const parts = r.title.split(/\s+[–-]\s+/);
  const titleZh = parts[0], titleVi = parts.slice(1).join(' – ');
  const order = _rdOrder(), pos = order.indexOf(_rdIdx);
  const lessonFull = typeof r.lessonIdx === 'number' ? parseLessonTitle(VOCAB_DATA[r.lessonIdx].lesson) : null;
  const relDlg = typeof r.lessonIdx === 'number' ? DIALOGUE_DATA.filter(d => d.lessonIdx === r.lessonIdx).length : 0;

  let h = '<article class="rd-card">';
  h += '<div class="rd-head">' +
         '<div class="rd-meta">' +
           '<span class="chip chip-green">' + icon('read', 14) + escHtml(_rdLessonLabel(r)) + '</span>' +
           (lessonFull ? '<span class="rd-topic">' + escHtml(lessonFull.short) + '</span>' : '') +
           '<span class="rd-len">' + r.lines.length + ' câu · ' + [...r.lines.map(l => l.zh).join('')].filter(c => /[一-鿿]/.test(c)).length + ' chữ</span>' +
         '</div>' +
         '<h2 class="rd-title">' + escHtml(titleZh) + '</h2>' +
         (titleVi ? '<p class="rd-title-vi">' + escHtml(titleVi) + '</p>' : '') +
         '<div class="rd-actions">' +
           '<button class="btn btn-dark" id="rdPlayBtn" onclick="playFullReading(' + _rdIdx + ')">' + icon('play', 16) + 'Nghe cả bài</button>' +
           '<button class="btn btn-ghost" onclick="stopReading()">' + icon('close', 16) + 'Dừng</button>' +
           (relDlg ? '<button class="btn btn-tint-blue" onclick="openDialoguesFor(' + r.lessonIdx + ')">' + icon('chat', 16) + 'Hội thoại cùng chủ đề (' + relDlg + ')</button>' : '') +
         '</div>' +
       '</div>';

  if (r.focus && r.focus.length) {
    h += '<section class="rd-focus"><div class="rd-label">' + icon('tag', 14) + 'Từ trọng tâm — nhấn để nghe</div><div class="rd-chips">' +
      r.focus.map(z => {
        const w = _rdWordInfo(z);
        return '<button class="rd-chip" onclick="speak(\'' + _qs(z) + '\')" title="' + escHtml(w ? w.vi : '') + '">' +
          '<span class="rd-chip-zh">' + escHtml(z) + '</span>' +
          (w ? '<span class="rd-chip-py">' + toneHtml(w.py) + '</span>' : '') + '</button>';
      }).join('') + '</div></section>';
  }

  h += '<section class="rd-body">' + r.lines.map((ln, i) =>
    '<div class="rd-line" id="reading-line-' + _rdIdx + '-' + i + '" onclick="speakReadingLine(' + _rdIdx + ',' + i + ')">' +
      '<span class="rd-num">' + (i + 1) + '</span>' +
      '<div class="rd-text">' +
        '<div class="rd-zh">' + escHtml(ln.zh) + '</div>' +
        '<div class="rd-py">' + toneHtml(ln.py) + '</div>' +
        '<div class="rd-vi">' + escHtml(ln.vi) + '</div>' +
      '</div>' +
      '<span class="rd-spk" aria-hidden="true">' + icon('speaker', 16) + '</span>' +
    '</div>').join('') + '</section>';

  if (r.quiz && r.quiz.length) {
    h += '<section class="rd-quiz"><div class="rd-label">' + icon('target', 14) + 'Đọc hiểu — trả lời ' + r.quiz.length + ' câu hỏi</div>' +
      r.quiz.map((q, qi) =>
        '<div class="rd-q" id="rdq-' + qi + '">' +
          '<div class="rd-q-text"><b>' + (qi + 1) + '.</b> ' + escHtml(q.q) + '</div>' +
          '<div class="rd-opts">' + _rdShuffleIdx(q.o.length, _rdIdx * 7 + qi).map(oi =>
            '<button class="rd-opt" data-oi="' + oi + '" onclick="answerReadingQuiz(' + qi + ',' + oi + ')">' + escHtml(q.o[oi]) + '</button>').join('') +
          '</div></div>').join('') +
      '<div class="rd-quiz-score" id="rdQuizScore" hidden></div></section>';
  }

  h += '<div class="rd-nav">' +
         '<button class="btn btn-ghost" onclick="stepReading(1)"' + (pos >= order.length - 1 ? ' disabled' : '') + '>' + icon('left', 16) + 'Bài trước</button>' +
         '<span>' + (pos + 1) + ' / ' + order.length + '</span>' +
         '<button class="btn btn-ghost" onclick="stepReading(-1)"' + (pos <= 0 ? ' disabled' : '') + '>Bài sau' + icon('right', 16) + '</button>' +
       '</div>';
  h += '</article>';
  box.innerHTML = h;
  _rdQuizState = {};
}

// trộn thứ tự đáp án ổn định theo bài (không đổi mỗi lần vẽ lại)
function _rdShuffleIdx(n, seed) {
  const a = [...Array(n).keys()];
  let s = seed + 1;
  for (let i = n - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

let _rdQuizState = {};
function answerReadingQuiz(qi, oi) {
  const r = READING_DATA[_rdIdx];
  const q = r.quiz[qi];
  if (_rdQuizState[qi] !== undefined) return;
  _rdQuizState[qi] = oi === q.a;
  const box = document.getElementById('rdq-' + qi);
  box.querySelectorAll('.rd-opt').forEach(b => {
    const k = +b.dataset.oi;
    b.disabled = true;
    if (k === q.a) b.classList.add('is-right');
    else if (k === oi) b.classList.add('is-wrong');
  });
  box.classList.add(oi === q.a ? 'ok' : 'no');
  const done = Object.keys(_rdQuizState).length;
  if (done === r.quiz.length) {
    const right = Object.values(_rdQuizState).filter(Boolean).length;
    const sc = document.getElementById('rdQuizScore');
    sc.hidden = false;
    sc.className = 'rd-quiz-score ' + (right === done ? 'ok' : 'mid');
    sc.innerHTML = '<b>' + right + '/' + done + '</b> câu đúng. ' + (right === done ? 'Bạn đã hiểu bài đọc này!' : 'Đọc lại các câu liên quan rồi thử bài sau nhé.') +
      ' <button class="gl-retry" onclick="_renderPassage()">Làm lại</button>';
  }
}

function _qs(s) { return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }

function _rdUtter(text, onend) {
  const utt = new SpeechSynthesisUtterance(text.replace(/[？！。，、：“”"]/g, ' '));
  utt.lang = 'zh-CN';
  utt.rate = getRate();
  if (typeof ttsVoice !== 'undefined' && ttsVoice) utt.voice = ttsVoice;
  utt.onend = onend;
  window.speechSynthesis.speak(utt);
}

function speakReadingLine(pIdx, lIdx) {
  if (!window.speechSynthesis) return;
  _readingPlaying = false;
  window.speechSynthesis.cancel();
  highlightReadingLine(pIdx, lIdx, false);
  _rdUtter(READING_DATA[pIdx].lines[lIdx].zh, () => clearReadingHighlight());
}

function playFullReading(pIdx) {
  if (!window.speechSynthesis) return;
  const passage = READING_DATA[pIdx];
  if (!passage) return;
  window.speechSynthesis.cancel();
  _readingPlaying = true;
  let idx = 0;
  function playOne() {
    if (!_readingPlaying || idx >= passage.lines.length) { _readingPlaying = false; clearReadingHighlight(); return; }
    highlightReadingLine(pIdx, idx, true);
    _rdUtter(passage.lines[idx].zh, () => { idx++; setTimeout(playOne, 450); });
  }
  playOne();
}

function stopReading() {
  _readingPlaying = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  clearReadingHighlight();
}

function highlightReadingLine(pIdx, lIdx, scroll) {
  clearReadingHighlight();
  const el = document.getElementById('reading-line-' + pIdx + '-' + lIdx);
  if (el) {
    el.classList.add('active');
    if (scroll) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearReadingHighlight() {
  document.querySelectorAll('.rd-line.active').forEach(el => el.classList.remove('active'));
}

// Mở tab Hội thoại đúng buổi của bài đọc
function openDialoguesFor(li) {
  stopReading();
  if (typeof _dlgLesson !== 'undefined') _dlgLesson = li;
  showSection('s-dialogue', document.querySelector('.nav-item[data-section="s-dialogue"]'));
  if (typeof renderDialogues === 'function') renderDialogues();
}
