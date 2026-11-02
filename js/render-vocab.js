// ===================================================
// TỪ VỰNG — bộ lọc Buổi học / Loại từ, thẻ từ có hình minh hoạ,
// pinyin tô màu theo thanh điệu, ví dụ mở rộng
// ===================================================
let _vocabTypeFilter = 'all';
let _vocabLessonFilter = null;   // null = chưa chọn → mặc định buổi mới nhất

function setVocabType(type) {
  _vocabTypeFilter = type;
  renderVocab(document.getElementById('vocabSearch').value);
}

function setVocabLesson(v) {
  _vocabLessonFilter = v;
  _vocabTypeFilter = 'all';
  renderVocab(document.getElementById('vocabSearch').value);
}

function _vocabLessonIdx() {
  if (_vocabLessonFilter === null) _vocabLessonFilter = String(VOCAB_DATA.length - 1);
  return _vocabLessonFilter;
}

// Danh sách buổi học (mới nhất trước) + "Tất cả"
function populateVocabLessonSelect() {
  const sel = document.getElementById('vocabLessonSelect');
  if (!sel || sel.dataset.loaded) return;
  sel.dataset.loaded = '1';
  const total = VOCAB_DATA.reduce((a, l) => a + l.words.length, 0);
  let html = '<optgroup label="Theo buổi (mới nhất trước)">';
  for (let i = VOCAB_DATA.length - 1; i >= 0; i--) {
    const t = parseLessonTitle(VOCAB_DATA[i].lesson);
    html += '<option value="' + i + '">' + escHtml(t.num + ' · ' + t.short + ' (' + VOCAB_DATA[i].words.length + ')') + '</option>';
  }
  html += '</optgroup><optgroup label="Gộp"><option value="all">Tất cả ' + VOCAB_DATA.length + ' buổi (' + total + ' từ)</option></optgroup>';
  sel.innerHTML = html;
  sel.value = _vocabLessonIdx();

  const last = parseLessonTitle(VOCAB_DATA[VOCAB_DATA.length - 1].lesson);
  const g = document.getElementById('vocabGreeting');
  if (g) g.textContent = 'Chào Thắng! Hôm nay mình ôn tiếp ' + last.num + ' nhé.';
}

// Danh sách loại từ kèm số lượng trong phạm vi buổi đang chọn
function populateVocabTypeSelect(pool) {
  const sel = document.getElementById('vocabTypeSelect');
  if (!sel) return;
  const cnt = t => pool.filter(w => w.type === t || (w.type || '').includes(t)).length;
  let html = '<option value="all">Tất cả loại từ (' + pool.length + ')</option>';
  TYPE_ORDER.forEach(t => { html += '<option value="' + t + '">' + t + ' (' + cnt(t) + ')</option>'; });
  sel.innerHTML = html;
  sel.value = _vocabTypeFilter;
}

function _matchType(w) {
  const t = _vocabTypeFilter;
  return t === 'all' || w.type === t || (w.type || '').includes(t);
}

