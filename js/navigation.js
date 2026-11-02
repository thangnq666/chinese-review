// ===================================================
// NAVIGATION + LAZY RENDER
// Mỗi tab nặng chỉ render 1 lần khi mở lần đầu → tải trang nhanh hơn nhiều
// ===================================================
const _renderedSections = {};

const _sectionRenderers = {
  's-phonetics': () => renderPhonetics(),
  's-vocab':     () => renderVocab(),
  's-grammar':   () => renderGrammar(),
  's-sentences': () => renderPhrases(),
  's-dialogue':  () => renderDialogues(),
  's-reading':   () => renderReading(),
  's-speak':     () => { populateSpeakFilter(); renderSpeakCards(); },
  's-flashcard': () => initFlashcard(),
  's-exercise':  () => { renderExercises(); initExercises(); },
};

function markRendered(id) { _renderedSections[id] = true; }

function ensureSectionRendered(id) {
  if (_renderedSections[id]) return;
  const fn = _sectionRenderers[id];
  if (!fn) return;
  try { fn(); } catch (e) { console.error('Render error for', id, e); }
  _renderedSections[id] = true;
}

function showSection(id, btn) {
  ensureSectionRendered(id);
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  // Đánh dấu mục đang mở ở cả menu bên trái và thanh dưới
  document.querySelectorAll('.nav-item, .bn-item').forEach(b => {
    const on = b.dataset.section === id;
    b.classList.toggle('active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  if (typeof closeDrawer === 'function') closeDrawer();
  window.scrollTo({top: 0, behavior: 'smooth'});
}
