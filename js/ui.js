// ===================================================
// UI HELPERS — icon, màu thanh điệu, loại từ, menu, tốc độ đọc
// ===================================================

// ---- Bộ icon nét (inline SVG, kế thừa màu chữ) ----
const UI_ICONS = {
  wave:    '<path d="M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2"/>',
  book:    '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z"/><path d="M4 19a2 2 0 0 1 2-2h13"/>',
  layers:  '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
  quote:   '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9h8M8 12h5"/>',
  chat:    '<path d="M3 5h12v8H7l-4 3V5z"/><path d="M9 16h8l4 3v-9h-3"/>',
  read:    '<path d="M2 6c3-1.5 6-1.5 10 1v13c-4-2.5-7-2.5-10-1z"/><path d="M22 6c-3-1.5-6-1.5-10 1v13c4-2.5 7-2.5 10-1z"/>',
  cards:   '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  target:  '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  mic:     '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  pen:     '<path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>',
  bulb:    '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  spark:   '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  speaker: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',
  search:  '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  grid:    '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
  play:    '<path d="M7 5l12 7-12 7z" fill="currentColor" stroke="none"/>',
  phones:  '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><rect x="3" y="15" width="4" height="6" rx="1.5"/><rect x="17" y="15" width="4" height="6" rx="1.5"/>',
  shuffle: '<path d="M4 7h3c5 0 5 10 10 10h3M4 17h3c1.5 0 2.5-.8 3.4-2M14 9c.8-1.2 1.8-2 3-2h3M18 4l3 3-3 3M18 14l3 3-3 3"/>',
  check:   '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  redo:    '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  flip:    '<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>',
  left:    '<path d="M15 18l-6-6 6-6"/>',
  right:   '<path d="M9 18l6-6-6-6"/>',
  close:   '<path d="M6 6l12 12M18 6L6 18"/>',
  tag:     '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.3"/>',
  hash:    '<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/>',
  link:    '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  bolt:    '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
  user:    '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  dots:    '<circle cx="12" cy="12" r="9"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>'
};

function icon(name, size) {
  const s = size || 18;
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (UI_ICONS[name] || '') + '</svg>';
}

// Điền icon cho mọi phần tử có data-icon
function hydrateIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(el => {
    if (el.dataset.iconDone) return;
    el.dataset.iconDone = '1';
    el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon, +(el.dataset.iconSize || 18)));
  });
}

// ---- Màu thanh điệu & tách âm tiết pinyin ----
const TONE_COLORS = { 1: '#1D5FBF', 2: '#17784A', 3: '#A9500B', 4: '#C73E26', 0: '#5B616E' };
const _V = 'aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜAEIOUÜĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙ';
const _SYL_RE = new RegExp('(?:[zcsZCS]h|[bpmfdtnlgkhjqxzcsrwyBPMFDTNLGKHJQXZCSRWY])?[' + _V + ']+(?:ng(?![' + _V + '])|n(?![' + _V + '])|r(?![' + _V + ']))?', 'g');

function toneOf(s) {
  if (/[āēīōūǖĀĒĪŌŪ]/.test(s)) return 1;
  if (/[áéíóúǘÁÉÍÓÚ]/.test(s)) return 2;
  if (/[ǎěǐǒǔǚǍĚǏǑǓ]/.test(s)) return 3;
  if (/[àèìòùǜÀÈÌÒÙ]/.test(s)) return 4;
  return 0;
}

function escHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// Trả về HTML pinyin, mỗi âm tiết một màu theo thanh điệu
function toneHtml(py) {
  if (!py) return '';
  let out = '', last = 0;
  py.replace(_SYL_RE, (m, idx) => {
    if (idx > last) out += escHtml(py.slice(last, idx));
    out += '<span class="t' + toneOf(m) + '">' + escHtml(m) + '</span>';
    last = idx + m.length;
    return m;
  });
  if (last < py.length) out += escHtml(py.slice(last));
  return out;
}

// ---- Loại từ: màu + icon ----
const TYPE_STYLE = {
  'Danh từ':  { cls: 'ty-n',   icon: 'tag' },
  'Động từ':  { cls: 'ty-v',   icon: 'bolt' },
  'Tính từ':  { cls: 'ty-a',   icon: 'spark' },
  'Phó từ':   { cls: 'ty-adv', icon: 'flip' },
  'Đại từ':   { cls: 'ty-pr',  icon: 'user' },
  'Lượng từ': { cls: 'ty-cl',  icon: 'grid' },
  'Số đếm':   { cls: 'ty-num', icon: 'hash' },
  'Trợ từ':   { cls: 'ty-pt',  icon: 'link' },
  'Cụm từ':   { cls: 'ty-ph',  icon: 'quote' }
};
const TYPE_ORDER = ['Danh từ', 'Động từ', 'Tính từ', 'Phó từ', 'Đại từ', 'Lượng từ', 'Số đếm', 'Trợ từ', 'Cụm từ'];