// Chuỗi an toàn để đặt trong onclick="...('...')"
function _q(s) { return escHtml(String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")); }

function renderVocabHero(li) {
  const hero = document.getElementById('vocabHero');
  if (!hero) return;
  if (li === 'all') { hero.innerHTML = ''; return; }
  const L = VOCAB_DATA[+li];
  const t = parseLessonTitle(L.lesson);
  const exN = L.words.reduce((a, w) => a + (w.ex ? w.ex.length : 0), 0);
  let dlg = 0, phr = 0;
  try { dlg = DIALOGUE_DATA.filter(d => d.lessonIdx === +li).length; } catch (e) {}
  try { phr = PHRASES.filter(p => p.lesson === +li + 1).length; } catch (e) {}
  const isNew = +li === VOCAB_DATA.length - 1;
  const arts = L.words.filter(w => typeof WORD_ICONS !== 'undefined' && WORD_ICONS[w.zh]).slice(0, 4);
  hero.innerHTML =
    '<section class="lesson-hero">' +
      '<div class="lh-text">' +
        '<span class="pill pill-red">' + escHtml(t.num + (t.code ? ' · bài ' + t.code : '') + (isNew ? ' · mới nhất' : '')) + '</span>' +
        (t.zh ? '<h2 lang="zh">' + escHtml(t.zh) + '</h2>' : '') +
        (t.vi ? '<p>' + escHtml(t.vi) + '</p>' : '') +
        '<div class="lh-stats">' +
          '<span class="chip chip-green">' + icon('book', 13) + L.words.length + ' từ mới</span>' +
          '<span class="chip chip-teal">' + icon('quote', 13) + exN + ' câu ví dụ</span>' +
          (phr ? '<span class="chip chip-blue">' + icon('layers', 13) + phr + ' câu mẫu</span>' : '') +
          (dlg ? '<span class="chip chip-orange">' + icon('chat', 13) + dlg + ' hội thoại</span>' : '') +
        '</div>' +
      '</div>' +
      '<div class="lh-side">' +
        (arts.length ? '<div class="lh-arts" aria-hidden="true">' + arts.map(w => '<img src="' + WORD_ICONS[w.zh] + '" alt="">').join('') + '</div>' : '') +
        '<div class="lh-actions">' +
          '<button class="btn btn-ghost btn-lg" onclick="speakLesson(' + li + ')"><span class="ic-blue">' + icon('phones') + '</span>Nghe cả buổi</button>' +
          '<button class="btn btn-dark btn-lg" onclick="studyLessonFC(' + li + ')"><span class="ic-gold">' + icon('cards') + '</span>Ôn flashcard buổi này</button>' +
        '</div>' +
      '</div>' +
    '</section>';
}

function speakLesson(li) { speakSequence(VOCAB_DATA[li].words.map(w => w.zh)); }

function studyLessonFC(li) {
  showSection('s-flashcard');
  const sel = document.getElementById('fcLesson');
  if (sel) { populateFCLessons(); sel.value = String(li); initFlashcard(); }
}

function wordCardHtml(w, li, wi) {
  const exId = 'ex-' + li + '-' + wi;
  const ts = typeStyle(w.type);
  const ex = w.ex || [];
  const first = ex[0];
  const zh = _q(w.zh), py = _q(w.py), vi = _q(w.vi), ty = _q(w.type || '');
  let h = '<article class="word-card">' +
    '<div class="wc-top">' +
      '<div class="wc-head">' +
        '<button class="wc-zh" lang="zh" onclick="speak(\'' + zh + '\')" title="Nghe phát âm">' + escHtml(w.zh) + '</button>' +
        '<span class="wc-py">' + toneHtml(w.py) + '</span>' +
      '</div>' +
      wordArtHtml(w, 64) +
    '</div>' +
    '<div class="wc-meaning"><span class="type-pill ' + ts.cls + '">' + escHtml(w.type || '') + '</span><span>' + escHtml(w.vi) + '</span></div>';
  if (first) {
    h += '<div class="wc-ex">' +
      '<span class="ex-zh-line" lang="zh">' + escHtml(first.zh) + '</span>' +
      '<span class="ex-py-line">' + escHtml(first.py) + '</span>' +
      '<span class="ex-vi-line">' + escHtml(first.vi) + '</span>' +
      (ex.length > 1 ? '<button class="wc-more" aria-expanded="false" aria-controls="' + exId + '" onclick="toggleVtEx(\'' + exId + '\',this)"><span>Xem tất cả ' + ex.length + ' ví dụ</span>' + icon('chevron', 16) + '</button>' : '') +
    '</div>';
  }
  let actions = '<div class="wc-actions">' +
      '<button class="btn btn-tint-blue btn-sm" onclick="speak(\'' + zh + '\')">' + icon('speaker', 16) + 'Nghe</button>' +
      '<button class="btn btn-tint-pink btn-sm" onclick="openVocabSpeak(\'' + zh + '\')">' + icon('mic', 16) + 'Nói</button>' +
      '<button class="btn btn-tint-indigo btn-sm" onclick="showStrokeModal(\'' + zh + '\',\'' + py + '\',\'' + vi + '\',\'' + ty + '\')">' + icon('pen', 16) + 'Viết</button>' +
    '</div>';
  if (ex.length > 1) {
    h += '<div class="ex-list" id="' + exId + '" hidden>';
    ex.forEach((e, k) => {
      h += '<div class="ex-item">' +
        '<span class="ex-num">' + (k + 1) + '</span>' +
        '<div class="ex-body">' +
          '<span class="ex-zh-line" lang="zh">' + escHtml(e.zh) + '</span>' +
          '<span class="ex-py-line">' + toneHtml(e.py) + '</span>' +
          '<span class="ex-vi-line">' + escHtml(e.vi) + '</span>' +
        '</div>' +
        '<button class="icon-btn icon-btn-sm" aria-label="Nghe câu ví dụ" onclick="speak(\'' + _q(e.zh) + '\')">' + icon('speaker', 16) + '</button>' +
      '</div>';
    });
    h += '</div>';
  }
  return h + actions + '</article>';
}

function renderVocab(filter) {
  populateVocabLessonSelect();
  const container = document.getElementById('vocabContainer');
  const li = _vocabLessonIdx();
  const fl = filter ? filter.trim().toLowerCase() : '';

  // Khi đang tìm kiếm: tìm trên tất cả các buổi
  const lessons = (fl || li === 'all') ? VOCAB_DATA.map((l, i) => i) : [+li];
  const pool = [];
  lessons.forEach(i => VOCAB_DATA[i].words.forEach(w => pool.push(w)));
  const match = w => !fl || w.zh.includes(filter.trim()) || w.py.toLowerCase().includes(fl) || w.vi.toLowerCase().includes(fl);
  populateVocabTypeSelect(pool.filter(match));
  renderVocabHero(fl ? 'all' : li);

  let html = '', shown = 0;
  lessons.forEach(i => {
    const L = VOCAB_DATA[i];
    const items = [];
    L.words.forEach((w, wi) => { if (match(w) && _matchType(w)) items.push(wordCardHtml(w, i, wi)); });
    if (!items.length) return;
    shown += items.length;
    if (lessons.length > 1) {
      const t = parseLessonTitle(L.lesson);
      html += '<h3 class="lesson-divider"><span class="pill pill-red">' + escHtml(t.num) + '</span>' + escHtml(t.zh || t.vi) + (t.zh && t.vi ? ' <small>' + escHtml(t.vi) + '</small>' : '') + '</h3>';
    }
    html += '<div class="word-grid">' + items.join('') + '</div>';
  });

  const res = document.getElementById('vocabResult');
  if (res) {
    const tn = _vocabTypeFilter === 'all' ? 'tất cả loại từ' : _vocabTypeFilter.toLowerCase();
    res.innerHTML = '<p>Đang hiện <strong>' + shown + '</strong> / ' + pool.length + ' từ · ' + tn + (fl ? ' · tìm “' + escHtml(filter.trim()) + '”' : '') + '</p>' +
      (_vocabTypeFilter !== 'all' ? '<button class="btn btn-ghost btn-sm" onclick="setVocabType(\'all\')">Bỏ lọc loại từ</button>' : '');
  }

  if (!shown) {
    html = '<div class="empty-state"><span class="ph-ic c-amber">' + icon('search', 30) + '</span>' +
      '<p class="es-title">Không tìm thấy từ nào</p>' +
      '<p class="muted">Thử chọn loại từ khác, hoặc chọn “Tất cả buổi” trong danh sách Buổi học.</p></div>';
  }
  container.innerHTML = html;
}

function toggleVtEx(id, btn) {
  const panel = document.getElementById(id);
  if (!panel) return;
  const open = panel.hidden;
  panel.hidden = !open;
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  btn.classList.toggle('open', open);
  const lab = btn.querySelector('span');
  if (lab) lab.textContent = open ? 'Thu gọn ví dụ' : 'Xem tất cả ' + panel.querySelectorAll('.ex-item').length + ' ví dụ';
}

// Debounce: chỉ render lại sau khi ngừng gõ 200ms
let _vocabSearchTimer = null;
function filterVocab(val) {
  clearTimeout(_vocabSearchTimer);
  _vocabSearchTimer = setTimeout(() => renderVocab(val), 200);
}
