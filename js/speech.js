// ===================================================
let recognition = null;
let isRecording = false;
let recognitionStarted = false; // true sau khi recognition.start() đã được gọi
let currentSpeak = {zh:'', py:'', vi:'', lessonIdx:0, lineIdx:0};
let speakQueue = [];
let speakQueueIdx = 0;

function initSpeechRecognition() {
  const srStatus = document.getElementById('srStatus');
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    srStatus.className = 'alert alert-warn';
    srStatus.innerHTML = '❌ Trình duyệt không hỗ trợ ghi âm. Hãy dùng <strong>Google Chrome</strong> hoặc <strong>Microsoft Edge</strong>.';
    document.querySelectorAll('.dl-btn-practice').forEach(b => b.disabled = true);
    return;
  }

  function createRecognition() {
    const r = new SR();
    r.lang = 'zh-CN';
    r.continuous = false;        // stop sau mỗi câu — tránh race condition onend
    r.interimResults = true;
    r.maxAlternatives = 3;

    r.onresult = (e) => {
      if (!isRecording) return;
      let interim = '', final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else interim += t;
      }
      const shown = final || interim;
      const transcript = document.getElementById('spTranscript');
      if (transcript) transcript.textContent = shown || '...';
      if (final) {
        isRecording = false;
        recognitionStarted = false;
        stopRecordingUI();
        showScore(final, e.results[e.resultIndex]?.[0]?.confidence ?? 0.8);
      }
    };

    r.onerror = (e) => {
      recognitionStarted = false;
      if (e.error === 'no-speech') {
        // Người dùng không nói gì — reset UI
        if (isRecording) {
          isRecording = false;
          stopRecordingUI();
          const t = document.getElementById('micStatus');
          if (t) t.textContent = 'Không nghe thấy gì. Nhấn để thử lại.';
        }
        return;
      }
      if (e.error === 'aborted') { isRecording = false; stopRecordingUI(); return; }
      isRecording = false;
      stopRecordingUI();
      if (e.error === 'not-allowed') {
        const t = document.getElementById('spTranscript');
        if (t) t.textContent = '⛔ Chưa cấp quyền micro. Nhấn 🔒 trên Chrome → Cho phép Microphone.';
      }
    };

    r.onend = () => {
      recognitionStarted = false;
      // Nếu vẫn đang isRecording nhưng không có kết quả (bị dừng sớm) → reset UI
      if (isRecording) {
        isRecording = false;
        stopRecordingUI();
      }
      // KHÔNG tự restart — mỗi lần nhấn mic sẽ gọi recognition.start() mới
    };

    return r;
  }

  recognition = createRecognition();
  // Lưu factory để tạo instance mới mỗi lần ghi (Chrome yêu cầu)
  window._srFactory = createRecognition;

  srStatus.className = 'alert alert-info';
  srStatus.innerHTML = '✅ Nhận diện giọng nói sẵn sàng! Nhấn <strong>🎤 Tập nói</strong> để bắt đầu.';
  initMicPermission();
}


// ─── Mic permission: ONE-TIME request, stream kept open for whole session ───
let micPermGranted = false;
let micStream = null; // keep stream alive → Chrome won't ask again

function initMicPermission() {
  // Check current permission state; no getUserMedia call here
  if (!navigator.permissions) return;
  navigator.permissions.query({ name: 'microphone' }).then(perm => {
    micPermGranted = (perm.state === 'granted');
    // Auto-acquire stream silently if already granted
    if (perm.state === 'granted' && !micStream && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(s => { micStream = s; })
        .catch(() => {});
    }
    // Show banner only when explicitly denied
    perm.onchange = () => {
      micPermGranted = (perm.state === 'granted');
    };
  }).catch(() => {});
}

async function requestMicPermission() {
  // Called by the banner button — explicit user gesture, guaranteed to work
  try {
    if (!micStream) micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micPermGranted = true;
    document.getElementById('micStatus').textContent = '✅ Đã cấp quyền! Nhấn 🎙️ để bắt đầu nói.';
    if (!recognition) initSpeechRecognition();
  } catch(err) {
    document.getElementById('micStatus').textContent = '⛔ Bị từ chối. Nhấn 🔒 trên Chrome → "Cho phép" Microphone.';
  }
}

function checkMicPermissionBanner() {} // kept for compat

// ===================================================
// VOCAB SPEAK QUEUE
