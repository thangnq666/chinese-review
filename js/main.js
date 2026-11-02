// ===================================================
// APP INIT — chỉ render tab đang mở, các tab khác
// được render lười (lazy) ở navigation.js khi mở lần đầu
// ===================================================
function _safe(fn, name) {
  try { fn(); } catch (e) { console.error('Init error:', name, e); }
}

document.addEventListener('DOMContentLoaded', function() {
  _safe(initTTS, 'initTTS');
  _safe(initMicPermission, 'initMicPermission');
  _safe(buildSpeakData, 'buildSpeakData');      // dữ liệu nhẹ, cần cho modal Tập nói ở mọi tab
  _safe(renderPhonetics, 'renderPhonetics');    // tab mặc định (Ngữ Âm)
  markRendered('s-phonetics');
  _safe(initSpeechRecognition, 'initSpeechRecognition');
});
