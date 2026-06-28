// ===================================================
// LUYỆN VIẾT – Writing Practice Tab  v2
// Uses HanziWriter (already loaded globally)
// ===================================================

(function() {
  // ---- State ----
  var wWords  = [];   // {zh,py,vi} for current lesson
  var wIdx    = 0;    // current word index
  var wHW     = [];   // practice HW instances [{hw,ch,id,strokeCount}]
  var wGHW    = [];   // guide    HW instances [{hw,ch,id,strokeCount}]
  var wQuizDone = 0, wQuizTotal = 0;

  // Guide loop state
  var gPaused   = false;
  var gTimer    = null;
  var gCharIdx  = 0;
  var gStroke   = 0;
  var gSpeed    = 1;   // 0.6 | 1 | 2
  var gPauseMs  = 700; // ms between strokes

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
    var lesson = VOCAB_DATA[idx];
    wWords = (lesson.words || []).filter(function(w) {
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

  // ---- Select word ----
  window.selectWriteWord = function(i) {
    wIdx = i;
    document.querySelectorAll('.ww-chip').forEach(function(c, ci) {
      c.classList.toggle('active', ci === i);
    });
    var word = wWords[i];
    if (!word) return;
    document.getElementById('writeCharZh').textContent = word.zh;
    document.getElementById('writeCharPy').textContent = word.py || '';
    document.getElementById('writeCharVi').textContent = word.vi || '';
    document.getElementById('writeArea').style.display = '';
    document.getElementById('writeProgress').textContent = (i + 1) + ' / ' + wWords.length;
    buildBothPanels(word.zh);
  };

  // ---- Build guide + practice panels ----
  function buildBothPanels(zh) {
    stopGuide();
    wHW = []; wGHW = [];
    wQuizDone = 0;
    setHintBox('💡 Xem ô <strong>Hướng dẫn</strong> bên trái – nét tự chạy để hướng dẫn. Ô bên phải để bạn tự luyện viết.');

    var chars = [...zh].filter(isCJK);
    if (chars.length === 0) {
      document.getElementById('writeCanvases').innerHTML = '<p class="ww-no-char">Không có chữ Hán.</p>';
      document.getElementById('guideCanvases').innerHTML = '';
      return;
    }

    var maxW = window.innerWidth - 80;
    var size = Math.min(200, Math.floor(maxW / chars.length));
    size = Math.max(size, 120);

    buildPanel('guideCanvases', chars, size, 'ww-guide', wGHW, {
      showOutline: true,
      strokeColor: '#1a73e8',
      outlineColor: '#c8d8f8',
      strokeAnimationSpeed: gSpeed,
      delayBetweenStrokes: 0,
      showCharacter: false,
      drawingWidth: Math.round(size * 0.024)
    });

    buildPanel('writeCanvases', chars, size, 'ww-svg', wHW, {
      showOutline: true,
      strokeColor: '#c0392b',
      outlineColor: '#d5d5d5',
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 300,
      drawingColor: '#c0392b',
      drawingWidth: Math.round(size * 0.024),
      showCharacter: true
    });

    // Start guide loop after HW instances load
    setTimeout(startGuideLoop, 600);
  }

  function buildPanel(containerId, chars, size, idPrefix, hwArr, opts) {
    var wrap = document.getElementById(containerId);
    wrap.innerHTML = '';
    chars.forEach(function(ch, ci) {
      var svgId = idPrefix + '-' + ci;
      var box = document.createElement('div');
      box.className = 'ww-char-box';
      box.innerHTML =
        '<svg id="' + svgId + '" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg"></svg>' +
        '<div class="ww-char-label">' + ch + '</div>';
      wrap.appendChild(box);
      drawWriteGrid(box.querySelector('svg'), size);
      try {
        var config = Object.assign({}, opts, { width: size, height: size, padding: Math.round(size * 0.07) });
        var hw = HanziWriter.create(svgId, ch, config);
        // Read stroke count once data loads
        var entry = { hw: hw, ch: ch, id: svgId, strokeCount: 0 };
        hw._options = hw._options || {};
        var origSuccess = config.onLoadCharDataSuccess;
        HanziWriter.create(svgId, ch, Object.assign({}, config, {
          onLoadCharDataSuccess: function(data) {
            if (data && data.strokes) entry.strokeCount = data.strokes.length;
            if (origSuccess) origSuccess(data);
          }
        }));
        hwArr.push(entry);
      } catch(e) { console.warn('HW error', ch, e); }
    });
  }

  // ---- Guide Loop (auto stroke-by-stroke) ----
  function startGuideLoop() {
    stopGuide();
    if (wGHW.length === 0) return;
    gCharIdx = 0;
    gStroke  = 0;
    gPaused  = false;

    // Hide all guide chars first
    wGHW.forEach(function(e) {
      try { e.hw.cancelQuiz && e.hw.cancelQuiz(); e.hw.hideCharacter(); } catch(ex) {}
    });

    updateGuideStrokeLabel(0, 0);
    gTimer = setTimeout(doNextGuideStroke, 400);
  }

  function stopGuide() {
    if (gTimer) { clearTimeout(gTimer); gTimer = null; }
    wGHW.forEach(function(e) {
      try { e.hw.cancelQuiz && e.hw.cancelQuiz(); } catch(ex) {}
    });
  }

  function doNextGuideStroke() {
    if (gPaused || wGHW.length === 0) return;

    // All chars done → brief pause then loop
    if (gCharIdx >= wGHW.length) {
      updateGuideStrokeLabel(-1, -1);
      gTimer = setTimeout(function() {
        // reset all and restart
        wGHW.forEach(function(e) {
          try { e.hw.hideCharacter(); } catch(ex) {}
        });
        gCharIdx = 0; gStroke = 0;
        gTimer = setTimeout(doNextGuideStroke, 500);
      }, 1500);
      return;
    }

    var entry = wGHW[gCharIdx];

    // Try to get stroke count from internal data if not loaded yet
    if (entry.strokeCount === 0) {
      try {
        var internal = entry.hw._character && entry.hw._character.strokes;
        if (internal) entry.strokeCount = internal.length;
      } catch(ex) {}
    }

    var sc = entry.strokeCount;

    // If stroke count unknown yet, fallback to animateCharacter for this char
    if (sc === 0) {
      try {
        entry.hw.animateCharacter({
          onComplete: function() {
            gCharIdx++;
            gStroke = 0;
            gTimer = setTimeout(doNextGuideStroke, gPauseMs * 2);
          }
        });
      } catch(ex) {
        gCharIdx++; gStroke = 0;
        gTimer = setTimeout(doNextGuideStroke, 300);
      }
      return;
    }

    // All strokes of this char done → move to next char
    if (gStroke >= sc) {
      gCharIdx++; gStroke = 0;
      gTimer = setTimeout(doNextGuideStroke, gPauseMs);
      return;
    }

    updateGuideStrokeLabel(gCharIdx, gStroke, sc);

    try {
      var strokeNum = gStroke;
      gStroke++;
      entry.hw.animateStroke(strokeNum, {
        onComplete: function() {
          if (!gPaused) {
            gTimer = setTimeout(doNextGuideStroke, gPauseMs);
          }
        }
      });
    } catch(ex) {
      gStroke++;
      gTimer = setTimeout(doNextGuideStroke, 300);
    }
  }

  function updateGuideStrokeLabel(charIdx, strokeIdx, total) {
    var lbl = document.getElementById('guideStrokeLabel');
    if (!lbl) return;
    if (charIdx < 0) {
      lbl.textContent = '✅ Xong – lặp lại...';
      return;
    }
    var ch = wGHW[charIdx] ? wGHW[charIdx].ch : '';
    if (total && total > 0) {
      lbl.textContent = 'Chữ ' + ch + ' – Nét ' + strokeIdx + ' / ' + total;
    } else {
      lbl.textContent = ch ? 'Chữ ' + ch + '...' : '';
    }
  }

  // ---- Guide controls ----
  window.toggleGuidePause = function() {
    gPaused = !gPaused;
    var btn = document.getElementById('btnGuidePause');
    if (btn) btn.textContent = gPaused ? '▶ Tiếp' : '⏸ Dừng';
    if (!gPaused) doNextGuideStroke();
  };

  window.setGuideSpeed = function(sp) {
    gSpeed = sp;
    gPauseMs = sp <= 0.6 ? 1200 : sp >= 2 ? 350 : 700;
    document.querySelectorAll('.ww-speed-btn').forEach(function(b) {
      b.classList.toggle('active', parseFloat(b.dataset.sp) === sp);
    });
  };

  window.restartGuide = function() {
    gPaused = false;
    var btn = document.getElementById('btnGuidePause');
    if (btn) btn.textContent = '⏸ Dừng';
    startGuideLoop();
  };

  // ---- Practice: Animate (practice panel) ----
  window.writeAnimate = function() {
    if (wHW.length === 0) return;
    setHintBox('▶ Đang phát hoạt ảnh thứ tự nét trên ô luyện viết...');
    wHW.forEach(function(e) {
      try { e.hw.cancelQuiz && e.hw.cancelQuiz(); e.hw.hideCharacter(); } catch(ex) {}
    });
    setTimeout(function() {
      wHW.forEach(function(e) {
        try { e.hw.animateCharacter(); } catch(ex) {}
      });
    }, 60);
  };

  // ---- Practice: Quiz mode ----
  window.writeQuiz = function() {
    if (wHW.length === 0) return;
    wQuizDone = 0; wQuizTotal = wHW.length;
    setHintBox('✍️ Hãy vẽ từng nét theo thứ tự bằng chuột, ngón tay hoặc bút cảm ứng...');
    wHW.forEach(function(entry) {
      try {
        entry.hw.quiz({
          onMistake: function() {
            setHintBox('❌ Nét chưa đúng – nhìn ô <strong>Hướng dẫn</strong> bên trái để xem hướng nét rồi thử lại.');
          },
          onCorrectStroke: function(d) {
            setHintBox('✅ Nét ' + (d.strokeNum + 1) + ' đúng! Tiếp tục...');
          },
          onComplete: function(summary) {
            wQuizDone++;
            if (wQuizDone >= wQuizTotal) {
              var m = summary && summary.totalMistakes != null ? summary.totalMistakes : 0;
              setHintBox(m == 0
                ? '🎉 <strong>Hoàn hảo!</strong> Tất cả nét đều đúng!'
                : '🎊 <strong>Hoàn thành!</strong> Nhấn <strong>✍️ Luyện viết</strong> để thử lại chính xác hơn.');
            }
          }
        });
      } catch(ex) { console.warn('Quiz error', entry.ch, ex); }
    });
  };

  // ---- Clear practice canvas ----
  window.writeClear = function() {
    var word = wWords[wIdx];
    if (word) buildBothPanels(word.zh);
  };

  // ---- Prev / Next ----
  window.writePrev = function() {
    if (!wWords.length) return;
    selectWriteWord((wIdx - 1 + wWords.length) % wWords.length);
    renderWordGrid();
  };
  window.writeNext = function() {
    if (!wWords.length) return;
    selectWriteWord((wIdx + 1) % wWords.length);
    renderWordGrid();
  };

  // ---- Helpers ----
  function isCJK(ch) {
    var c = ch.codePointAt(0);
    return (c >= 0x4E00 && c <= 0x9FFF) || (c >= 0x3400 && c <= 0x4DBF) || (c >= 0xF900 && c <= 0xFAFF);
  }
  function setHintBox(html) {
    var el = document.getElementById('writeHintBox');
    if (el) el.innerHTML = html;
  }
  function drawWriteGrid(svg, size) {
    var ns = 'http://www.w3.org/2000/svg', mid = size / 2;
    var rect = document.createElementNS(ns, 'rect');
    rect.setAttribute('x','1'); rect.setAttribute('y','1');
    rect.setAttribute('width', size-2); rect.setAttribute('height', size-2);
    rect.setAttribute('fill','#fafafa'); rect.setAttribute('stroke','#ccc');
    rect.setAttribute('stroke-width','1.5'); rect.setAttribute('rx','4');
    svg.appendChild(rect);
    [[mid,0,mid,size],[0,mid,size,mid],[0,0,size,size],[size,0,0,size]].forEach(function(c) {
      var l = document.createElementNS(ns,'line');
      l.setAttribute('x1',c[0]); l.setAttribute('y1',c[1]);
      l.setAttribute('x2',c[2]); l.setAttribute('y2',c[3]);
      l.setAttribute('stroke','#e5e5e5'); l.setAttribute('stroke-width','0.8');
      l.setAttribute('stroke-dasharray','4,4');
      svg.appendChild(l);
    });
  }

  window.onWriteTabOpen = function() { initWriteTab(); };
})();
