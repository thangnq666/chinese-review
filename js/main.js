// ===================================================
// APP INIT — chỉ render tab đang mở, các tab khác
// được render lười (lazy) ở navigation.js khi mở lần đầu
// ===================================================
document.addEventListener('DOMContentLoaded', function() {
  initTTS();
  initMicPermission();
  buildSpeakData();        // dữ liệu nhẹ, cần cho modal Tập nói ở mọi tab
  renderPhonetics();       // tab mặc định (Ngữ Âm)
  markRendered('s-phonetics');
  initSpeechRecognition();
  const ttsBar = document.getElementById('ttsBar');
  if (ttsBar) ttsBar.style.display = 'flex';
});
