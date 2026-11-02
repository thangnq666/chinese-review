// ===================================================
let allSpeakItems = [];
let currentSpeakFilter = 'all';

function buildSpeakData() {
  allSpeakItems = [];
  DIALOGUE_DATA.forEach((dlg, di) => {
    // Một số bài gom nhiều hội thoại con trong "dialogues"
    const lines = dlg.lines || (dlg.dialogues || []).flatMap(d => d.lines || []);
    const li = typeof dlg.lessonIdx === 'number' ? dlg.lessonIdx : di;
    const src = 'Hội thoại · ' + (dlg.title || ('Bài ' + (di + 1)));
    lines.forEach(line => {
      allSpeakItems.push({zh: line.zh, py: line.py, vi: line.vi, lessonIdx: li, kind: 'dlg', source: src});
    });
  });
  PHRASES.forEach(p => {
    const li = (p.lesson || 1) - 1;
    allSpeakItems.push({zh: p.zh, py: p.py, vi: p.vi, lessonIdx: li, kind: 'phrase', source: 'Câu mẫu'});
  });
}

let currentSpeakKind = 'all';

function _speakLessonName(i) {
  if (typeof VOCAB_DATA !== 'undefined' && VOCAB_DATA[i]) {
    const t = parseLessonTitle(VOCAB_DATA[i].lesson);
    return t.num + ' · ' + t.short;
  }
  return 'Buổi ' + (i + 1);
}

// Danh sách buổi học (mới nhất trước) tự sinh từ dữ liệu thực tế
function populateSpeakFilter() {
  const sel = document.getElementById('speakLessonSelect');
  if (!sel || sel.dataset.loaded) return;
  sel.dataset.loaded = '1';
  const idxs = [...new Set(allSpeakItems.map(i => i.lessonIdx))].sort((a, b) => b - a);
  let html = '<optgroup label="Theo buổi (mới nhất trước)">';
  idxs.forEach(i => {
    const n = allSpeakItems.filter(it => it.lessonIdx === i).length;
    html += '<option value="' + i + '">' + escHtml(_speakLessonName(i) + ' (' + n + ' câu)') + '</option>';
  });
  html += '</optgroup><optgroup label="Gộp"><option value="all">Tất cả buổi (' + allSpeakItems.length + ' câu)</option></optgroup>';
  sel.innerHTML = html;
  if (currentSpeakFilter === 'all' && idxs.length) currentSpeakFilter = idxs[0];
  sel.value = String(currentSpeakFilter);
  updateSpeakKindSelect();
}

function updateSpeakKindSelect() {
  const sel = document.getElementById('speakKindSelect');
  if (!sel) return;
  const pool = currentSpeakFilter === 'all' ? allSpeakItems : allSpeakItems.filter(i => i.lessonIdx === currentSpeakFilter);
  const c = k => pool.filter(i => i.kind === k).length;
  sel.innerHTML =
    '<option value="all">Tất cả (' + pool.length + ')</option>' +
    '<option value="dlg">Hội thoại (' + c('dlg') + ')</option>' +
    '<option value="phrase">Câu mẫu (' + c('phrase') + ')</option>';
  sel.value = currentSpeakKind;
}

function setSpeakLesson(v) {
  currentSpeakFilter = v === 'all' ? 'all' : +v;
  updateSpeakKindSelect();
  renderSpeakCards();
}

function setSpeakKind(v) {
  currentSpeakKind = v;
  renderSpeakCards();
}

// Giữ tương thích với lời gọi cũ
function filterSpeakCards(filter) {
  setSpeakLesson(String(filter));
  const sel = document.getElementById('speakLessonSelect');
  if (sel) sel.value = String(filter);
}

// Các câu đang hiển thị theo bộ lọc (dùng cả cho hàng đợi luyện nói)
function getSpeakVisibleItems() {
  return allSpeakItems.filter(i =>
    (currentSpeakFilter === 'all' || i.lessonIdx === currentSpeakFilter) &&
    (currentSpeakKind === 'all' || i.kind === currentSpeakKind))
    .slice().sort((a, b) => b.lessonIdx - a.lessonIdx);
}

function renderSpeakCards() {
  const container = document.getElementById('speakCardsContainer');
  container.innerHTML = '';
  const items = getSpeakVisibleItems();

  if (items.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-light);padding:30px">Kh\xf4ng c\xf3 c\xe2u n\xe0o.</div>';
    return;
  }

  const groups = {};
  items.forEach((item) => {
    const key = (currentSpeakFilter === 'all' ? item.lessonIdx + '|' : '') + (item.source || 'Khác');
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  Object.keys(groups).forEach(src => {
    const sec = document.createElement('div');
    sec.className = 'lt-section';
    const title = document.createElement('div');
    title.className = 'lt-lesson-title';
    const sItem = groups[src][0];
    title.textContent = (currentSpeakFilter === 'all' ? _speakLessonName(sItem.lessonIdx) + ' — ' : '') + sItem.source;
    sec.appendChild(title);

    const cards = document.createElement('div');
    cards.className = 'zh-cards';

    groups[src].forEach((item) => {
      const zhEsc = item.zh.replace(/'/g, "\\'");
      const pyEsc = item.py.replace(/'/g, "\\'");
      const viEsc = item.vi.replace(/'/g, "\\'");
      const realIdx = allSpeakItems.indexOf(item);

      const card = document.createElement('div');
      card.className = 'zh-card lt-card';
      card.innerHTML =
        '<div class="zh-card-top">' +
          '<span class="zh-char" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'Tập n\xf3i\')" title="Xem n\xe9t viết">' + item.zh + '</span>' +
          '<div class="zh-card-actions-inline">' +
            '<button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">\u{1F50A}</button>' +
            '<button class="dl-btn dl-btn-practice" onclick="openSpeakModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',' + item.lessonIdx + ',' + realIdx + ')">\u{1F3A4} Tập n\xf3i</button>' +
          '</div>' +
        '</div>' +
        '<div class="zh-card-py">' + item.py + '</div>' +
        '<div class="zh-card-vi">' + item.vi + '</div>';
      cards.appendChild(card);
    });

    sec.appendChild(cards);
    container.appendChild(sec);
  });
}
// ===================================================
// SPEECH RECOGNITION & SCORING
