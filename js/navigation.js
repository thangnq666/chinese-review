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
  document.querySelectorAll('#mainNav button').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  // Hiện/ẩn ttsBar chỉ trên tab Ngữ Âm, Từ Vựng, Ngữ Pháp
  const ttsBar = document.getElementById('ttsBar');
  if (ttsBar) {
    const showOn = ['s-phonetics','s-vocab','s-grammar'];
    ttsBar.style.display = showOn.includes(id) ? 'flex' : 'none';
  }
  const vts = document.getElementById('vocabTypeSelect');
  if (vts) vts.style.display = (id === 's-vocab') ? '' : 'none';
  window.scrollTo({top: 0, behavior: 'smooth'});
}
