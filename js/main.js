window.addEventListener('load', function() {
  initTTS();
  initMicPermission();
  renderPhonetics();
  renderGrammar();
  renderVocab();
  renderPhrases();
  renderDialogues();
  buildSpeakData();
  renderSpeakCards();
  initSpeechRecognition();
  initExercises();
  const ttsBar = document.getElementById('ttsBar');
  if (ttsBar) ttsBar.style.display = 'flex';
});
