// ===================================================
function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#mainNav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
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

// ===================================================
// VOCAB RENDER
