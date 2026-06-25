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
    title.textContent = '\u{1F4D6} ' + lesson.lesson;
    sec.appendChild(title);

    const cards = document.createElement('div');
    cards.className = 'zh-cards';

    words.forEach((w, wi) => {
      const exId = 'ex-' + li + '-' + wi;
      const hasEx = w.ex && w.ex.length > 0;
      const origWi = lesson.words.indexOf(w);
      const zhEsc  = w.zh.replace(/'/g, "\\'");
      const pyEsc  = w.py.replace(/'/g, "\\'");
      const viEsc  = w.vi.replace(/'/g, "\\'");
      const typeEsc= w.type.replace(/'/g, "\\'");

      const card = document.createElement('div');
      card.className = 'zh-card vocab-card';
      let actHtml =
        '<button class="speak-btn vt-btn" onclick="speak(\'' + zhEsc + '\')">\u{1F50A}</button> ' +
        '<button class="vocab-practice-btn vt-btn" onclick="openVocabSpeak(\'' + zhEsc + '\')">\u{1F3A4}</button>' +
        (hasEx ? ' <button class="ex-toggle-btn vt-btn" onclick="toggleVtEx(\'' + exId + '\',this)">\u{1F4AC} V\xed dụ</button>' : '');

      card.innerHTML =
        '<div class="zh-card-top">' +
          '<span class="zh-char" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'' + typeEsc + '\')" title="Xem n\xe9t viết">' + w.zh + '</span>' +
          '<span class="type-badge">' + w.type + '</span>' +
          '<div class="zh-card-actions-inline">' + actHtml + '</div>' +
        '</div>' +
        '<div class="zh-card-py">' + w.py + '</div>' +
        '<div class="zh-card-vi">' + w.vi + '</div>';

      if (hasEx) {
        let exHtml = '<div class="ex-panel" id="' + exId + '" style="display:none">';
        w.ex.forEach(function(e) {
          const eZhEsc = e.zh.replace(/'/g, "\\'");
          exHtml += '<div class="ex-row">' +
            '<span class="ex-zh">' + e.zh + '</span>' +
            '<button class="ex-speak-btn" onclick="speak(\'' + eZhEsc + '\')">\u{1F50A}</button>' +
            '<div class="ex-py">' + e.py + '</div>' +
            '<div class="ex-vi">' + e.vi + '</div>' +
            '</div>';
        });
        exHtml += '</div>';
        card.innerHTML += exHtml;
      }
      cards.appendChild(card);
    });
    sec.appendChild(cards);
    container.appendChild(sec);
  });

  if (!container.innerHTML.trim()) {
    container.innerHTML = '<div class="card" style="text-align:center;color:var(--text-light)">Kh\xf4ng t\xecm thấy từ n\xe0o.</div>';
  }
}

function toggleVtEx(id, btn) {
  const panel = document.getElementById(id);
  if (!panel) return;
  const open = panel.style.display === 'none';
  panel.style.display = open ? 'block' : 'none';
  btn.classList.toggle('active', open);
  btn.textContent = open ? '\u{1F4AC} Ẩn' : '\u{1F4AC} V\xed dụ';
}

function filterVocab(val) { renderVocab(val); }

// ===================================================
// PHRASES RENDER
