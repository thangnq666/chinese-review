// ===================================================
function openVocabSpeak(zh) {
  // Build flat queue from ALL vocab words in order
  const queue = [];
  VOCAB_DATA.forEach((les, li) => {
    les.words.forEach((w) => {
      queue.push({zh: w.zh, py: w.py || '', vi: w.vi || '', lessonIdx: li, source: les.lesson});
    });
  });
  let qIdx = queue.findIndex(q => q.zh === zh);
  if (qIdx < 0) qIdx = 0;
  speakQueue = queue;
  speakQueueIdx = qIdx;
  const item = queue[qIdx];
  currentSpeak = item;
  document.getElementById('spTargetZh').textContent = item.zh;
  document.getElementById('spTargetPy').textContent = item.py;
  document.getElementById('spTargetVi').textContent = item.vi;
  updateSpeakCounter();
  resetRecording();
  checkMicPermissionBanner();
  document.getElementById('speakOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => speak(item.zh), 400);
}

function updateSpeakCounter() {
  const el = document.getElementById('spCounter');
  if (!el) return;
  if (!speakQueue || speakQueue.length === 0) { el.textContent = ''; return; }
  const item = speakQueue[speakQueueIdx] || {};
  const src = item.source || '';
  // Format: "15 / 236  ·  Buổi 3"
  el.textContent = (speakQueueIdx + 1) + ' / ' + speakQueue.length + (src ? ' · ' + src : '');
}

function openSpeakModal(zh, py, vi, lessonIdx, lineIdx) {
  currentSpeak = {zh, py, vi, lessonIdx, lineIdx};
  // Build queue from same lesson
  speakQueue = currentSpeakFilter === 'all'
    ? allSpeakItems
    : allSpeakItems.filter(i => i.lessonIdx === lessonIdx);
  speakQueueIdx = speakQueue.findIndex(i => i.zh === zh);
  if (speakQueueIdx < 0) speakQueueIdx = 0;

  document.getElementById('spTargetZh').textContent = zh;
  document.getElementById('spTargetPy').textContent = py;
  document.getElementById('spTargetVi').textContent = vi;
  updateSpeakCounter();
  resetRecording();
  checkMicPermissionBanner();
  document.getElementById('speakOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => speak(zh), 400);
}

function closeSpeakModal(event) {
  if (event && event.target !== document.getElementById('speakOverlay')) return;
  stopRecordingUI();
  document.getElementById('speakOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

async function toggleRecording() {
  if (!recognition) {
    document.getElementById('micStatus').textContent = '❌ Trình duyệt không hỗ trợ. Dùng Chrome/Edge.';
    return;
  }

  // Nếu đang ghi: dừng
  if (isRecording) {
    isRecording = false;
    recognitionStarted = false;
    try { recognition.stop(); } catch(e) {}
    stopRecordingUI();
    return;
  }

  // Xin quyền micro 1 lần duy nhất — giữ stream sống để Chrome không hỏi lại
  if (!micStream) {
    try {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micPermGranted = true;
    } catch (err) {
      const micStatus = document.getElementById('micStatus');
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        micStatus.textContent = '⛔ Chưa cấp quyền. Nhấn 🔒 trên Chrome → "Cho phép" Microphone.';
      } else {
        micStatus.textContent = '⚠️ Lỗi micro: ' + err.message;
      }
      return;
    }
  }

  // Tạo recognition instance mới mỗi lần ghi (tránh lỗi InvalidStateError)
  if (window._srFactory) {
    recognition = window._srFactory();
  }

  // Bắt đầu ghi âm
  try {
    recognition.start();
    recognitionStarted = true;
  } catch(e) {
    document.getElementById('micStatus').textContent = '⚠️ Không thể khởi động mic. Thử lại.';
    return;
  }

  isRecording = true;
  document.getElementById('micBtn').className = 'mic-btn recording';
  document.getElementById('micBtn').textContent = '⏹️';
  document.getElementById('micStatus').textContent = '🔴 Đang ghi âm... (nhấn để dừng)';
  document.getElementById('micStatus').className = 'mic-status recording-text';
  document.getElementById('spTranscript').className = 'speak-transcript active';
  document.getElementById('spTranscript').textContent = '...';
  document.getElementById('scoreSection').style.display = 'none';
}

function stopRecordingUI() {
  isRecording = false;
  document.getElementById('micBtn').className = 'mic-btn idle';
  document.getElementById('micBtn').textContent = '🎙️';
  document.getElementById('micStatus').textContent = 'Nhấn để nói lại';
  document.getElementById('micStatus').className = 'mic-status';
  document.getElementById('spTranscript').className = 'speak-transcript';
}

function resetRecording() {
  // Chỉ reset UI — KHÔNG dừng recognition engine để tránh hỏi quyền lại
  isRecording = false;
  stopRecordingUI();
  document.getElementById('spTranscript').textContent = 'Câu nhận diện sẽ hiển thị ở đây...';
  document.getElementById('scoreSection').style.display = 'none';
  document.getElementById('micStatus').textContent = 'Nhấn để bắt đầu nói';
}

function nextSpeakCard() {
  if (speakQueue.length === 0) return;
  speakQueueIdx = (speakQueueIdx + 1) % speakQueue.length;
  const item = speakQueue[speakQueueIdx];
  currentSpeak = item;
  document.getElementById('spTargetZh').textContent = item.zh;
  document.getElementById('spTargetPy').textContent = item.py;
  document.getElementById('spTargetVi').textContent = item.vi;
  updateSpeakCounter();
  resetRecording();
  setTimeout(() => speak(item.zh), 300);
}

function computeScore(spoken, target) {
  const clean = s => s.replace(/[，。！？、\s]/g,'');
  const s = clean(spoken), t = clean(target);
  if (!t.length) return 0;
  if (s === t) return 100;
  // Order-sensitive match
  let oi = 0, si = 0, ordMatch = 0;
  while (oi < t.length && si < s.length) {
    if (t[oi] === s[si]) { ordMatch++; oi++; si++; } else { si++; }
  }
  // Frequency match
  const freq = {};
  for (const c of t) freq[c] = (freq[c]||0)+1;
  let freqMatch = 0;
  for (const c of s) { if (freq[c]>0) { freqMatch++; freq[c]--; } }
  const score = Math.round((ordMatch/t.length)*60 + (freqMatch/t.length)*40);
  return Math.min(100, score);
}

function showScore(spoken, confidence) {
  stopRecordingUI();
  const score = computeScore(spoken, currentSpeak.zh);
  const confBonus = confidence ? Math.round(confidence * 15) : 0;
  const finalScore = Math.min(100, score + confBonus);
  document.getElementById('scoreSection').style.display = 'block';

  let emoji, label, color;
  if (finalScore >= 90) { emoji='🏆'; label='Xuất sắc! Phát âm rất chuẩn!'; color='#27ae60'; }
  else if (finalScore >= 75) { emoji='👍'; label='Tốt lắm! Tiếp tục cố gắng!'; color='#2980b9'; }
  else if (finalScore >= 55) { emoji='😊'; label='Khá tốt! Luyện thêm nhé!'; color='#f39c12'; }
  else if (finalScore >= 35) { emoji='💪'; label='Cố thêm! Nghe mẫu rồi thử lại!'; color='#e67e22'; }
  else { emoji='🔄'; label='Thử lại! Nghe kỹ mẫu trước nhé!'; color='#e74c3c'; }

  document.getElementById('scoreEmoji').textContent = emoji;
  document.getElementById('scoreLabel').textContent = label;
  document.getElementById('scoreLabel').style.color = color;

  const bar = document.getElementById('scoreBar');
  bar.style.width = '0%';
  bar.style.background = `linear-gradient(90deg, ${color}, ${color}aa)`;
  setTimeout(() => { bar.style.width = finalScore + '%'; bar.textContent = finalScore + '%'; }, 100);

  const diff = [...currentSpeak.zh].filter(c => ![...spoken].includes(c));
  document.getElementById('scoreDetail').textContent =
    `Điểm: ${finalScore}/100${diff.length ? ' · Chữ cần luyện: ' + diff.join(' ') : ''}`;
}

function practiceDialogue(di) {
  const dlg = DIALOGUE_DATA[di];
  if (dlg.lines.length > 0) {
    speakQueue = dlg.lines.map(l => ({zh:l.zh, py:l.py, vi:l.vi, lessonIdx:di}));
    speakQueueIdx = 0;
    const first = speakQueue[0];
    openSpeakModal(first.zh, first.py, first.vi, di, 0);
  }
}

// ===================================================
// STROKE ORDER MODAL (HanziWriter)
