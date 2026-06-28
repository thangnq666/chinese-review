// ===================================================
// LUYỆN VIẾT v4 – Calligraphy brush + stroke persistence
// ===================================================
(function() {
  var wWords    = [];
  var wIdx      = 0;
  var wGHW      = [];  // guide HW [{hw,ch,strokeCount}]
  var wPractice = [];  // practice entries [{canvas,ctx,strokes[]}]
  var wPenWidth = 10;  // base brush width

  // Guide state
  var gPaused  = false;
  var gTimer   = null;
  var gCharIdx = 0;
  var gStroke  = 0;
  var gPauseMs = 700;

  // ---- Init ----
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

  window.initWriteLesson = function() {
    var sel = document.getElementById('writeLessonSel');
    var idx = parseInt(sel.value);
    if (isNaN(idx)) { wWords = []; renderWordGrid(); return; }
    wWords = (VOCAB_DATA[idx].words || []).filter(function(w) {
      return w.zh && [...w.zh].some(isCJK);
    });
    wIdx = 0; renderWordGrid();
    if (wWords.length) selectWriteWord(0);
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
    document.getElementById('writeProgress').textContent = (i+1)+' / '+wWords.length;
    buildBothPanels(word.zh);
  };

  // ============================================================
  // BUILD PANELS
  // ============================================================
  function buildBothPanels(zh) {
    stopGuide();
    wGHW = []; wPractice = [];
    setHintBox('💡 Ô <strong>Hướng dẫn</strong> tự động chạy từng nét. Vẽ tự do vào ô bên phải – nét viết được lưu lại.');

    var chars = [...zh].filter(isCJK);
    if (!chars.length) {
      document.getElementById('writeCanvases').innerHTML = '<p class="ww-no-char">Không có chữ Hán.</p>';
      document.getElementById('guideCanvases').innerHTML = '';
      return;
    }

    var maxW = Math.max(window.innerWidth - 100, 200);
    var size = Math.min(200, Math.floor(maxW / chars.length));
    size = Math.max(size, 130);

    // Guide panel (HanziWriter SVG)
    buildGuidePanel(chars, size);

    // Practice panel (3-layer canvas)
    buildPracticePanel(chars, size);
  }

  // ---- Guide panel ----
  function buildGuidePanel(chars, size) {
    var wrap = document.getElementById('guideCanvases');
    wrap.innerHTML = '';
    var loaded = 0;

    chars.forEach(function(ch, ci) {
      var svgId = 'ww-guide-' + ci;
      var box = document.createElement('div');
      box.className = 'ww-char-box';

      var svgWrap = document.createElement('div');
      svgWrap.style.cssText = 'position:relative;width:'+size+'px;height:'+size+'px;';

      var svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('width', size); svg.setAttribute('height', size);
      svg.id = svgId;
      drawGridSVG(svg, size);
      svgWrap.appendChild(svg);

      var lbl = document.createElement('div');
      lbl.className = 'ww-char-label';
      lbl.textContent = ch;

      box.appendChild(svgWrap);
      box.appendChild(lbl);
      wrap.appendChild(box);

      var entry = {hw:null, ch:ch, strokeCount:0};
      wGHW.push(entry);

      try {
        entry.hw = HanziWriter.create(svgId, ch, {
          width:size, height:size, padding:Math.round(size*0.07),
          showOutline:true, showCharacter:false,
          strokeColor:'#1a73e8', outlineColor:'#bdd4f8',
          strokeAnimationSpeed:1.2,
          onLoadCharDataSuccess: function(data) {
            if (data && data.strokes) entry.strokeCount = data.strokes.length;
            loaded++;
            if (loaded >= chars.length) setTimeout(startGuideLoop, 100);
          },
          onLoadCharDataError: function() {
            loaded++;
            if (loaded >= chars.length) setTimeout(startGuideLoop, 100);
          }
        });
      } catch(e) { console.warn('Guide HW error', ch, e); loaded++; }
    });
  }

  // ---- Practice panel (canvas layers) ----
  function buildPracticePanel(chars, size) {
    var wrap = document.getElementById('writeCanvases');
    wrap.innerHTML = '';
    wPractice = [];

    chars.forEach(function(ch, ci) {
      var box = document.createElement('div');
      box.className = 'ww-char-box';

      // Outer container (relative, clipped)
      var outer = document.createElement('div');
      outer.className = 'pw-outer';
      outer.style.cssText = 'position:relative;width:'+size+'px;height:'+size+'px;border-radius:4px;overflow:hidden;';

      // Layer 1: grid canvas (background)
      var gridCanvas = document.createElement('canvas');
      gridCanvas.width = size; gridCanvas.height = size;
      gridCanvas.style.cssText = 'position:absolute;top:0;left:0;z-index:0;';
      drawGridCanvas(gridCanvas.getContext('2d'), size);

      // Layer 2: guide char SVG (faint character for tracing)
      var guideSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      guideSvg.setAttribute('width', size); guideSvg.setAttribute('height', size);
      guideSvg.id = 'pw-guide-'+ci;
      guideSvg.style.cssText = 'position:absolute;top:0;left:0;z-index:1;pointer-events:none;';

      // Layer 3: drawing canvas
      var drawCanvas = document.createElement('canvas');
      drawCanvas.width = size; drawCanvas.height = size;
      drawCanvas.style.cssText = 'position:absolute;top:0;left:0;z-index:2;cursor:crosshair;touch-action:none;';

      outer.appendChild(gridCanvas);
      outer.appendChild(guideSvg);
      outer.appendChild(drawCanvas);

      var lbl = document.createElement('div');
      lbl.className = 'ww-char-label'; lbl.textContent = ch;

      box.appendChild(outer);
      box.appendChild(lbl);
      wrap.appendChild(box);

      // HanziWriter for faint guide (on the guide SVG)
      try {
        HanziWriter.create('pw-guide-'+ci, ch, {
          width:size, height:size, padding:Math.round(size*0.07),
          showOutline:false, showCharacter:true,
          strokeColor:'rgba(192,57,43,0.13)',
          strokeAnimationSpeed:0
        });
      } catch(e) {}

      var ctx = drawCanvas.getContext('2d');
      var entry = { canvas: drawCanvas, ctx: ctx, strokes: [], ch: ch };
      wPractice.push(entry);
      setupBrushCanvas(drawCanvas, ctx, entry);
    });
  }

  // ============================================================
  // CALLIGRAPHY BRUSH DRAWING
  // ============================================================
  function setupBrushCanvas(canvas, ctx, entry) {
    var isDown = false;
    var current = [];

    function pos(e) {
      var r = canvas.getBoundingClientRect();
      var sx = canvas.width / r.width;
      var sy = canvas.height / r.height;
      // Normalize pressure: stylus gives 0-1, mouse gives 0 (treat as 0.5)
      var p = e.pressure > 0.01 ? e.pressure : 0.5;
      return { x:(e.clientX-r.left)*sx, y:(e.clientY-r.top)*sy, p:p };
    }

    canvas.addEventListener('pointerdown', function(e) {
      isDown = true;
      canvas.setPointerCapture(e.pointerId);
      current = [pos(e)];
      e.preventDefault();
    }, {passive:false});

    canvas.addEventListener('pointermove', function(e) {
      if (!isDown) return;
      current.push(pos(e));
      redrawCanvas(ctx, entry.strokes, current);
      e.preventDefault();
    }, {passive:false});

    function endStroke(e) {
      if (!isDown) return;
      isDown = false;
      if (current.length > 0) {
        entry.strokes.push(current.slice());
        redrawCanvas(ctx, entry.strokes, null);
      }
      current = [];
    }
    canvas.addEventListener('pointerup', endStroke);
    canvas.addEventListener('pointercancel', endStroke);
  }

  function redrawCanvas(ctx, strokes, currentStroke) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    strokes.forEach(function(s) { drawBrush(ctx, s); });
    if (currentStroke && currentStroke.length) drawBrush(ctx, currentStroke);
  }

  function drawBrush(ctx, pts) {
    if (!pts || !pts.length) return;
    var color = 'rgba(130,20,20,0.90)';
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    if (pts.length === 1) {
      ctx.beginPath();
      ctx.arc(pts[0].x, pts[0].y, wPenWidth*0.3, 0, Math.PI*2);
      ctx.fill();
      return;
    }

    var sm = smooth(pts);
    var n  = sm.length;

    for (var i = 1; i < n; i++) {
      var a = sm[i-1], b = sm[i];
      var dx = b.x-a.x, dy = b.y-a.y;
      var len = Math.sqrt(dx*dx+dy*dy);
      if (len < 0.3) continue;

      // Speed-based pressure (fast = thin, slow = thick)
      var speed = Math.min(len, 30) / 30;  // 0=slow, 1=fast
      var speedP = 1.0 - speed * 0.55;     // slow→thick

      // Taper at stroke start/end
      var taperStart = Math.min(1, i        / Math.max(3, n*0.12));
      var taperEnd   = Math.min(1, (n-1-i)  / Math.max(3, n*0.12));
      var taper      = Math.min(taperStart, taperEnd);

      // Combine pointer pressure with speed pressure
      var pa = a.p * speedP * (i===1 ? taper*0.4+0.1 : 1);
      var pb = b.p * speedP * (i===n-1 ? taper*0.4+0.1 : 1);

      var wa = Math.max(0.6, wPenWidth * pa);
      var wb = Math.max(0.6, wPenWidth * pb);

      // Perpendicular
      var nx = -dy/len, ny = dx/len;

      ctx.beginPath();
      ctx.moveTo(a.x+nx*wa/2, a.y+ny*wa/2);
      ctx.lineTo(b.x+nx*wb/2, b.y+ny*wb/2);
      ctx.lineTo(b.x-nx*wb/2, b.y-ny*wb/2);
      ctx.lineTo(a.x-nx*wa/2, a.y-ny*wa/2);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath(); ctx.arc(b.x, b.y, wb/2, 0, Math.PI*2); ctx.fill();
    }
    // Start cap
    var f = sm[0];
    ctx.beginPath(); ctx.arc(f.x, f.y, Math.max(0.5, wPenWidth*f.p*0.2), 0, Math.PI*2); ctx.fill();
  }

  function smooth(pts) {
    if (pts.length <= 2) return pts;
    var r = [pts[0]];
    for (var i = 1; i < pts.length-1; i++) {
      r.push({
        x: (pts[i-1].x + pts[i].x*2 + pts[i+1].x)/4,
        y: (pts[i-1].y + pts[i].y*2 + pts[i+1].y)/4,
        p: pts[i].p
      });
    }
    r.push(pts[pts.length-1]);
    return r;
  }

  // ============================================================
  // GUIDE ANIMATION
  // ============================================================
  function startGuideLoop() {
    stopGuide();
    if (!wGHW.length) return;
    gPaused=false; gCharIdx=0; gStroke=0;
    var btn=document.getElementById('btnGuidePause');
    if(btn) btn.textContent='⏸ Dừng';
    wGHW.forEach(function(e){try{e.hw.hideCharacter();}catch(ex){}});
    updateGuideLabel(0,0,0);
    gTimer=setTimeout(doNextGuideStroke,350);
  }

  function stopGuide() {
    if(gTimer){clearTimeout(gTimer);gTimer=null;}
    wGHW.forEach(function(e){try{e.hw.cancelQuiz&&e.hw.cancelQuiz();}catch(ex){}});
  }

  function doNextGuideStroke() {
    if(gPaused||!wGHW.length) return;
    if(gCharIdx>=wGHW.length) {
      updateGuideLabel(-1,-1,-1);
      gTimer=setTimeout(function(){
        wGHW.forEach(function(e){try{e.hw.hideCharacter();}catch(ex){}});
        gCharIdx=0;gStroke=0;
        gTimer=setTimeout(doNextGuideStroke,400);
      },1600);
      return;
    }
    var e=wGHW[gCharIdx], sc=e.strokeCount;
    if(!sc){gCharIdx++;gTimer=setTimeout(doNextGuideStroke,100);return;}
    if(gStroke>=sc){gCharIdx++;gStroke=0;gTimer=setTimeout(doNextGuideStroke,gPauseMs+200);return;}
    updateGuideLabel(gCharIdx,gStroke+1,sc);
    var sn=gStroke++;
    try{
      e.hw.animateStroke(sn,{onComplete:function(){
        if(!gPaused)gTimer=setTimeout(doNextGuideStroke,gPauseMs);
      }});
    }catch(ex){gTimer=setTimeout(doNextGuideStroke,200);}
  }

  function updateGuideLabel(ci,s,t) {
    var l=document.getElementById('guideStrokeLabel');
    if(!l) return;
    if(ci<0){l.textContent='✅ Lặp lại...';return;}
    var ch=wGHW[ci]?wGHW[ci].ch:'';
    l.textContent=t>0?'Chữ '+ch+' – Nét '+s+' / '+t:(ch?'Chữ '+ch+'...':'');
  }

  window.toggleGuidePause=function(){
    gPaused=!gPaused;
    var b=document.getElementById('btnGuidePause');
    if(b)b.textContent=gPaused?'▶ Tiếp':'⏸ Dừng';
    if(!gPaused)doNextGuideStroke();
  };
  window.restartGuide=function(){
    gPaused=false;
    var b=document.getElementById('btnGuidePause');
    if(b)b.textContent='⏸ Dừng';
    startGuideLoop();
  };
  window.setGuideSpeed=function(sp){
    gPauseMs=sp<=0.6?1200:sp>=2?300:700;
    document.querySelectorAll('.ww-speed-btn').forEach(function(b){
      b.classList.toggle('active',parseFloat(b.dataset.sp)===sp);
    });
  };

  // ---- Pen width ----
  window.setPenWidth=function(w){
    wPenWidth=w;
    document.querySelectorAll('.ww-pen-btn').forEach(function(b){
      b.classList.toggle('active',parseInt(b.dataset.w)===w);
    });
    setHintBox('🖊️ Đã đổi ngòi '+w+'px — vẽ tiếp hoặc nhấn 🔄 Xóa để bắt đầu lại.');
  };

  // ---- Clear practice ----
  window.writeClear=function(){
    wPractice.forEach(function(e){
      e.strokes=[];
      e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height);
    });
    setHintBox('🔄 Đã xóa – bắt đầu viết lại!');
  };

  // ---- Prev/Next ----
  window.writePrev=function(){
    if(!wWords.length)return;
    selectWriteWord((wIdx-1+wWords.length)%wWords.length);renderWordGrid();
  };
  window.writeNext=function(){
    if(!wWords.length)return;
    selectWriteWord((wIdx+1)%wWords.length);renderWordGrid();
  };

  // ============================================================
  // HELPERS
  // ============================================================
  function isCJK(ch){
    var c=ch.codePointAt(0);
    return(c>=0x4E00&&c<=0x9FFF)||(c>=0x3400&&c<=0x4DBF)||(c>=0xF900&&c<=0xFAFF);
  }
  function setHintBox(html){
    var el=document.getElementById('writeHintBox');if(el)el.innerHTML=html;
  }

  // Grid on SVG (for guide panel)
  function drawGridSVG(svg, size) {
    var ns='http://www.w3.org/2000/svg', mid=size/2;
    var rect=document.createElementNS(ns,'rect');
    rect.setAttribute('x','1');rect.setAttribute('y','1');
    rect.setAttribute('width',size-2);rect.setAttribute('height',size-2);
    rect.setAttribute('fill','#f5f8ff');rect.setAttribute('stroke','#b8c8e8');
    rect.setAttribute('stroke-width','1.5');rect.setAttribute('rx','4');
    svg.appendChild(rect);
    [[mid,0,mid,size],[0,mid,size,mid],[0,0,size,size],[size,0,0,size]].forEach(function(c){
      var l=document.createElementNS(ns,'line');
      l.setAttribute('x1',c[0]);l.setAttribute('y1',c[1]);
      l.setAttribute('x2',c[2]);l.setAttribute('y2',c[3]);
      l.setAttribute('stroke','#d0d8f0');l.setAttribute('stroke-width','0.8');
      l.setAttribute('stroke-dasharray','4,4');svg.appendChild(l);
    });
  }

  // Grid on 2D canvas (for practice panel background)
  function drawGridCanvas(ctx, size) {
    var mid=size/2;
    ctx.fillStyle='#fff8f8'; ctx.fillRect(0,0,size,size);
    ctx.strokeStyle='#e0c0c0'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.rect(1,1,size-2,size-2); ctx.stroke();
    ctx.strokeStyle='#f0dada'; ctx.lineWidth=0.8;
    ctx.setLineDash([4,4]);
    [[mid,0,mid,size],[0,mid,size,mid],[0,0,size,size],[size,0,0,size]].forEach(function(c){
      ctx.beginPath(); ctx.moveTo(c[0],c[1]); ctx.lineTo(c[2],c[3]); ctx.stroke();
    });
    ctx.setLineDash([]);
  }

  window.onWriteTabOpen=function(){initWriteTab();};
})();
