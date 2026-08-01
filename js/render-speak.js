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
    const li = (p.lesson || 1) - 1;
    allSpeakItems.push({zh: p.zh, py: p.py, vi: p.vi, lessonIdx: li, source: `C\xe2u mẫu B\xe0i ${p.lesson||''}`});
  });
}

// Tạo nút lọc bài tự động theo dữ liệu thực tế (không bị thiếu bài mới)
function populateSpeakFilter() {
  const wrap = document.getElementById('speakFilter');
  if (!wrap || wrap.dataset.loaded) return;
  wrap.dataset.loaded = '1';
  const maxIdx = allSpeakItems.reduce((m, i) => Math.max(m, i.lessonIdx), -1);
  wrap.innerHTML = '<button class="speak-filter-btn active" onclick="filterSpeakCards(\'all\',this)">Tất cả</button>';
  for (let i = 0; i <= maxIdx; i++) {
    if (!allSpeakItems.some(it => it.lessonIdx === i)) continue;
    const b = document.createElement('button');
    b.className = 'speak-filter-btn';
    b.textContent = 'Bài ' + (i + 1);
    b.onclick = function() { filterSpeakCards(i, this); };
    wrap.appendChild(b);
  }
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
    container.innerHTML = '<div style="text-align:center;color:var(--text-light);padding:30px">Kh\xf4ng c\xf3 c\xe2u n\xe0o.</div>';
    return;
  }

  const groups = {};
  items.forEach((item) => {
    const key = item.source || 'Kh\xe1c';
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });

  Object.keys(groups).forEach(src => {
    const sec = document.createElement('div');
    sec.className = 'lt-section';
    const title = document.createElement('div');
    title.className = 'lt-lesson-title';
    title.textContent = '\u{1F5E3}️ ' + src;
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
