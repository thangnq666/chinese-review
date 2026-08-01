// ===================================================
// SPEED CONTROL
// ===================================================
const SPEED_MAP = {
  1: { rate: 0.3,  label: '🐌 Siêu chậm' },
  2: { rate: 0.5,  label: '🐢 Rất chậm' },
  3: { rate: 0.7,  label: '🚶 Chậm' },
  4: { rate: 0.9,  label: '🎯 Bình thường' },
  5: { rate: 1.0,  label: '💬 Tự nhiên' },
  6: { rate: 1.2,  label: '🚀 Nhanh' },
  7: { rate: 1.5,  label: '⚡ Rất nhanh' },
  8: { rate: 2.0,  label: '🔥 Tối đa' },
};
let currentSpeed = 4;

function setSpeed(level, btn) {
  currentSpeed = level;
  document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const info = SPEED_MAP[level];
  const descEl = document.getElementById('speedDesc');
  if (descEl) descEl.textContent = info.label;
}

function previewSpeed() {
  speak('你好，我学习汉语。');
}

function getRate() {
  return SPEED_MAP[currentSpeed]?.rate ?? 0.9; // default bình thường
}

// ===================================================
// TTS
// ===================================================
let ttsVoice = null;
let ttsAvail = false;
let currentSpeaking = null;

function initTTS() {
  if (!window.speechSynthesis) return;
  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    const sel = document.getElementById('voiceSel');
    if (!sel) return;
    // Populate voice selector with zh voices first, then all
    const zhVoices = voices.filter(v => v.lang.startsWith('zh'));
    const otherVoices = voices.filter(v => !v.lang.startsWith('zh'));
    sel.innerHTML = '<option value="">🎙 Mặc định</option>';
    zhVoices.forEach((v,i) => {
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.textContent = '🇨🇳 ' + v.name.replace(/Microsoft |Google /, '');
      sel.appendChild(opt);
    });
    if (otherVoices.length && zhVoices.length === 0) {
      otherVoices.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.textContent = v.name;
        sel.appendChild(opt);
      });
    }
    if (zhVoices.length > 0) {
      ttsVoice = zhVoices.find(v => v.lang === 'zh-CN') || zhVoices[0];
      sel.value = ttsVoice.name;
      ttsAvail = true;
    } else if (voices.length > 0) {
      ttsAvail = true;
    }
  }
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function setVoice(name) {
  const voices = window.speechSynthesis.getVoices();
  if (!name) { ttsVoice = null; return; }
  ttsVoice = voices.find(v => v.name === name) || null;
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/[？！。，、]/g, '');
  const utt = new SpeechSynthesisUtterance(clean);
  utt.lang = 'zh-CN';
  utt.rate = getRate();
  utt.pitch = 1;
  if (ttsVoice) utt.voice = ttsVoice;
  window.speechSynthesis.speak(utt);
}

function openSpeakFromStroke() {
  const w = currentModalWord;
  document.getElementById('strokeOverlay').classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => openVocabSpeak(w.zh), 200);
}

function speakFC() {
  if (fcCards.length === 0) return;
  speak(fcCards[fcIdx].zh);
}

function showStrokeModalFC() {
  if (fcCards.length === 0) return;
  const w = fcCards[fcIdx];
  showStrokeModal(w.zh, w.py, w.vi, w.type || '');
}

// ===================================================
// NAVIGATION
