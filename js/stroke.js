// ===================================================
let currentModalWord = {zh:'', py:'', vi:'', type:''};
let hwInstances = [];   // HanziWriter instances
let quizInstances = []; // quiz HanziWriter instances
let isQuizMode = false;
let quizCorrect = 0;
let quizTotal = 0;

function isCJK(ch) {
  const code = ch.codePointAt(0);
  return (code >= 0x4E00 && code <= 0x9FFF)  ||
         (code >= 0x3400 && code <= 0x4DBF)  ||
         (code >= 0xF900 && code <= 0xFAFF)  ||
         (code >= 0x20000 && code <= 0x2A6DF);
}

function showStrokeModal(zh, py, vi, type) {
  currentModalWord = {zh, py, vi, type: type || ''};
  document.getElementById('modalZh').textContent = zh;
  document.getElementById('modalPy').textContent = py;
  document.getElementById('modalVi').textContent = vi;
  document.getElementById('modalType').textContent = type || '';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('strokeInfoBox').innerHTML =
    '💡 Nhấn <strong>▶ Xem nét viết</strong> để xem animation từng nét. Nhấn <strong>✍️ Luyện viết</strong> để tập viết bằng chuột/ngón tay.';

  // Clear previous
  const wrap = document.getElementById('strokeCharsWrap');
  wrap.innerHTML = '';
  hwInstances = [];
  quizInstances = [];
  sbsIdx = 0; sbsStroke = 0;
  isQuizMode = false;

  // Get individual CJK characters
  const chars = [...zh].filter(isCJK);
  if (chars.length === 0) {
    wrap.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:20px">Không có chữ Hán để hiển thị.</p>';
    document.getElementById('strokeOverlay').classList.add('open');
    return;
  }

  chars.forEach((ch, i) => {
    const boxId = 'stroke-box-' + i;
    const box = document.createElement('div');
    box.className = 'stroke-char-box';

    const svgId = 'hw-svg-' + i;
    const size = chars.length === 1 ? 180 : 140;

    box.innerHTML = `
      <svg id="${svgId}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"></svg>
      <div class="stroke-char-label">
        <span style="font-size:1.1rem;font-weight:700;color:var(--dark)">${ch}</span>
      </div>`;
    wrap.appendChild(box);

    // Draw grid lines on SVG
    const svg = box.querySelector('svg');
    drawGrid(svg, size);

    try {
      const hw = HanziWriter.create(svgId, ch, {
        width: size,
        height: size,
        padding: 12,
        showOutline: true,
        strokeColor: '#c0392b',
        outlineColor: '#ddd',
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 250,
        delayBetweenLoops: 1500,
        drawingColor: '#c0392b',
        drawingWidth: chars.length === 1 ? 5 : 4,
        showCharacter: true,
        onLoadCharDataSuccess: (data) => {
          const info = document.getElementById('strokeInfoBox');
          const sc = data && data.strokes ? data.strokes.length : 0;
          // Store stroke count for strokeByStroke tracking
          const entry = hwInstances.find(function(e){ return e.svgId === svgId; });
          if (entry) entry.strokeCount = sc;
          if (chars.length === 1 && sc) {
            info.innerHTML = '✍️ Chữ <strong>' + ch + '</strong> có <span class="stroke-count-badge">' + sc + ' nét</span> — Nhấn ▶ để xem animation hoặc ✍️ để tập viết.';
          }
        },
        onLoadCharDataError: () => {
          svg.innerHTML += `<text x="${size/2}" y="${size/2+10}" text-anchor="middle" font-size="60" fill="#ccc">${ch}</text>`;
        }
      });
      hwInstances.push({hw, ch, svgId, size, strokeCount: 0});
    } catch(e) {
      console.warn('HanziWriter load error for', ch, e);
    }
  });

  document.getElementById('strokeOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeStrokeModal(event) {
  if (event && event.target !== document.getElementById('strokeOverlay') && event.type === 'click') return;
  document.getElementById('strokeOverlay').classList.remove('open');
  document.body.style.overflow = '';
  hwInstances.forEach(({hw}) => {
    try { hw.cancelQuiz && hw.cancelQuiz(); } catch(e) {}
  });
  hwInstances = [];
  quizInstances = [];
  isQuizMode = false;
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function animateAll() {
  isQuizMode = false;
  sbsIdx = 0; sbsStroke = 0;
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('strokeInfoBox').innerHTML = '▶ Đang phát animation nét viết...';
  // Cancel any active quiz/animation, then hide all chars (start from blank)
  hwInstances.forEach(function(entry) {
    try { entry.hw.cancelQuiz && entry.hw.cancelQuiz(); } catch(e) {}
    try { entry.hw.hideCharacter(); } catch(e) {}
  });
  // Small delay so hideCharacter completes before animation starts
  setTimeout(function() {
    hwInstances.forEach(function(entry) {
      try { entry.hw.animateCharacter(); } catch(e) {}
    });
  }, 80);
}

let sbsIdx = 0;
let sbsStroke = 0;

function strokeByStroke() {
  isQuizMode = false;
  document.getElementById('quizResult').style.display = 'none';
  if (hwInstances.length === 0) return;

  // First call (fresh state): hide all chars and start from stroke 0
  if (sbsIdx === 0 && sbsStroke === 0) {
    hwInstances.forEach(function(entry) {
      try { entry.hw.cancelQuiz && entry.hw.cancelQuiz(); entry.hw.hideCharacter(); } catch(e) {}
    });
  }

  // Advance sbsIdx if current char's strokes are exhausted
  while (sbsIdx < hwInstances.length) {
    var sc = hwInstances[sbsIdx].strokeCount;
    if (sc > 0 && sbsStroke >= sc) { sbsIdx++; sbsStroke = 0; }
    else { break; }
  }

  // All strokes of all chars shown → reset for next button press
  if (sbsIdx >= hwInstances.length) {
    document.getElementById('strokeInfoBox').innerHTML =
      '✅ Đã hiển thị tất cả các nét! Nhấn lại <strong>Từng nét</strong> để bắt đầu lại từ đầu.';
    sbsIdx = 0; sbsStroke = 0;
    return;
  }

  var entry = hwInstances[sbsIdx];
  var currentCh = entry.ch;
  entry.hw.animateStroke(sbsStroke, {
    onComplete: function() {
      sbsStroke++;
      var totalDone = 0;
      for (var k = 0; k < sbsIdx; k++) totalDone += (hwInstances[k].strokeCount || 0);
      totalDone += sbsStroke;
      var totalAll = hwInstances.reduce(function(s, e) { return s + (e.strokeCount || 0); }, 0);
      var info = document.getElementById('strokeInfoBox');
      if (totalAll > 0) {
        info.innerHTML = '🖊 Nét ' + totalDone + '/' + totalAll + ' — chữ <strong>' + currentCh + '</strong> — nhấn <strong>Từng nét</strong> để tiếp tục';
      } else {
        info.innerHTML = '🖊 Đã vẽ nét ' + sbsStroke + ' — nhấn <strong>Từng nét</strong> để xem nét tiếp theo';
      }
    }
  });
}

function startQuiz() {
  if (hwInstances.length === 0) return;
  sbsIdx = 0; sbsStroke = 0;
  isQuizMode = true;
  quizCorrect = 0;
  quizTotal = hwInstances.length;
  const qr = document.getElementById('quizResult');
  qr.style.display = 'none';
  qr.innerHTML = '';
  document.getElementById('strokeInfoBox').innerHTML =
    '✍️ Hãy vẽ từng nét theo thứ tự bằng chuột hoặc ngón tay...';
  hwInstances.forEach(({hw, ch}) => {
    try {
      hw.quiz({
        onMistake: () => {},
        onCorrectStroke: () => {},
        onComplete: () => {
          quizCorrect++;
          if (quizCorrect >= quizTotal) {
            qr.style.display = 'block';
            qr.innerHTML = '🎉 Xuất sắc! Bạn đã viết đúng tất cả các chữ!';
            document.getElementById('strokeInfoBox').innerHTML =
              '✅ Hoàn thành luyện viết!';
          }
        }
      });
    } catch(e) { console.warn('Quiz error', ch, e); }
  });
}

function drawGrid(svg, size) {
  const ns = 'http://www.w3.org/2000/svg';
  const mid = size / 2;
  // Border
  const rect = document.createElementNS(ns, 'rect');
  rect.setAttribute('x', '1'); rect.setAttribute('y', '1');
  rect.setAttribute('width', size - 2); rect.setAttribute('height', size - 2);
  rect.setAttribute('fill', 'none');
  rect.setAttribute('stroke', '#ccc');
  rect.setAttribute('stroke-width', '1');
  svg.appendChild(rect);
  // Grid lines
  [[mid, 0, mid, size], [0, mid, size, mid],
   [0, 0, size, size], [size, 0, 0, size]].forEach(([x1,y1,x2,y2]) => {
    const line = document.createElementNS(ns, 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#e0e0e0');
    line.setAttribute('stroke-width', '0.5');
    line.setAttribute('stroke-dasharray', '4,4');
    svg.appendChild(line);
  });
}


// ===================================================
// EXERCISE SYSTEM
