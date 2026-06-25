// ===================================================
let _vocabTypeFilter = 'all';

function setVocabType(type) {
  _vocabTypeFilter = type;
  renderVocab(document.getElementById('vocabSearch').value);
}

function renderVocab(filter) {
  const container = document.getElementById('vocabContainer');
  container.innerHTML = '';
  const fl = filter ? filter.toLowerCase() : '';
  const typeF = _vocabTypeFilter;

  VOCAB_DATA.forEach((lesson, li) => {
    let words = lesson.words;
    if (fl) words = words.filter(w => w.zh.includes(filter) || w.py.toLowerCase().includes(fl) || w.vi.toLowerCase().includes(fl) || w.type.toLowerCase().includes(fl));
    if (typeF !== 'all') words = words.filter(w => w.type === typeF || w.type.includes(typeF));
    if (words.length === 0) return;

    const sec = document.createElement('div');
    sec.className = 'vocab-table-section';

    const title = document.createElement('div');
    title.className = 'vocab-lesson-title';
    title.textContent = '📖 ' + lesson.lesson;
    sec.appendChild(title);

    const table = document.createElement('table');
    table.className = 'vocab-table';
    table.innerHTML = '<thead><tr>' +
      '<th class="vt-h-num">#</th>' +
      '<th class="vt-h-zh">Chữ Hán</th>' +
      '<th class="vt-h-py">Pinyin</th>' +
      '<th class="vt-h-type">Loại từ</th>' +
      '<th class="vt-h-vi">Nghĩa</th>' +
      '<th class="vt-h-act">Nghe · Nói · Ví dụ</th>' +
      '</tr></thead>';
    const tbody = document.createElement('tbody');

    words.forEach((w, wi) => {
      const exId = 'ex-' + li + '-' + wi;
      const hasEx = w.ex && w.ex.length > 0;
      const origWi = lesson.words.indexOf(w);
      const zhEsc  = w.zh.replace(/'/g, "\\'");
      const pyEsc  = w.py.replace(/'/g, "\\'");
      const viEsc  = w.vi.replace(/'/g, "\\'");
      const typeEsc= w.type.replace(/'/g, "\\'");

      const tr = document.createElement('tr');
      tr.className = 'vocab-row';
      tr.innerHTML =
        '<td class="vt-num">' + (origWi + 1) + '</td>' +
        '<td class="vt-zh"><span class="zh" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'' + typeEsc + '\');" title="Xem nét viết" style="cursor:pointer">' + w.zh + '</span>' +
          '<span class="mob-sub"><span class="mob-py">' + w.py + '</span><span class="mob-vi">' + w.vi + '</span></span>' +
        '</td>' +
        '<td class="vt-py">' + w.py + '</td>' +
        '<td class="vt-type"><span class="type-badge">' + w.type + '</span></td>' +
        '<td class="vt-vi">' + w.vi + '</td>' +
        '<td class="vt-actions">' +
          '<button class="speak-btn vt-btn" onclick="event.stopPropagation();speak(\'' + zhEsc + '\')">🔊</button> ' +
          '<button class="vocab-practice-btn vt-btn" onclick="event.stopPropagation();openVocabSpeak(\'' + zhEsc + '\')">🎤</button>' +
          (hasEx ? ' <button class="ex-toggle-btn vt-btn" onclick="event.stopPropagation();toggleVtEx(\'' + exId + '\',this)">💬 Ví dụ</button>' : '') +
        '</td>';
      tbody.appendChild(tr);

      if (hasEx) {
        const exRow = document.createElement('tr');
        exRow.className = 'vocab-ex-row';
        exRow.id = exId;
        exRow.style.display = 'none';
        let exHtml = '<div class="ex-panel open" style="margin:0 0 4px;border-top:1px dashed var(--gray2)">';
        w.ex.forEach(function(e) {
          const eZhEsc = e.zh.replace(/'/g, "\\'");
          exHtml += '<div class="ex-row">' +
            '<span class="ex-zh">' + e.zh + '</span>' +
            '<button class="ex-speak-btn" onclick="event.stopPropagation();speak(\'' + eZhEsc + '\')">🔊</button>' +
            '<div class="ex-py">' + e.py + '</div>' +
            '<div class="ex-vi">' + e.vi + '</div>' +
            '</div>';
        });
        exHtml += '</div>';
        exRow.innerHTML = '<td colspan="6">' + exHtml + '</td>';
        tbody.appendChild(exRow);
      }
    });

    table.appendChild(tbody);
    sec.appendChild(table);
    container.appendChild(sec);
  });

  if (!container.innerHTML.trim()) {
    container.innerHTML = '<div class="card" style="text-align:center;color:var(--text-light)">Không tìm thấy từ nào.</div>';
  }
}

function toggleVtEx(id, btn) {
  const row = document.getElementById(id);
  if (!row) return;
  const open = row.style.display === 'none';
  row.style.display = open ? 'table-row' : 'none';
  btn.classList.toggle('active', open);
  btn.textContent = open ? '💬 Ẩn' : '💬 Ví dụ';
}
function toggleVtEx(id, btn) {
  const row = document.getElementById(id);
  if (!row) return;
  const open = row.style.display === 'none';
  row.style.display = open ? 'table-row' : 'none';
  btn.classList.toggle('active', open);
  btn.textContent = open ? '💬 Ẩn' : '💬 Ví dụ';
}
function toggleEx(id, btn) {
  const panel = document.getElementById(id);
  if (!panel) return;
  const open = panel.classList.toggle('open');
  btn.classList.toggle('active', open);
  btn.textContent = open ? '💬 Ẩn' : '💬