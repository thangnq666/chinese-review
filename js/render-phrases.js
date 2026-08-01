// ===================================================
function renderPhrases() {
  const container = document.getElementById('phraseGrid');
  container.innerHTML = '';
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
    title.textContent = '\u{1F4D6} B\xe0i ' + les + ' — C\xe2u mẫu';
    sec.appendChild(title);

    const cards = document.createElement('div');
    cards.className = 'zh-cards';

    byLesson[les].forEach(({p, i}) => {
      globalIdx++;
      const zhEsc = p.zh.replace(/'/g, "\\'");
      const pyEsc = p.py.replace(/'/g, "\\'");
      const viEsc = p.vi.replace(/'/g, "\\'");
      const card = document.createElement('div');
      card.className = 'zh-card lt-card';
      card.innerHTML =
        '<div class="zh-card-top">' +
          '<span class="zh-char" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'C\xe2u mẫu B\xe0i ' + les + '\')" title="Xem n\xe9t viết">' + p.zh + '</span>' +
          '<div class="zh-card-actions-inline">' +
            '<button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">\u{1F50A}</button>' +
            '<button class="dl-btn dl-btn-practice" onclick="openSpeakModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',' + (+les-1) + ',-1)">\u{1F3A4} Tập n\xf3i</button>' +
          '</div>' +
        '</div>' +
        '<div class="zh-card-py">' + p.py + '</div>' +
        '<div class="zh-card-vi">' + p.vi + '</div>';
      cards.appendChild(card);
    });
    sec.appendChild(cards);
    container.appendChild(sec);
  });
}

// ===================================================
// FLASHCARD
