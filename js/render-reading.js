// ===================================================
// BÀI ĐỌC — render + đọc từng dòng / đọc cả bài
// ===================================================
function renderReading() {
  const container = document.getElementById('readingContainer');
  if (!container) return;
  container.innerHTML = '';

  READING_DATA.forEach((passage, pIdx) => {
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'reading-header';
    header.innerHTML =
      '<h3 style="margin:0">' + passage.title + '</h3>' +
      '<div class="reading-header-actions">' +
        '<button class="stroke-ctrl-btn btn-speak-modal" onclick="playFullReading(' + pIdx + ')" style="font-size:0.82rem;padding:7px 14px">&#9654; Đọc cả bài</button>' +
        '<button class="stroke-ctrl-btn" style="font-size:0.82rem;padding:7px 14px;background:var(--text-light);color:#fff" onclick="stopReading()">&#9632; Dừng</button>' +
      '</div>';
    card.appendChild(header);

    const lines = document.createElement('div');
    lines.className = 'reading-lines';
    lines.id = 'reading-lines-' + pIdx;

    passage.lines.forEach((ln, lIdx) => {
      const zhEsc = ln.zh.replace(/'/g, "\\'");
      const row = document.createElement('div');
      row.className = 'reading-line';
      row.id = 'reading-line-' + pIdx + '-' + lIdx;
      row.innerHTML =
        '<div class="reading-line-num">' + (lIdx === 0 ? '📖' : lIdx) + '</div>' +
        '<div class="reading-line-body">' +
          '<div class="reading-zh">' + ln.zh + '</div>' +
          '<div class="reading-py">' + ln.py + '</div>' +
          '<div class="reading-vi">' + ln.vi + '</div>' +
        '</div>' +
        '<button class="dl-btn dl-btn-speak reading-speak-btn" title="Nghe câu này" onclick="speakReadingLine(\'' + zhEsc + '\', ' + pIdx + ', ' + lIdx + ')">\u{1F50A}</button>';
      lines.appendChild(row);
    });

    card.appendChild(lines);
    container.appendChild(card);
  });
}

function speakReadingLine(zh, pIdx, lIdx) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  highlightReadingLine(pIdx, lIdx);
  const utt = new SpeechSynthesisUtterance(zh.replace(/[？！。，、]/g, ''));
  utt.lang = 'zh-CN';
  utt.rate = getRate();
  if (typeof ttsVoice !== 'undefined' && ttsVoice) utt.voice = ttsVoice;
  utt.onend = () => clearReadingHighlight(pIdx);
  window.speechSynthesis.speak(utt);
}

let _readingPlaying = false;

function playFullReading(pIdx) {
  if (!window.speechSynthesis) return;
  const passage = READING_DATA[pIdx];
  if (!passage) return;
  window.speechSynthesis.cancel();
  _readingPlaying = true;
  let idx = 0;
  function playOne() {
    if (!_readingPlaying || idx >= passage.lines.length) { clearReadingHighlight(pIdx); return; }
    highlightReadingLine(pIdx, idx);
    const line = passage.lines[idx];
    const utt = new SpeechSynthesisUtterance(line.zh.replace(/[？！。，、]/g, ''));
    utt.lang = 'zh-CN';
    utt.rate = getRate();
    if (typeof ttsVoice !== 'undefined' && ttsVoice) utt.voice = ttsVoice;
    utt.onend = () => { idx++; setTimeout(playOne, 450); };
    window.speechSynthesis.speak(utt);
  }
  playOne();
}

function stopReading() {
  _readingPlaying = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.querySelectorAll('.reading-line.active').forEach(el => el.classList.remove('active'));
}

function highlightReadingLine(pIdx, lIdx) {
  document.querySelectorAll('.reading-line.active').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('reading-line-' + pIdx + '-' + lIdx);
  if (el) {
    el.classList.add('active');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function clearReadingHighlight(pIdx) {
  document.querySelectorAll('.reading-line.active').forEach(el => el.classList.remove('active'));
}
