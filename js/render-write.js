// ===================================================
// LUYỆN VIẾT v3 – Writing Practice Tab
// ===================================================
(function() {
  var wWords   = [];
  var wIdx     = 0;
  var wHW      = [];   // practice HW [{hw,ch,id,strokeCount}]
  var wGHW     = [];   // guide    HW [{hw,ch,id,strokeCount}]
  var wQuizDone= 0, wQuizTotal = 0;
  var wPenWidth= 6;    // default pen width (px)

  // Guide loop state
  var gPaused  = false;
  var gTimer   = null;
  var gCharIdx = 0;
  var gStroke  = 0;
  var gPauseMs = 700;  // ms between strokes

  // ---- Init lesson selector ----
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

  // ---- Select lesson ----
  window.initWriteLesson = function() {
    var sel = document.getElementById('writeLessonSel');
    var idx = parseInt(sel.value);
    if (isNaN(idx)) { wWords = []; renderWordGrid(); return; }
    wWords = (VOCAB_DATA[idx].words || []).filter(function(w) {
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
    document.getElementById('writeProgress').textContent = (i+1) + ' / ' + wWords.length;
    buildBothPanels(word.zh);
  };

  // ---- Build both panels ----
  function buildBothPanels(zh) {
    stopGuide();
    wHW = []; wGHW = [];
    wQuizDone = 0;
    setHintBox('💡 Xem ô <strong>Hướng dẫn</strong> – nét tự chạy tuần tự. Nhấn <strong>✍️ Bắt đầu viết</strong> để luyện.');

    var chars = [...zh].filter(isCJK);
    if (!chars.length) {
      document.getElementById('writeCanvases').innerHTML = '<p class="ww-no-char">Không có chữ Hán.</p>';
      document.getElementById('guideCanvases').innerHTML = '';
      return;
    }

    var maxW = Math.max(window.innerWidth - 100, 200);
    var size = Math.min(200, Math.floor(maxW / chars.length));
    size = Math.max(size, 120);

    // Guide panel: blue strokes, animated
    buildHWPanel('guideCanvases', chars, size, 'ww-guide', wGHW, {
      showOutline : true,
      showCharacter: false,
      strokeColor  : '#1a73e8',
      outlineColor : '#bdd4f8',
      strokeAnimationSpeed: 1.2,
      drawingWidth : Math.round(size * 0.025)
    }, function() {
      // All guide chars loaded → start loop
      setTimeout(startGuideLoop, 100);
    });

    // Practice panel: very faint character for tracing; quiz draws in red
    buildHWPanel('writeCanvases', chars, size, 'ww-svg', wHW, {
      showOutline  : true,
      showCharacter: true,
      strokeColor  : 'rgba(192,57,43,0.13)',  // faint red outline
      outlineColor : '#f0d8d8',
      drawingColor : '#c0392b',
      drawingWidth : wPenWidth,
      strokeAnimationSpeed: 1
    }, null);
  }

  // ---- Build one HW panel ----
  function buildHWPanel(containerId, chars, size, idPrefix, hwArr, opts, onAllLoaded) {
    var wrap = document.getElementById(containerId);
    wrap.innerHTML = '';
    var loadedCount = 0;
    var total = chars.length;

    chars.forEach(function(ch, ci) {
      var svgId = idPrefix + '-' + ci;
      var box = document.createElement('div');
      box.className = 'ww-char-box';
      box.innerHTML =
        '<svg id="' + svgId + '" width="' + size + '" height="' + size +
        '" xmlns="http://www.w3.org/2000/svg"></svg>' +
        '<div class="ww-char-label">' + ch + '</div>';
      wrap.appendChild(box);
      drawWriteGrid(box.querySelector('svg'), size);

      var entry = { hw: null, ch: ch, id: svgId, strokeCount: 0 };
      hwArr.push(entry);

      function onLoaded(data) {
        if (data && data.strokes) entry.strokeCount = data.strokes.length;
        loadedCount++;
        if (onAllLoaded && loadedCount >= total) onAllLoaded();
      }

      try {
        var config = Object.assign({}, opts, {
          width  : size,
          height : size,
          padding: Math.round(size * 0.07),
          onLoadCharDataSuccess: onLoaded,
          onLoadCharDataError  : function() { loadedCount++; if (onAllLoaded && loadedCount >= total) onAllLoaded(); }
        });
        entry.hw = HanziWriter.create(svgId, ch, config);
      } catch(e) { console.warn('HW error', ch, e); loadedCount++; }
    });
  }

  // ============================================================
  // GUIDE ANIMATION – stroke by stroke, loops automatically
  // ============================================================
  function startGuideLoop() {
    stopGuide();
    if (!wGHW.length) return;
    gPaused  = false;
    gCharIdx = 0;
    gStroke  = 0;
    var btn = document.getElementById('btnGuidePause');
    if (btn) btn.textContent = '⏸ Dừng';
    // Hide all guide chars cleanly
    wGHW.forEach(function(e) { try { e.hw.hideCharacter(); } catch(ex) {} });
    updateGuideLabel(0, 0, 0);
    gTimer = setTimeout(doNextGuideStroke, 350);
  }

  function stopGuide() {
    if (gTimer) { clearTimeout(gTimer); gTimer = null; }
    wGHW.forEach(function(e) {
      try { e.hw.cancelQuiz && e.hw.cancelQuiz(); } catch(ex) {}
    });
  }

  function doNextGuideStroke() {
    if (gPaused || !wGHW.length) return;

    // All chars of this cycle finished → restart loop
    if (gCharIdx >= wGHW.length) {
      updateGuideLabel(-1, -1, -1);
      gTimer = setTimeout(function() {
        wGHW.forEach(function(e) { try { e.hw.hideCharacter(); } catch(ex) {} });
        gCharIdx = 0; gStroke = 0;
        gTimer = setTimeout(doNextGuideStroke, 400);
      }, 1600);
      return;
    }

    var entry = wGHW[gCharIdx];
    var sc = entry.strokeCount;

    // No stroke data for this char → skip
    if (!sc) { gCharIdx++; gTimer = setTimeout(doNextGuideStroke, 100); return; }

    // Current char's strokes exhausted → move to next char
    if (gStroke >= sc) {
      gCharIdx++; gStroke = 0;
      gTimer = setTimeout(doNextGuideStroke, gPauseMs + 200);
      return;
    }

    updateGuideLabel(gCharIdx, gStroke + 1, sc);

    var strokeNum = gStroke;
    gStroke++;
    try {
      entry.hw.animateStroke(strokeNum, {
        onComplete: function() {
          if (!gPaused) gTimer = setTimeout(doNextGuideStroke, gPauseMs);
        }
      });
    } catch(ex) {
      gTimer = setTimeout(doNextGuideStroke, 200);
    }
  }

  function updateGuideLabel(ci, stroke, total) {
    var lbl = document.getElementById('guideStrokeLabel');
    if (!lbl) return;
    if (ci < 0) { lbl.textContent = '✅ Lặp lại...'; return; }
    var ch = wGHW[ci] ? wGHW[ci].ch : '';
    lbl.textContent = total > 0 ? 'Chữ ' + ch + ' – Nét ' + stroke + ' / ' + total : (ch ? 'Chữ ' + ch + '...' : '');
  }

  // ---- Guide controls ----
  window.toggleGuidePause = function() {
    gPaused = !gPaused;
    var btn = document.getElementById('btnGuidePause');
    if (btn) btn.textContent = gPaused ? '▶ Tiếp' : '⏸ Dừng';
    if (!gPaused) doNextGuideStroke();
  };
  window.restartGuide = function() {
    gPaused = false;
    var btn = document.getElementById('btnGuidePause');
    if (btn) btn.textContent = '⏸ Dừng';
    startGuideLoop();
  };
  window.setGuideSpeed = function(sp) {
    gPauseMs = sp <= 0.6 ? 1200 : sp >= 2 ? 300 : 700;
    document.querySelectorAll('.ww-speed-btn').forEach(function(b) {
      b.classList.toggle('active', parseFloat(b.dataset.sp) === sp);
    });
  };

  // ---- Pen width ----
  window.setPenWidth = function(w) {
    wPenWidth = w;
    document.querySelectorAll('.ww-pen-btn').forEach(function(b) {
      b.classList.toggle('active', parseInt(b.dataset.w) === w);
    });
    // Rebuild practice panel with new width
    var word = wWords[wIdx];
    if (!word) return;
    stopGuide();
    var saveGHW = wGHW.slice(); // keep guide instances
    wHW = [];
    var chars = [...word.zh].filter(isCJK);
    var maxW = Math.max(window.innerWidth - 100, 200);
    var size = Math.min(200, Math.floor(maxW / chars.length));
    size = Math.max(size, 120);
    buildHWPanel('writeCanvases', chars, size, 'ww-svg', wHW, {
      showOutline  : true,
      showCharacter: true,
      strokeColor  : 'rgba(192,57,43,0.13)',
      outlineColor : '#f0d8d8',
      drawingColor : '#c0392b',
      drawingWidth : wPenWidth,
      strokeAnimationSpeed: 1
    }, null);
    wGHW = saveGHW;
    // Restart guide if it had data
    if (wGHW.length && wGHW[0].strokeCount > 0) startGuideLoop();
    setHintBox('🖊️ Đã đổi ngòi viết. Nhấn <strong>✍️ Bắt đầu viết</strong> để luyện.');
  };

  // ---- Practice: Quiz mode ----
  window.writeQuiz = function() {
    if (!wHW.length) return;
    wQuizDone = 0; wQuizTotal = wHW.length;
    setHintBox('✍️ Hãy vẽ từng nét theo thứ tự. Chữ mờ là gợi ý – viết đè lên theo hướng dẫn bên trái.');
    wHW.forEach(function(entry) {
      try {
        entry.hw.quiz({
          onMistake: function() {
            setHintBox('❌ Nét chưa đúng – nhìn ô <strong>Hướng dẫn</strong> để xem chiều nét rồi thử lại.');
          },
          onCorrectStroke: function(d) {
            setHintBox('✅ Nét ' + (d.strokeNum+1) + ' đúng rồi! Tiếp tục...');
          },
          onComplete: function(s) {
            wQuizDone++;
            if (wQuizDone >= wQuizTotal) {
              var m = s && s.totalMistakes != null ? s.totalMistakes : 0;
              setHintBox(m == 0
                ? '🎉 <strong>Hoàn hảo!</strong> Tất cả nét đều đúng! Chuyển từ tiếp theo hoặc thử lại.'
                : '🎊 <strong>Hoàn thành!</strong> Nhấn <strong>✍️ Bắt đầu viết</strong> để luyện lại chính xác hơn.');
            }
          }
        });
      } catch(ex) { console.warn('Quiz error', entry.ch, ex); }
    });
  };

  // ---- Clear practice canvas ----
  window.writeClear = function() {
    var word = wWords[wIdx];
    if (!word) return;
    stopGuide();
    var saveGHW = wGHW.slice();
    wHW = [];
    var chars = [...word.zh].filter(isCJK);
    var maxW = Math.max(window.innerWidth - 100, 200);
    var size = Math.min(200, Math.floor(maxW / chars.length));
    size = Math.max(size, 120);
    buildHWPanel('writeCanvases', chars, size, 'ww-svg', wHW, {
      showOutline  : true,
      showCharacter: true,
      strokeColor  : 'rgba(192,57,43,0.13)',
      outlineColor : '#f0d8d8',
      drawingColor : '#c0392b',
      drawingWidth : wPenWidth,
      strokeAnimationSpeed: 1
    }, null);
    wGHW = saveGHW;
    if (wGHW.length && wGHW[0].strokeCount > 0) startGuideLoop();
    setHintBox('🔄 Đã xóa. Nhấn <strong>✍️ Bắt đầu viết</strong> để luyện lại.');
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
    return (c>=0x4E00&&c<=0x9FFF)||(c>=0x3400&&c<=0x4DBF)||(c>=0xF900&&c<=0xFAFF);
  }
  function setHintBox(html) {
    var el = document.getElementById('writeHintBox');
    if (el) el.innerHTML = html;
  }
  function drawWriteGrid(svg, size) {
    var ns='http://www.w3.org/2000/svg', mid=size/2;
    var rect=document.createElementNS(ns,'rect');
    rect.setAttribute('x','1');rect.setAttribute('y','1');
    rect.setAttribute('width',size-2);rect.setAttribute('height',size-2);
    rect.setAttribute('fill','#fafafa');rect.setAttribute('stroke','#ccc');
    rect.setAttribute('stroke-width','1.5');rect.setAttribute('rx','4');
    svg.appendChild(rect);
    [[mid,0,mid,size],[0,mid,size,mid],[0,0,size,size],[size,0,0,size]].forEach(function(c){
      var l=document.createElementNS(ns,'line');
      l.setAttribute('x1',c[0]);l.setAttribute('y1',c[1]);
      l.setAttribute('x2',c[2]);l.setAttribute('y2',c[3]);
      l.setAttribute('stroke','#e5e5e5');l.setAttribute('stroke-width','0.8');
      l.setAttribute('stroke-dasharray','4,4');svg.appendChild(l);
    });
  }

  window.onWriteTabOpen = function() { initWriteTab(); };
})();
