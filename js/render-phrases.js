// ===================================================
function renderPhrases() {
  const container = document.getElementById('phraseGrid');
  container.innerHTML = '';
  // Group by lesson
  const byLesson = {};
  PHRASES.forEach((p, i) => {
    const les = p.lesson || 0;
    if (!byLesson[les]) byLesson[les] = [];
    byLesson[les].push({p, i});
  });
  let globalIdx = 0;
  Object.keys(byLesson).sort((a,b)=>+a-+b).forEach(les => {
    const sec = document.createElement('div');
    sec.className = 'lt-section';
    const title = document.createElement('div');
    title.className = 'lt-lesson-title';
    title.textContent = '📖 Bài ' + les + ' — Câu mẫu';
    sec.appendChild(title);

    const table = document.createElement('table');
    table.className = 'lt-table';
    table.innerHTML = '<thead><tr>' +
      '<th class="lt-num">#</th>' +
      '<th style="min-width:130px">Chữ Hán</th>' +
      '<th style="min-width:160px">Pinyin</th>' +
      '<th>Nghĩa</th>' +
      '<th class="lt-act">Nghe · Luyện nói</th>' +
      '</tr></thead>';
    const tbody = document.createElement('tbody');

    byLesson[les].forEach(({p, i}) => {
      globalIdx++;
      const tr = document.createElement('tr');
      tr.className = 'lt-row';
      const zhEsc = p.zh.replace(/'/g, "\\'");
      const pyEsc = p.py.replace(/'/g, "\\'");
      const viEsc = p.vi.replace(/'/g, "\\'");
      tr.innerHTML =
        '<td class="lt-num">' + globalIdx + '</td>' +
        '<td class="lt-zh" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'Câu mẫu Bài ' + les + '\')" title="Xem nét viết">' + p.zh + '</td>' +
        '<td class="lt-py">' + p.py + '</td>' +
        '<td class="lt-vi">' + p.vi + '</td>' +
        '<td class="lt-act">' +
          '<button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">🔊</button> ' +
          '<button class="dl-btn dl-btn-practice" onclick="openSpeakModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',' + (+les-1) + ',-1)">🎤 Tập nói</button>' +
        '</td>';
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    sec.appendChild(table);
    container.appendChild(sec);
  });
}

// ===================================================
// FLASHCARD
