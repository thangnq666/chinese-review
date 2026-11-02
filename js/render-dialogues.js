// ===================================================
// HỘI THOẠI — lọc theo buổi học, hiển thị dạng khung chat A/B
// ===================================================
let _dlgLesson = null;          // lessonIdx đang xem (null = buổi mới nhất, 'all' = tất cả)
let _dlgPlaying = 0;            // token để dừng phát

function _dlgLessonList() {
  return [...new Set(DIALOGUE_DATA.map(d => d.lessonIdx).filter(x => typeof x === 'number'))].sort((a, b) => b - a);
}

function renderDialogues() {
  const sel = document.getElementById('dialogueLessonSelect');
  if (!sel) return;
  const list = _dlgLessonList();
  if (!sel.dataset.loaded) {
    sel.dataset.loaded = '1';
    let h = '<optgroup label="Theo buổi (mới nhất trước)">';
    list.forEach(li => {
      const n = DIALOGUE_DATA.filter(d => d.lessonIdx === li).length;
      const t = parseLessonTitle(VOCAB_DATA[li].lesson);
      h += '<option value="' + li + '">' + escHtml(t.num + ' · ' + t.short + ' (' + n + ' hội thoại)') + '</option>';
    });
    h += '</optgroup><optgroup label="Gộp"><option value="all">Tất cả ' + DIALOGUE_DATA.length + ' hội thoại</option></optgroup>';
    sel.innerHTML = h;
  }
  if (_dlgLesson === null) _dlgLesson = list[0];
  sel.value = String(_dlgLesson);
  _renderDialogueList();
}

function setDialogueLesson(v) {
  stopDialogue();
  _dlgLesson = v === 'all' ? 'all' : +v;
  _renderDialogueList();
}

function _renderDialogueList() {
  const box = document.getElementById('dialogueContainer');
  if (!box) return;
  const items = DIALOGUE_DATA.map((d, i) => ({ d, i }))
    .filter(x => _dlgLesson === 'all' || x.d.lessonIdx === _dlgLesson)
    .sort((a, b) => (b.d.lessonIdx - a.d.lessonIdx) || ((a.d.tag === 'reading') - (b.d.tag === 'reading')));
  if (!items.length) { box.innerHTML = '<div class="empty-state">Buổi này chưa có hội thoại.</div>'; return; }

  const hasReading = _dlgLesson !== 'all' && typeof READING_DATA !== 'undefined' && READING_DATA.some(r => r.lessonIdx === _dlgLesson);
  let h = '';
  if (hasReading) {
    h += '<div class="dg-tip">' + icon('read', 16) + '<span>Các hội thoại có nhãn <b>Theo bài đọc</b> dùng từ của bài đọc cùng buổi.</span>' +
         '<button class="btn btn-ghost btn-sm" onclick="openReadingFor(' + _dlgLesson + ')">Mở bài đọc</button></div>';
  }
  h += items.map(({ d, i }) => {
    const parts = (d.title || '').split(/\s+[–-]\s+/);
    const t = typeof d.lessonIdx === 'number' ? parseLessonTitle(VOCAB_DATA[d.lessonIdx].lesson).num : '';
    return '<article class="dg-card" id="dg-' + i + '">' +
      '<div class="dg-head">' +
        '<div class="dg-head-text">' +
          '<div class="dg-meta">' + (t ? '<span class="chip chip-orange">' + escHtml(t) + '</span>' : '') +
            (d.tag === 'reading' ? '<span class="chip chip-green">' + icon('read', 13) + 'Theo bài đọc</span>' : '<span class="chip chip-blue">Giáo trình</span>') +
            '<span class="dg-count">' + d.lines.length + ' câu</span></div>' +
          '<h3 class="dg-title">' + escHtml(parts[0]) + '</h3>' +
          (parts.length > 1 ? '<p class="dg-title-vi">' + escHtml(parts.slice(1).join(' – ')) + '</p>' : '') +
        '</div>' +
        '<div class="dg-actions">' +
          '<button class="btn btn-dark btn-sm" onclick="playFullDialogue(' + i + ')">' + icon('play', 14) + 'Nghe cả bài</button>' +
          '<button class="btn btn-tint-pink btn-sm" onclick="practiceDialogue(' + i + ')">' + icon('mic', 14) + 'Luyện nói</button>' +
        '</div>' +
      '</div>' +
      '<div class="dg-chat">' + d.lines.map((l, li) => {
        const side = (l.s || 'A') === 'A' ? 'left' : 'right';
        return '<div class="dg-row ' + side + '" id="dg-' + i + '-' + li + '">' +
          '<span class="dg-avatar spk-' + escHtml((l.s || 'A').toLowerCase()) + '">' + escHtml(l.s || 'A') + '</span>' +
          '<div class="dg-bubble" onclick="speakDialogueLine(' + i + ',' + li + ')">' +
            '<div class="dg-zh">' + escHtml(l.zh) + '</div>' +
            '<div class="dg-py">' + toneHtml(l.py) + '</div>' +
            '<div class="dg-vi">' + escHtml(l.vi) + '</div>' +
          '</div>' +
          '<div class="dg-tools">' +
            '<button class="dg-tool" title="Nghe" aria-label="Nghe câu này" onclick="speakDialogueLine(' + i + ',' + li + ')">' + icon('speaker', 15) + '</button>' +
            '<button class="dg-tool" title="Luyện nói câu này" aria-label="Luyện nói câu này" onclick="practiceDialogueLine(' + i + ',' + li + ')">' + icon('mic', 15) + '</button>' +
          '</div>' +
        '</div>';
      }).join('') + '</div>' +
    '</article>';
  }).join('');
  box.innerHTML = h;
}

function _dlgHighlight(di, li) {
  document.querySelectorAll('.dg-row.active').forEach(e => e.classList.remove('active'));
  const el = document.getElementById('dg-' + di + '-' + li);
  if (el) el.classList.add('active');
  return el;
}

function speakDialogueLine(di, li) {
  _dlgPlaying++;
  _dlgHighlight(di, li);
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  _rdUtter(DIALOGUE_DATA[di].lines[li].zh, () => _dlgHighlight(-1, -1));
}

function playFullDialogue(di) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const token = ++_dlgPlaying;
  const lines = DIALOGUE_DATA[di].lines;
  let idx = 0;
  function playOne() {
    if (token !== _dlgPlaying || idx >= lines.length) { if (token === _dlgPlaying) _dlgHighlight(-1, -1); return; }
    const el = _dlgHighlight(di, idx);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    _rdUtter(lines[idx].zh, () => { idx++; setTimeout(playOne, 550); });
  }
  playOne();
}

function stopDialogue() {
  _dlgPlaying++;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  _dlgHighlight(-1, -1);
}

// Từ hội thoại mở bài đọc cùng buổi
function openReadingFor(li) {
  stopDialogue();
  const idx = READING_DATA.findIndex(r => r.lessonIdx === li);
  if (idx < 0) return;
  _rdIdx = idx;
  showSection('s-reading', document.querySelector('.nav-item[data-section="s-reading"]'));
  renderReading();
}
