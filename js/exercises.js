// ===================================================
// BÀI TẬP — 6 dạng bài dùng chung một khung: chọn dạng → chọn buổi → làm bài → tổng kết
// mc: trắc nghiệm nghĩa · match: nối từ · listen: nghe & chọn · tone: chọn pinyin đúng
// fill: điền từ vào câu · order: sắp xếp câu
// ===================================================
const EX_MODES = {
  mc:     { name: 'Trắc nghiệm',   sub: 'Chọn nghĩa đúng của từ',         icon: 'target', color: 'c-sky' },
  match:  { name: 'Nối từ',        sub: 'Ghép chữ Hán với nghĩa',          icon: 'link',   color: 'c-purple' },
  listen: { name: 'Nghe & chọn',   sub: 'Nghe phát âm, chọn chữ Hán',      icon: 'phones', color: 'c-teal' },
  tone:   { name: 'Thanh điệu',    sub: 'Chọn pinyin có dấu đúng',         icon: 'wave',   color: 'c-orange' },
  fill:   { name: 'Điền từ',       sub: 'Chọn từ còn thiếu trong câu',     icon: 'pen',    color: 'c-green' },
  order:  { name: 'Sắp xếp câu',   sub: 'Xếp các từ thành câu đúng',       icon: 'shuffle',color: 'c-pink' }
};
const EX_MATCH_ROUND = 6;
let ex = { mode: 'mc', lesson: null, size: 10, dir: 'zh2vi' };
let exS = null;               // phiên đang làm
let _exTimer = null;

function exShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function _exQ(s) { return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function _exClean(zh) { return zh.replace(/（[^）]*）|\([^)]*\)/g, m => m.slice(1, -1)).split('/')[0].replace(/…/g, ''); }
function _exPlain(w) { return !/[\/…（(]/.test(w.zh); }

// ---------- dữ liệu ----------
function exWords(lesson) {
  const src = lesson === 'all' ? VOCAB_DATA.flatMap(l => l.words) : (VOCAB_DATA[lesson] ? VOCAB_DATA[lesson].words : []);
  const seen = new Set();
  return src.filter(w => { const k = w.zh + '|' + w.vi; if (seen.has(k)) return false; seen.add(k); return true; });
}
function exAllWords() { return exWords('all'); }

function _exDistractors(w, pool, n, key) {
  const k = key || (x => x.vi);
  const used = new Set([k(w), w.zh]);
  const same = exShuffle(pool.filter(x => x.type === w.type));
  const rest = exShuffle(pool.concat(exAllWords()));
  const out = [];
  for (const x of same.concat(rest)) {
    if (out.length >= n) break;
    if (used.has(k(x)) || used.has(x.zh)) continue;
    used.add(k(x)); used.add(x.zh); out.push(x);
  }
  return out;
}

// ---------- pinyin: tạo phương án sai bằng cách đổi thanh ----------
const _EX_TONES = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', ü: 'ǖǘǚǜ' };
const _EX_MARK = {};
Object.keys(_EX_TONES).forEach(b => [..._EX_TONES[b]].forEach((c, i) => { _EX_MARK[c] = [b, i + 1]; _EX_MARK[c.toUpperCase()] = [b.toUpperCase(), i + 1]; }));
function _exRetone(py, pos, tone) {
  const chars = [...py];
  const [base] = _EX_MARK[chars[pos]];
  const lower = base.toLowerCase();
  const mark = _EX_TONES[lower][tone - 1];
  chars[pos] = base === lower ? mark : mark.toUpperCase();
  return chars.join('');
}
function exToneOptions(py) {
  const marks = [];
  [...py].forEach((c, i) => { if (_EX_MARK[c]) marks.push({ i, t: _EX_MARK[c][1] }); });
  if (!marks.length) return null;
  const opts = new Set([py]);
  let guard = 0;
  while (opts.size < 4 && guard++ < 60) {
    let v = py;
    const k = marks.length > 1 && Math.random() < 0.45 ? 2 : 1;
    exShuffle(marks).slice(0, k).forEach(m => {
      const choices = [1, 2, 3, 4].filter(t => t !== m.t);
      v = _exRetone(v, m.i, choices[Math.floor(Math.random() * choices.length)]);
    });
    opts.add(v);
  }
  return opts.size >= 3 ? exShuffle([...opts]) : null;
}

// ---------- câu cho bài Điền từ & Sắp xếp ----------
function exSentences(lesson) {
  const words = exWords(lesson).filter(_exPlain);
  const out = [];
  words.forEach(w => (w.ex || []).forEach(e => { if (e.zh.includes(w.zh)) out.push({ zh: e.zh, py: e.py, vi: e.vi, word: w }); }));
  DIALOGUE_DATA.forEach(d => {
    if (lesson !== 'all' && d.lessonIdx !== lesson) return;
    d.lines.forEach(l => {
      const w = exShuffle(words).find(x => x.zh.length >= 1 && l.zh.includes(x.zh) && x.zh.length >= (x.zh.length > 1 ? 2 : 1));
      if (w) out.push({ zh: l.zh, py: l.py, vi: l.vi, word: w });
    });
  });
  return out;
}

let _exDict = null;
function _exSegment(zh) {
  if (!_exDict) {
    _exDict = new Set();
    VOCAB_DATA.forEach(l => l.words.forEach(w => {
      w.zh.replace(/（[^）]*）/g, '').split('/').forEach(p => { if (!p.includes('…') && p.length > 1) _exDict.add(p); });
    }));
    ['我们', '你们', '他们', '她们', '这个', '那个', '一下', '一起', '不是', '没有', '什么', '怎么', '哪儿', '这儿', '那儿', '一点儿', '有点儿', '一会儿', '可以', '所以', '但是', '因为', '还是', '已经', '的时候'].forEach(x => _exDict.add(x));
  }
  const core = zh.replace(/[。！？]+$/, '');
  const tail = zh.slice(core.length);
  const segs = [];
  let i = 0;
  while (i < core.length) {
    const ch = core[i];
    if (/[，、：；“”"]/.test(ch)) { if (segs.length) segs[segs.length - 1] += ch; i++; continue; }
    let len = 1;
    for (let L = Math.min(4, core.length - i); L > 1; L--) { if (_exDict.has(core.substr(i, L))) { len = L; break; } }
    let piece = core.substr(i, len);
    // gắn trợ từ cuối vào từ đứng trước cho ô gọn hơn
    if (len === 1 && /[了吗呢吧的啊]/.test(piece) && segs.length && i + 1 >= core.length) { segs[segs.length - 1] += piece; i++; continue; }
    segs.push(piece); i += len;
  }
  return { segs, tail };
}

// ---------- khung giao diện ----------
function renderExercises() {
  const grid = document.getElementById('exModes');
  if (!grid || grid.dataset.loaded) return;
  grid.dataset.loaded = '1';
  try { Object.assign(ex, JSON.parse(localStorage.getItem('zh_ex_v2') || '{}')); } catch (e) {}
  if (!EX_MODES[ex.mode]) ex.mode = 'mc';
  grid.innerHTML = Object.keys(EX_MODES).map(k => {
    const m = EX_MODES[k];
    return '<button class="ex-mode ' + m.color + '" data-mode="' + k + '" onclick="setExMode(\'' + k + '\')" aria-pressed="false">' +
      '<span class="ex-mode-ic">' + icon(m.icon, 22) + '</span>' +
      '<span class="ex-mode-text"><b>' + m.name + '</b><small>' + m.sub + '</small></span></button>';
  }).join('');
  const sel = document.getElementById('exLesson');
  let h = '<optgroup label="Theo buổi (mới nhất trước)">';
  for (let i = VOCAB_DATA.length - 1; i >= 0; i--) {
    const t = parseLessonTitle(VOCAB_DATA[i].lesson);
    h += '<option value="' + i + '">' + escHtml(t.num + ' · ' + t.short + ' (' + VOCAB_DATA[i].words.length + ' từ)') + '</option>';
  }
  h += '</optgroup><optgroup label="Gộp"><option value="all">Tất cả ' + VOCAB_DATA.length + ' buổi</option></optgroup>';
  sel.innerHTML = h;
  if (ex.lesson === null || (ex.lesson !== 'all' && !VOCAB_DATA[ex.lesson])) ex.lesson = VOCAB_DATA.length - 1;
  sel.value = String(ex.lesson);
  document.getElementById('exSize').value = String(ex.size);
  document.getElementById('exDir').value = ex.dir;
  _exSyncModeUI();
  document.addEventListener('keydown', _exKey);
}

function initExercises() { startExercise(); }

function _exSave() { try { localStorage.setItem('zh_ex_v2', JSON.stringify(ex)); } catch (e) {} }

function _exSyncModeUI() {
  document.querySelectorAll('.ex-mode').forEach(b => {
    const on = b.dataset.mode === ex.mode;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on);
  });
  document.getElementById('exDirField').hidden = !(ex.mode === 'mc');
  document.getElementById('exSizeField').hidden = ex.mode === 'match';
}

function setExMode(m) {
  ex.mode = m; _exSave(); _exSyncModeUI(); startExercise();
  if (window.innerWidth <= 640) { const st = document.getElementById('exStage'); if (st) st.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}
function setExOption(key, v) {
  ex[key] = key === 'size' ? +v : key === 'lesson' ? (v === 'all' ? 'all' : +v) : v;
  _exSave(); startExercise();
}

// ---------- tạo phiên ----------
function startExercise(retryItems) {
  clearInterval(_exTimer);
  const stage = document.getElementById('exStage');
  if (!stage) return;
  stage.classList.remove('answered');
  const pool = exWords(ex.lesson);
  let items = [];
  const n = ex.size;
  if (ex.mode === 'mc') {
    const src = retryItems || exShuffle(pool).slice(0, n);
    items = src.map(w => ({ w, opts: exShuffle([w].concat(_exDistractors(w, pool, 3, ex.dir === 'zh2vi' ? (x => x.vi) : (x => x.zh)))) }));
  } else if (ex.mode === 'listen') {
    const src = retryItems || exShuffle(pool.filter(_exPlain)).slice(0, n);
    items = src.map(w => ({ w, opts: exShuffle([w].concat(_exDistractors(w, pool.filter(_exPlain), 3, x => x.zh))) }));
  } else if (ex.mode === 'tone') {
    const src = retryItems || exShuffle(pool.filter(w => exToneOptions(w.py))).slice(0, n);
    items = src.map(w => ({ w, opts: exToneOptions(w.py) })).filter(x => x.opts);
  } else if (ex.mode === 'fill') {
    const sents = retryItems || exShuffle(exSentences(ex.lesson)).slice(0, n);
    items = sents.map(s => {
      const others = exShuffle(pool.filter(_exPlain).filter(x => x.zh !== s.word.zh && !s.zh.includes(x.zh)));
      const same = others.filter(x => x.type === s.word.type);
      const ds = [];
      same.concat(others).forEach(x => { if (ds.length < 3 && !ds.some(d => d.zh === x.zh)) ds.push(x); });
      return { s, w: s.word, opts: exShuffle([s.word].concat(ds)) };
    });
  } else if (ex.mode === 'order') {
    const cand = retryItems || exShuffle(exSentences(ex.lesson)).map(s => Object.assign({}, s, _exSegment(s.zh))).filter(s => s.segs.length >= 3 && s.segs.length <= 8);
    const seen = new Set();
    items = cand.filter(s => !seen.has(s.zh) && seen.add(s.zh)).slice(0, n).map(s => {
      let order = exShuffle(s.segs.map((t, i) => i));
      if (order.every((v, i) => v === i)) order = order.reverse();
      return { s, order, picked: [] };
    });
  } else if (ex.mode === 'match') {
    const src = retryItems || exShuffle(pool).slice(0, EX_MATCH_ROUND * 2 <= pool.length ? EX_MATCH_ROUND * 2 : pool.length);
    items = src;
  }
  if (!items.length || (ex.mode === 'match' && items.length < 3) || (ex.mode !== 'match' && items.length < 1)) {
    stage.innerHTML = '<div class="empty-state">Buổi này chưa đủ dữ liệu cho dạng bài này. Hãy chọn buổi khác hoặc "Tất cả".</div>';
    exS = null; return;
  }
  exS = { mode: ex.mode, items, idx: 0, score: 0, streak: 0, best: 0, wrong: [], answered: false, start: Date.now() };
  if (ex.mode === 'match') _exMatchStart(); else _exRender();
}

// ---------- thanh tiến độ chung ----------
function _exTopbar(total, done) {
  const pct = Math.round(done / total * 100);
  return '<div class="ex-top">' +
    '<span class="ex-step">Câu <b>' + Math.min(exS.idx + 1, total) + '</b>/' + total + '</span>' +
    '<div class="ex-progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + done + '"><span style="width:' + pct + '%"></span></div>' +
    '<span class="ex-pill ok">' + icon('check', 14) + exS.score + '</span>' +
    '<span class="ex-pill fire" title="Chuỗi đúng liên tiếp">🔥 ' + exS.streak + '</span>' +
  '</div>';
}

function _exSpeakBtn(zh, big) {
  return '<button class="ex-spk' + (big ? ' big' : '') + '" onclick="speak(\'' + _exQ(_exClean(zh)) + '\')" aria-label="Nghe phát âm">' + icon('speaker', big ? 26 : 18) + '</button>';
}

function _exRender() {
  const stage = document.getElementById('exStage');
  const t = exS.items.length;
  if (exS.idx >= t) return _exSummary();
  const it = exS.items[exS.idx];
  exS.answered = false;
  stage.classList.remove('answered');
  let prompt = '', opts = '';
  const keys = ['1', '2', '3', '4'];
  if (exS.mode === 'mc') {
    const w = it.w;
    if (ex.dir === 'zh2vi') {
      prompt = '<div class="ex-ask">Nghĩa của từ này là gì?</div>' +
        '<div class="ex-word"><span class="ex-zh">' + escHtml(w.zh) + '</span>' + _exSpeakBtn(w.zh) + '</div>' +
        '<div class="ex-py">' + toneHtml(w.py) + '</div><span class="ex-type">' + escHtml(w.type || '') + '</span>';
      opts = it.opts.map((o, i) => '<button class="ex-opt" data-ok="' + (o === w) + '" onclick="exAnswer(' + i + ')"><kbd>' + keys[i] + '</kbd><span>' + escHtml(o.vi) + '</span></button>').join('');
    } else {
      prompt = '<div class="ex-ask">Chữ Hán nào có nghĩa là</div><div class="ex-vi-big">' + escHtml(w.vi) + '</div><span class="ex-type">' + escHtml(w.type || '') + '</span>';
      opts = it.opts.map((o, i) => '<button class="ex-opt zh" data-ok="' + (o === w) + '" onclick="exAnswer(' + i + ')"><kbd>' + keys[i] + '</kbd><span class="ex-opt-zh">' + escHtml(o.zh) + '</span><small class="ex-reveal">' + toneHtml(o.py) + '</small></button>').join('');
    }
  } else if (exS.mode === 'listen') {
    prompt = '<div class="ex-ask">Nghe và chọn chữ Hán đúng</div>' +
      '<div class="ex-listen"><button class="ex-play" id="exPlay" onclick="exPlay(false)" aria-label="Phát lại">' + icon('speaker', 34) + '</button>' +
      '<button class="btn btn-ghost btn-sm" onclick="exPlay(true)">Nghe chậm</button></div>';
    opts = it.opts.map((o, i) => '<button class="ex-opt zh" data-ok="' + (o === it.w) + '" onclick="exAnswer(' + i + ')"><kbd>' + keys[i] + '</kbd><span class="ex-opt-zh">' + escHtml(o.zh) + '</span><small class="ex-reveal">' + toneHtml(o.py) + ' · ' + escHtml(o.vi) + '</small></button>').join('');
  } else if (exS.mode === 'tone') {
    const w = it.w;
    prompt = '<div class="ex-ask">Chọn pinyin đúng (chú ý dấu thanh)</div>' +
      '<div class="ex-word"><span class="ex-zh">' + escHtml(w.zh) + '</span>' + _exSpeakBtn(w.zh) + '</div><div class="ex-mean">' + escHtml(w.vi) + '</div>';
    opts = it.opts.map((o, i) => '<button class="ex-opt py" data-ok="' + (o === w.py) + '" onclick="exAnswer(' + i + ')"><kbd>' + keys[i] + '</kbd><span class="ex-opt-py">' + escHtml(o) + '</span></button>').join('');
  } else if (exS.mode === 'fill') {
    const s = it.s, at = s.zh.indexOf(it.w.zh);
    prompt = '<div class="ex-ask">Chọn từ còn thiếu</div>' +
      '<div class="ex-sentence">' + escHtml(s.zh.slice(0, at)) + '<span class="ex-blank" id="exBlank">' + '＿'.repeat(Math.max(2, it.w.zh.length)) + '</span>' + escHtml(s.zh.slice(at + it.w.zh.length)) + '</div>' +
      '<div class="ex-mean">' + escHtml(s.vi) + '</div><div class="ex-py ex-reveal-py" id="exFullPy">' + toneHtml(s.py) + '</div>';
    opts = it.opts.map((o, i) => '<button class="ex-opt zh" data-ok="' + (o === it.w) + '" onclick="exAnswer(' + i + ')"><kbd>' + keys[i] + '</kbd><span class="ex-opt-zh">' + escHtml(o.zh) + '</span><small class="ex-reveal">' + toneHtml(o.py) + '</small></button>').join('');
  } else if (exS.mode === 'order') {
    return _exOrderRender();
  }
  stage.innerHTML = _exTopbar(t, exS.idx) +
    '<div class="ex-card ' + EX_MODES[exS.mode].color + '"><div class="ex-prompt">' + prompt + '</div>' +
    '<div class="ex-opts' + (exS.mode === 'mc' && ex.dir === 'zh2vi' ? ' vi' : '') + '">' + opts + '</div>' +
    '<div class="ex-feedback" id="exFb" hidden></div></div>';
  if (exS.mode === 'listen') setTimeout(() => exPlay(false), 250);
}

function exPlay(slow) {
  if (!exS || exS.mode !== 'listen') return;
  const w = exS.items[exS.idx].w;
  const b = document.getElementById('exPlay');
  if (b) { b.classList.add('playing'); setTimeout(() => b.classList.remove('playing'), 900); }
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(_exClean(w.zh));
  u.lang = 'zh-CN';
  u.rate = slow ? 0.55 : getRate();
  if (typeof ttsVoice !== 'undefined' && ttsVoice) u.voice = ttsVoice;
  window.speechSynthesis.speak(u);
}

function exAnswer(i) {
  if (!exS || exS.answered) return;
  exS.answered = true;
  const it = exS.items[exS.idx];
  const btns = document.querySelectorAll('#exStage .ex-opt');
  const chosen = btns[i];
  const ok = chosen && chosen.dataset.ok === 'true';
  btns.forEach(b => { b.disabled = true; if (b.dataset.ok === 'true') b.classList.add('is-right'); });
  document.getElementById('exStage').classList.add('answered');
  if (ok) { exS.score++; exS.streak++; exS.best = Math.max(exS.best, exS.streak); }
  else { chosen.classList.add('is-wrong'); exS.streak = 0; exS.wrong.push(it); }
  const w = it.w;
  let detail = '';
  if (exS.mode === 'fill') {
    const blank = document.getElementById('exBlank');
    if (blank) { blank.textContent = w.zh; blank.classList.add(ok ? 'ok' : 'no'); }
    document.getElementById('exFullPy').classList.add('show');
    detail = '<span class="ex-fb-zh">' + escHtml(w.zh) + '</span> ' + toneHtml(w.py) + ' — ' + escHtml(w.vi);
    speak(it.s.zh);
  } else {
    detail = '<span class="ex-fb-zh">' + escHtml(w.zh) + '</span> ' + toneHtml(w.py) + ' — ' + escHtml(w.vi);
    if (exS.mode !== 'listen' || !ok) speak(_exClean(w.zh));
  }
  const fb = document.getElementById('exFb');
  fb.hidden = false;
  fb.className = 'ex-feedback ' + (ok ? 'ok' : 'no');
  fb.innerHTML = '<div class="ex-fb-text"><b>' + (ok ? (exS.streak >= 3 ? 'Chính xác! Chuỗi ' + exS.streak + ' câu đúng 🔥' : 'Chính xác!') : 'Chưa đúng — đáp án:') + '</b><div>' + detail + '</div></div>' +
    '<button class="btn ' + (ok ? 'btn-green' : 'btn-dark') + '" id="exNext" onclick="exNext()">' + (exS.idx + 1 >= exS.items.length ? 'Xem kết quả' : 'Câu tiếp') + icon('right', 16) + '</button>';
  const top = document.querySelector('#exStage .ex-top');
  if (top) top.outerHTML = _exTopbar(exS.items.length, exS.idx + 1);
  document.getElementById('exNext').focus({ preventScroll: true });
}

function exNext() {
  if (!exS) return;
  exS.idx++;
  document.getElementById('exStage').classList.remove('answered');
  _exRender();
  const st = document.getElementById('exStage');
  if (st && st.getBoundingClientRect().top < 0) st.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function _exKey(e) {
  const sec = document.getElementById('s-exercise');
  if (!exS || !sec || !sec.classList.contains('active')) return;
  if (/INPUT|SELECT|TEXTAREA/.test((e.target || {}).tagName || '')) return;
  if (exS.mode === 'match') return;
  if (exS.mode === 'order') {
    if (e.key === 'Enter') { e.preventDefault(); exS.answered ? exNext() : exOrderCheck(); }
    return;
  }
  if (!exS.answered && /^[1-4]$/.test(e.key)) { e.preventDefault(); exAnswer(+e.key - 1); }
  else if (exS.answered && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); exNext(); }
}

// ---------- Sắp xếp câu ----------
function _exOrderRender() {
  const stage = document.getElementById('exStage');
  const it = exS.items[exS.idx];
  exS.answered = false;
  const picked = it.picked;
  const answer = picked.length
    ? picked.map((si, k) => '<button class="ex-tile in" onclick="exOrderUnpick(' + k + ')">' + escHtml(it.s.segs[si]) + '</button>').join('')
    : '<span class="ex-drop-hint">Nhấn vào các ô bên dưới theo đúng thứ tự</span>';
  const bank = it.order.map(si => {
    const used = picked.includes(si);
    return '<button class="ex-tile' + (used ? ' used' : '') + '" ' + (used ? 'disabled' : '') + ' onclick="exOrderPick(' + si + ')">' + escHtml(it.s.segs[si]) + '</button>';
  }).join('');
  stage.innerHTML = _exTopbar(exS.items.length, exS.idx) +
    '<div class="ex-card ' + EX_MODES.order.color + '"><div class="ex-prompt">' +
      '<div class="ex-ask">Sắp xếp thành câu có nghĩa:</div><div class="ex-vi-big sm">' + escHtml(it.s.vi) + '</div></div>' +
      '<div class="ex-answer" id="exAnswer">' + answer + '<span class="ex-tail">' + escHtml(it.s.tail || '') + '</span></div>' +
      '<div class="ex-bank">' + bank + '</div>' +
      '<div class="ex-order-actions">' +
        '<button class="btn btn-ghost" onclick="exOrderReset()"' + (picked.length ? '' : ' disabled') + '>' + icon('redo', 16) + 'Xếp lại</button>' +
        '<button class="btn btn-dark" onclick="exOrderCheck()"' + (picked.length === it.s.segs.length ? '' : ' disabled') + '>' + icon('check', 16) + 'Kiểm tra</button>' +
      '</div>' +
      '<div class="ex-feedback" id="exFb" hidden></div></div>';
}
function exOrderPick(si) { if (exS.answered) return; const it = exS.items[exS.idx]; if (!it.picked.includes(si)) { it.picked.push(si); _exOrderRender(); } }
function exOrderUnpick(k) { if (exS.answered) return; exS.items[exS.idx].picked.splice(k, 1); _exOrderRender(); }
function exOrderReset() { if (exS.answered) return; exS.items[exS.idx].picked = []; _exOrderRender(); }
function exOrderCheck() {
  const it = exS.items[exS.idx];
  if (exS.answered || it.picked.length !== it.s.segs.length) return;
  exS.answered = true;
  const built = it.picked.map(i => it.s.segs[i]).join('');
  const ok = built === it.s.segs.join('');
  if (ok) { exS.score++; exS.streak++; exS.best = Math.max(exS.best, exS.streak); } else { exS.streak = 0; exS.wrong.push(it); }
  document.getElementById('exAnswer').classList.add(ok ? 'ok' : 'no');
  document.querySelectorAll('#exStage .ex-tile, #exStage .ex-order-actions .btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('exFb');
  fb.hidden = false;
  fb.className = 'ex-feedback ' + (ok ? 'ok' : 'no');
  fb.innerHTML = '<div class="ex-fb-text"><b>' + (ok ? 'Chính xác!' : 'Chưa đúng — câu đúng là:') + '</b>' +
    '<div><span class="ex-fb-zh">' + escHtml(it.s.zh) + '</span></div><div>' + toneHtml(it.s.py) + '</div></div>' +
    '<button class="btn ' + (ok ? 'btn-green' : 'btn-dark') + '" id="exNext" onclick="exNext()">' + (exS.idx + 1 >= exS.items.length ? 'Xem kết quả' : 'Câu tiếp') + icon('right', 16) + '</button>';
  const top = document.querySelector('#exStage .ex-top');
  if (top) top.outerHTML = _exTopbar(exS.items.length, exS.idx + 1);
  speak(it.s.zh);
}

// ---------- Nối từ ----------
function _exMatchStart() {
  exS.round = 0;
  exS.rounds = Math.ceil(exS.items.length / EX_MATCH_ROUND);
  exS.mistakes = 0;
  exS.pairsDone = 0;
  _exMatchRound();
  clearInterval(_exTimer);
  _exTimer = setInterval(() => {
    const el = document.getElementById('exClock');
    if (!el || !exS || exS.mode !== 'match') return clearInterval(_exTimer);
    el.textContent = _exFmt(Date.now() - exS.start);
  }, 1000);
}
function _exFmt(ms) { const s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

function _exMatchRound() {
  const stage = document.getElementById('exStage');
  const words = exS.items.slice(exS.round * EX_MATCH_ROUND, (exS.round + 1) * EX_MATCH_ROUND);
  exS.cur = words; exS.sel = null; exS.matched = 0;
  const left = exShuffle(words.map((w, i) => i)), right = exShuffle(words.map((w, i) => i));
  stage.innerHTML =
    '<div class="ex-top match">' +
      '<span class="ex-step">Vòng <b>' + (exS.round + 1) + '</b>/' + exS.rounds + '</span>' +
      '<div class="ex-progress"><span id="exMatchBar" style="width:' + Math.round(exS.pairsDone / exS.items.length * 100) + '%"></span></div>' +
      '<span class="ex-pill ok" title="Cặp đã nối">' + icon('link', 14) + '<b id="exPairs">' + exS.pairsDone + '</b>/' + exS.items.length + '</span>' +
      '<span class="ex-pill bad" title="Số lần nối sai">' + icon('close', 14) + '<b id="exMiss">' + exS.mistakes + '</b></span>' +
      '<span class="ex-pill clock" title="Thời gian">⏱ <b id="exClock">' + _exFmt(Date.now() - exS.start) + '</b></span>' +
    '</div>' +
    '<div class="ex-card ' + EX_MODES.match.color + ' ex-match-card">' +
      '<p class="ex-match-help">Chọn một chữ Hán, rồi chọn nghĩa tương ứng. Cặp đúng sẽ được khóa lại.</p>' +
      '<div class="ex-match">' +
        '<div class="ex-col"><div class="ex-col-h">Chữ Hán</div>' + left.map(i =>
          '<button class="ex-tile2 zh" data-k="' + i + '" data-side="L" onclick="exMatchPick(this)">' +
            '<span class="mt-zh">' + escHtml(words[i].zh) + '</span><span class="mt-py">' + toneHtml(words[i].py) + '</span><span class="mt-badge"></span></button>').join('') + '</div>' +
        '<div class="ex-col"><div class="ex-col-h">Nghĩa tiếng Việt</div>' + right.map(i =>
          '<button class="ex-tile2 vi" data-k="' + i + '" data-side="R" onclick="exMatchPick(this)"><span class="mt-vi">' + escHtml(words[i].vi) + '</span><span class="mt-badge"></span></button>').join('') + '</div>' +
      '</div>' +
      '<div class="ex-feedback" id="exFb" hidden></div>' +
    '</div>';
}

function exMatchPick(btn) {
  if (!exS || btn.classList.contains('done')) return;
  if (btn.dataset.side === 'L') speak(_exClean(exS.cur[+btn.dataset.k].zh));
  if (!exS.sel || exS.sel.dataset.side === btn.dataset.side) {
    if (exS.sel) exS.sel.classList.remove('sel');
    exS.sel = btn; btn.classList.add('sel'); return;
  }
  const a = exS.sel, b = btn;
  a.classList.remove('sel'); exS.sel = null;
  if (a.dataset.k === b.dataset.k) {
    exS.matched++; exS.pairsDone++;
    const n = exS.pairsDone;
    [a, b].forEach(x => { x.classList.add('done'); x.disabled = true; x.querySelector('.mt-badge').innerHTML = icon('check', 13); x.style.setProperty('--pair', 'var(--pair-' + ((n - 1) % 6) + ')'); });
    document.getElementById('exPairs').textContent = exS.pairsDone;
    document.getElementById('exMatchBar').style.width = Math.round(exS.pairsDone / exS.items.length * 100) + '%';
    if (exS.matched === exS.cur.length) {
      const last = exS.round + 1 >= exS.rounds;
      const fb = document.getElementById('exFb');
      fb.hidden = false; fb.className = 'ex-feedback ok';
      fb.innerHTML = '<div class="ex-fb-text"><b>Hoàn thành vòng ' + (exS.round + 1) + '!</b><div>Bạn đã nối đúng ' + exS.cur.length + ' cặp.</div></div>' +
        '<button class="btn btn-green" onclick="' + (last ? '_exSummary()' : 'exMatchNextRound()') + '">' + (last ? 'Xem kết quả' : 'Vòng tiếp') + icon('right', 16) + '</button>';
    }
  } else {
    exS.mistakes++;
    const w = exS.cur[+a.dataset.k];
    if (!exS.wrong.includes(w)) exS.wrong.push(w);
    document.getElementById('exMiss').textContent = exS.mistakes;
    [a, b].forEach(x => { x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 450); });
  }
}
function exMatchNextRound() { exS.round++; _exMatchRound(); }

// ---------- Tổng kết ----------
function _exSummary() {
  clearInterval(_exTimer);
  const stage = document.getElementById('exStage');
  const isMatch = exS.mode === 'match';
  const total = isMatch ? exS.items.length : exS.items.length;
  const right = isMatch ? Math.max(0, total - exS.wrong.length) : exS.score;
  const pct = Math.round(right / total * 100);
  const R = 52, C = 2 * Math.PI * R;
  const msg = pct === 100 ? 'Xuất sắc! Không sai câu nào.' : pct >= 80 ? 'Rất tốt! Ôn lại vài từ dưới đây là chắc.' : pct >= 50 ? 'Khá ổn — luyện thêm các từ sai nhé.' : 'Cần ôn thêm — làm lại các câu sai ngay bây giờ.';
  const wrongWords = exS.wrong.map(x => x.w || (x.s ? x.s.word : x)).filter(Boolean);
  const uniq = []; wrongWords.forEach(w => { if (!uniq.includes(w)) uniq.push(w); });
  stage.innerHTML =
    '<div class="ex-card ex-result ' + EX_MODES[exS.mode].color + '">' +
      '<div class="ex-ring"><svg viewBox="0 0 120 120" width="132" height="132" aria-hidden="true"><circle cx="60" cy="60" r="' + R + '" class="ring-bg"/><circle cx="60" cy="60" r="' + R + '" class="ring-fg" style="stroke-dasharray:' + C + ';stroke-dashoffset:' + (C * (1 - pct / 100)) + '"/></svg>' +
        '<div class="ex-ring-txt"><b>' + pct + '%</b><small>' + right + '/' + total + '</small></div></div>' +
      '<div class="ex-result-main"><h3>' + EX_MODES[exS.mode].name + ' — hoàn thành</h3><p>' + msg + '</p>' +
        '<div class="ex-result-stats">' +
          '<span class="stat"><b>' + _exFmt(Date.now() - exS.start) + '</b><small>Thời gian</small></span>' +
          (isMatch ? '<span class="stat stat-red"><b>' + exS.mistakes + '</b><small>Lần nối sai</small></span>' : '<span class="stat stat-green"><b>' + exS.best + '</b><small>Chuỗi đúng dài nhất</small></span>') +
          '<span class="stat"><b>' + uniq.length + '</b><small>Từ cần ôn</small></span>' +
        '</div>' +
        '<div class="ex-result-actions">' +
          (exS.wrong.length ? '<button class="btn btn-dark" onclick="exRetryWrong()">' + icon('redo', 16) + 'Làm lại câu sai</button>' : '') +
          '<button class="btn btn-ghost" onclick="startExercise()">' + icon('shuffle', 16) + 'Bài mới</button>' +
        '</div></div>' +
      (uniq.length ? '<div class="ex-review"><div class="ex-review-h">Từ cần ôn lại</div>' + uniq.map(w =>
        '<button class="ex-review-item" onclick="speak(\'' + _exQ(_exClean(w.zh)) + '\')"><span class="rv-zh">' + escHtml(w.zh) + '</span><span class="rv-py">' + toneHtml(w.py) + '</span><span class="rv-vi">' + escHtml(w.vi) + '</span>' + icon('speaker', 15) + '</button>').join('') + '</div>' : '') +
    '</div>';
}

function exRetryWrong() {
  if (!exS || !exS.wrong.length) return;
  const w = exS.wrong;
  if (exS.mode === 'match') return startExercise(w.length >= 3 ? w : w.concat(exShuffle(exWords(ex.lesson).filter(x => !w.includes(x))).slice(0, 3 - w.length)));
  if (exS.mode === 'fill') return startExercise(w.map(x => x.s));
  if (exS.mode === 'order') return startExercise(w.map(x => x.s));
  startExercise(w.map(x => x.w));
}
