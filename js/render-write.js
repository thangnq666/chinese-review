// ===================================================
// LUYỆN VIẾT – Writing Practice Tab
// Uses HanziWriter (already loaded globally)
// ===================================================

(function() {
  // ---- State ----
  var wLesson = null;      // selected lesson object from VOCAB_DATA
  var wWords = [];         // flat array of {zh, py, vi} for current lesson
  var wIdx = 0;            // current word index
  var wHW = [];            // HanziWriter instances [{hw, ch, id}]
  var wQuizDone = 0;
  var wQuizTotal = 0;
  var wAnimating = false;

  // ---- Init: populate lesson selector ----
  function initWriteTab() {
    var sel = document.getElementById('writeLessonSel');
    if (!sel || sel.dataset.loaded) return;
    sel.dataset.loaded = '1';

    if (typeof VOCAB_DATA === 'undefined') return;

    VOCAB_DATA.forEach(function(lesson, i) {
      var opt = document.createElement('option');
      opt.value = i;
      opt.textContent = lesson.lesson;
      sel.appendChild(opt);
    });
  }

  // ---- Select lesson → build word grid ----
  window.initWriteLesson = function() {
    var sel = document.getElementById('writeLessonSel');
    var idx = parseInt(sel.value);
    if (isNaN(idx)) { wWords = []; renderWordGrid(); return; }
    wLesson = VOCAB_DATA[idx];
    wWords = (wLesson.words || []).filter(function(w) {
      return w.zh && [...w.zh].some(isCJK);
    });
    wIdx = 0;
    renderWordGrid();
    if (wWords.length > 0) selectWriteWord(0);
  };

  function renderWordGrid() {
    var grid = document.getElementById('writeWordGrid');
    grid.innerHTML = '';
    wWords.forEach(function(w, i) {
      var btn = document.createElement('button');
      btn.className = 'ww-chip' + (i === wIdx ? ' active' : '');
      btn.textContent = w.zh;
      btn.title = w.py + ' – ' + w.vi;
      btn.onclick = function() { selectWriteWord(i); };
      grid.appendChild(btn);
    });
  }

  // ---- Select word → setup canvas area ----
  window.selectWriteWord = function(i) {
    wIdx = i;
    // Update chip active state
    document.querySelectorAll('.ww-chip').forEach(function(c, ci) {
      c.classList.toggle('active', ci === i);
    });

    var word = wWords[i];
    if (!word) return;

    document.getElementById('writeCharZh').textContent = word.zh;
    document.getElementById('writeCharPy').textContent = word.py || '';
    document.getElementById('writeCharVi').textContent = word.vi || '';
    document.getElementById('writeArea').style.display = '';
    document.getElementById('writeProgress').textContent =
      (i + 1) + ' / ' + wWords.length;

    buildCanvases(word.zh);
  };

  // ---- Build HanziWriter canvases for each CJK char ----
  function buildCanvases(zh) {
    var wrap = document.getElementById('writeCanvases');
    wrap.innerHTML = '';
    wHW = [];
    wQuizDone = 0;
    wAnimating = false;

    setHintBox('💡 Nhấn <strong>▶ Xem nét</strong> để xem thứ tự viết, hoặc <strong>✍️ Luyện viết</strong> để luyện tập.');

    var chars = [...zh].filter(isCJK);
    if (chars.length === 0) {
      wrap.innerHTML = '<p class="ww-no-char">Không có chữ Hán trong từ này.</p>';
      return;
    }

    var size = Math.min(220, Math.floor((window.innerWidth - 80) / chars.length));
    size = Math.max(size, 130);

    chars.forEach(function(ch, ci) {
      var box = document.createElement('div');
      box.className = 'ww-char-box';
      var svgId = 'ww-svg-' + ci;
      box.innerHTML =
        '<svg id="' + svgId + '" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg"></svg>' +
        '<div class="ww-char-label">' + ch + '</div>';
      wrap.appendChild(box);

      var svg = box.querySelector('svg');
      drawWriteGrid(svg, size);

      try {
        var hw = HanziWriter.create(svgId, ch, {
          width: size,
          height: size,
          padding: Math.round(size * 0.07),
          showOutline: true,
          strokeColor: '#c0392b',
          outlineColor: '#d5d5d5',
          strokeAnimationSpeed: 1,
          delayBetweenStrokes: 300,
          drawingColor: '#c0392b',
          drawingWidth: Math.round(size * 0.022),
          showCharacter: true
        });
        wHW.push({hw: hw, ch: ch, id: svgId});
      } catch(e) {
        console.warn('HanziWriter error', ch, e);
      }
    });
  }

  // ---- Animate stroke order ----
  window.writeAnimate = function() {
    if (wHW.length === 0) return;
    wAnimating = true;
    setHintBox('▶ Đang phát hoạt ảnh thứ tự nét...');
    wHW.forEach(function(entry) {
      try { entry.hw.cancelQuiz && entry.hw.cancelQuiz(); } catch(e) {}
      try { entry.hw.hideCharacter(); } catch(e) {}
    });
    setTimeout(function() {
      wHW.forEach(function(entry) {
        try { entry.hw.animateCharacter(); } catch(e) {}
      });
    }, 60);
  };

  // ---- Quiz mode ----
  window.writeQuiz = function() {
    if (wHW.length === 0) return;
    wQuizDone = 0;
    wQuizTotal = wHW.length;
    wAnimating = false;
    setHintBox('✍️ Hãy vẽ từng nét theo thứ tự bằng chuột, ngón tay hoặc bút cảm ứng...');

    wHW.forEach(function(entry) {
      try {
        entry.hw.quiz({
          onMistake: function(strokeData) {
            setHintBox('❌ Nét chưa đúng – thử lại! Nhìn vào gợi ý màu xám để chỉnh hướng nét.');
          },
          onCorrectStroke: function(strokeData) {
            setHintBox('✅ Nét ' + (strokeData.strokeNum + 1) + ' đúng rồi! Tiếp tục...');
          },
          onComplete: function(summary) {
            wQuizDone++;
            var mistakes = summary && summary.totalMistakes != null ? summary.totalMistakes : '?';
            if (wQuizDone >= wQuizTotal) {
              if (mistakes == 0 || mistakes === '0') {
                setHintBox('🎉 <strong>Hoàn hảo!</strong> Bạn đã viết đúng tất cả các chữ không sai nét nào!');
              } else {
                setHintBox('🎊 <strong>Hoàn thành!</strong> Đã viết xong – hãy nhấn <strong>✍️ Luyện viết</strong> để thử lại và viết chuẩn hơn.');
              }
            }
          }
        });
      } catch(e) { console.warn('Quiz error', entry.ch, e); }
    });
  };

  // ---- Clear / reset ----
  window.writeClear = function() {
    var word = wWords[wIdx];
    if (word) buildCanvases(word.zh);
  };

  // ---- Prev / Next ----
  window.writePrev = function() {
    if (wWords.length === 0) return;
    selectWriteWord((wIdx - 1 + wWords.length) % wWords.length);
    renderWordGrid();
  };

  window.writeNext = function() {
    if (wWords.length === 0) return;
    selectWriteWord((wIdx + 1) % wWords.length);
    renderWordGrid();
  };

  // ---- Helpers ----
  function isCJK(ch) {
    var code = ch.codePointAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) ||
           (code >= 0x3400 && code <= 0x4DBF) ||
           (code >= 0xF900 && code <= 0xFAFF);
  }

  function setHintBox(html) {
    var el = document.getElementById('writeHintBox');
    if (el) el.innerHTML = html;
  }

  function drawWriteGrid(svg, size) {
    var ns = 'http://www.w3.org/2000/svg';
    var mid = size / 2;
    var rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('x','1'); rect.setAttribute('y','1');
    rect.setAttribute('width', size - 2); rect.setAttribute('height', size - 2);
    rect.setAttribute('fill', '#fafafa');
    rect.setAttribute('stroke', '#ccc');
    rect.setAttribute('stroke-width', '1.5');
    rect.setAttribute('rx', '4');
    svg.appendChild(rect);
    [[mid,0,mid,size],[0,mid,size,mid],[0,0,size,size],[size,0,0,size]]
    .forEach(function(coords) {
      var line = document.createElementNS(ns, 'line');
      line.setAttribute('x1', coords[0]); line.setAttribute('y1', coords[1]);
      line.setAttribute('x2', coords[2]); line.setAttribute('y2', coords[3]);
      line.setAttribute('stroke', '#e5e5e5');
      line.setAttribute('stroke-width', '0.8');
      line.setAttribute('stroke-dasharray', '4,4');
      svg.appendChild(line);
    });
  }

  // ---- Auto-init when tab becomes active ----
  // Called from navigation.js showSection hook
  window.onWriteTabOpen = function() {
    initWriteTab();
  };

})();