function typeStyle(type) {
  if (!type) return { cls: 'ty-ph', icon: 'quote' };
  if (TYPE_STYLE[type]) return TYPE_STYLE[type];
  const k = TYPE_ORDER.find(t => type.includes(t));
  return k ? TYPE_STYLE[k] : { cls: 'ty-ph', icon: 'quote' };
}

// Hình minh hoạ cho từ (nếu có) hoặc ô icon theo loại từ
function wordArtHtml(w, size) {
  const s = size || 64;
  const src = (typeof WORD_ICONS !== 'undefined') ? WORD_ICONS[w.zh] : null;
  if (src) return '<img class="word-art" src="' + src + '" alt="" width="' + s + '" height="' + s + '" loading="lazy">';
  const ts = typeStyle(w.type);
  return '<span class="word-art word-art-type ' + ts.cls + '" style="width:' + s + 'px;height:' + s + 'px">' + icon(ts.icon, Math.round(s * 0.42)) + '</span>';
}

// ---- Tách tiêu đề buổi học ----
// "Buổi 21 (b24): 三餐… – Ba bữa ăn…" → {num:'Buổi 21', code:'b24', zh:'三餐…', vi:'Ba bữa ăn…'}
function parseLessonTitle(s) {
  const m = s.match(/^(Buổi\s*\d+)\s*(?:\(([^)]*)\))?\s*:\s*(.*)$/);
  const head = m ? m[1] : s;
  const code = m ? (m[2] || '') : '';
  const rest = m ? m[3] : '';
  let zh = rest, vi = '';
  const parts = rest.split(/\s+[–-]\s+/);
  if (parts.length >= 2) { zh = parts[0]; vi = parts.slice(1).join(' – '); }
  if (!/[一-鿿]/.test(zh)) { vi = rest; zh = ''; }
  return { num: head, code: code, zh: zh, vi: vi, short: zh || vi };
}

// ---- Đọc lần lượt nhiều câu ----
let _queueToken = 0;
function speakSequence(list) {
  if (!window.speechSynthesis || !list.length) return;
  window.speechSynthesis.cancel();
  const token = ++_queueToken;
  let i = 0;
  const next = () => {
    if (token !== _queueToken || i >= list.length) return;
    const utt = new SpeechSynthesisUtterance(list[i++].replace(/[？！。，、]/g, ''));
    utt.lang = 'zh-CN';
    utt.rate = getRate();
    if (ttsVoice) utt.voice = ttsVoice;
    utt.onend = () => setTimeout(next, 350);
    window.speechSynthesis.speak(utt);
  };
  next();
}

// ---- Tốc độ đọc (thanh trượt) ----
const SPEED_SHORT = { 1: '0.3×', 2: '0.5×', 3: '0.7×', 4: '0.9×', 5: '1.0×', 6: '1.2×', 7: '1.5×', 8: '2.0×' };
function onSpeedSlide(v) {
  setSpeed(parseInt(v, 10));
  document.querySelectorAll('.speed-val').forEach(el => { el.textContent = SPEED_SHORT[v]; });
  try { localStorage.setItem('zh_speed_v1', String(v)); } catch (e) {}
}
function restoreSpeed() {
  let v = 4;
  try { v = parseInt(localStorage.getItem('zh_speed_v1') || '4', 10) || 4; } catch (e) {}
  document.querySelectorAll('.speed-range').forEach(r => { r.value = v; });
  onSpeedSlide(v);
}

// ---- Menu ngăn kéo trên điện thoại ----
function openDrawer() { document.body.classList.add('drawer-open'); }
function closeDrawer() { document.body.classList.remove('drawer-open'); }

// ---- Số liệu trong menu ----
function fillNavCounts() {
  const set = (k, n) => document.querySelectorAll('[data-count="' + k + '"]').forEach(el => { el.textContent = n; });
  const words = VOCAB_DATA.reduce((a, l) => a + l.words.length, 0);
  set('words', words);
  set('lessons', VOCAB_DATA.length);
  try { set('grammar', GRAMMAR_DATA.length); } catch (e) {}
  try { set('phrases', PHRASES.length); } catch (e) {}
  try { set('dialogues', DIALOGUE_DATA.length); } catch (e) {}
  try { set('reading', READING_DATA.length); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  hydrateIcons();
  fillNavCounts();
  restoreSpeed();
});

// ---- Chuẩn hoá hội thoại: một số bài gom nhiều hội thoại con trong "dialogues"
// (dạng này từng làm hỏng tab Hội thoại và phần khởi động app) ----
(function normalizeDialogues() {
  if (typeof DIALOGUE_DATA === 'undefined') return;
  const out = [];
  DIALOGUE_DATA.forEach(d => {
    if (!d) return;
    if (Array.isArray(d.lines)) { out.push(d); return; }
    (d.dialogues || []).forEach(sub => out.push({
      lesson: d.lesson || d.title || '',
      title: sub.title || '',
      lessonIdx: d.lessonIdx,
      lines: (sub.lines || []).map(l => ({ ...l, s: l.s || l.speaker || 'A' }))
    }));
  });
  DIALOGUE_DATA.length = 0;
  out.forEach(x => DIALOGUE_DATA.push(x));
})();
