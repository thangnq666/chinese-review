// ===================================================
let allSpeakItems = [];
let currentSpeakFilter = 'all';

function buildSpeakData() {
  allSpeakItems = [];
  DIALOGUE_DATA.forEach((dlg, di) => {
    dlg.lines.forEach((line, li) => {
      allSpeakItems.push({zh: line.zh, py: line.py, vi: line.vi, lessonIdx: di, source: `Hội thoại Bài ${di+1}`});
    });
  });
  PHRASES.forEach(p => {
    const li = (p.lesson || 1) - 1; // convert lesson 1-8 to index 0-7
    allSpeakItems.push({zh: p.zh, py: p.py, vi: p.vi, lessonIdx: li, source: `Câu mẫu Bài ${p.lesson||''}`});
  });
}

function filterSpeakCards(filter, btn) {
  currentSpeakFilter = filter;
  document.querySelectorAll('.speak-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderSpeakCards();
}

function renderSpeakCards() {
  const container = document.getElementById('speakCardsContainer');
  container.innerHTML = '';
  const items = currentSpeakFilter === 'all'
    ? allSpeakItems
    : allSpeakItems.filter(i => i.lessonIdx === currentSpeakFilter);

  if (items.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-light);padding:30px">Không có câu nào.</div>';
    return;
  }

  // Group by source lesson
  const groups = {};
  items.forEach((item) => {
    const key = item.source || 'Khác';
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  let globalN = 0;
  Object.keys(groups).forEach(src => {
    const sec = document.createElement('div');
    sec.className = 'lt-section';

    const title = document.createElement('div');
    title.className = 'lt-lesson-title';
    title.textContent = '🗣️ ' + src;
    sec.appendChild(title);

    const table = document.createElement('table');
    table.className = 'lt-table';
    table.innerHTML = '<thead><tr>' +
      '<th class="lt-num">#</th>' +
      '<th style="min-width:140px">Chữ Hán</th>' +
      '<th style="min-width:160px">Pinyin</th>' +
      '<th>Nghĩa</th>' +
      '<th class="lt-act">Nghe · Luyện nói</th>' +
      '</tr></thead>';
    const tbody = document.createElement('tbody');

    groups[src].forEach((item) => {
      globalN++;
      const tr = document.createElement('tr');
      tr.className = 'lt-row';
      const zhEsc = item.zh.replace(/'/g, "\\'");
      const pyEsc = item.py.replace(/'/g, "\\'");
      const viEsc = item.vi.replace(/'/g, "\\'");
      const realIdx = allSpeakItems.indexOf(item);
      tr.innerHTML =
        '<td class="lt-num">' + globalN + '</td>' +
        '<td class="lt-zh" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'Tập nói\')" title="Xem nét viết">' + item.zh + '</td>' +
        '<td class="lt-py">' + item.py + '</td>' +
        '<td class="lt-vi">' + item.vi + '</td>' +
        '<td class="lt-act">' +
          '<button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">🔊</button> ' +
          '<button class="dl-btn dl-btn-practice" onclick="openSpeakModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',' + item.lessonIdx + ',' + realIdx + ')">🎤 Tập nói</button>' +
        '</td>';
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    sec.appendChild(table);
    container.appendChild(sec);
  });
}
// ===================================================
// SPEECH RECOGNITION & SCORING
