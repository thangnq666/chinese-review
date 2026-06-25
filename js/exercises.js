// ===================================================

// --- Populate lesson selects ---
function populateExLessonSelects() {
  const selIds = ['mc-lesson-sel','match-lesson-sel','listen-lesson-sel','fill-lesson-sel'];
  selIds.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    // Remove previously added options (keep only the first "Tất cả" option)
    while (sel.options.length > 1) sel.remove(1);
    VOCAB_DATA.forEach((lesson, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      // Safe label: "Buổi X – subtitle" or just first 40 chars
      const colonIdx = lesson.lesson.indexOf(':');
      const dashIdx = lesson.lesson.indexOf('–');
      const prefix = colonIdx >= 0 ? lesson.lesson.substring(0, colonIdx).trim() : lesson.lesson.substring(0,15).trim();
      const suffix = dashIdx >= 0 ? lesson.lesson.substring(dashIdx + 1).trim().substring(0, 22) : '';
      opt.textContent = prefix + (suffix ? ' – ' + suffix : '');
      sel.appendChild(opt);
    });
  });
}

function getFilteredWords(selectId) {
  const sel = document.getElementById(selectId);
  const val = sel ? parseInt(sel.value) : -1;
  let words = [];
  if (val === -1) {
    VOCAB_DATA.forEach(l => words.push(...l.words));
  } else {
    words = [...(VOCAB_DATA[val]?.words || [])];
  }
  return words;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function switchExTab(pane, btn) {
  document.querySelectorAll('.ex-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ex-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pane-' + pane).classList.add('active');
  btn.classList.add('active');
}

// ===================================================
// TRẮC NGHIỆM TỪ VỰNG (Multiple Choice)
// ===================================================
let mcQuestions = [];
let mcCurrent = 0;
let mcScore = 0;
let mcStreak = 0;
let mcAnswered = [];

function generateMC() {
  const words = getFilteredWords('mc-lesson-sel');
  if (words.length < 4) { alert('Cần ít nhất 4 từ để tạo bài!'); return; }
  const dir = document.getElementById('mc-dir-sel').value;
  const picked = shuffle(words).slice(0, Math.min(10, words.length));
  mcQuestions = picked.map(w => {
    const wrongs = shuffle(words.filter(x => x.zh !== w.zh)).slice(0, 3);
    const options = shuffle([w, ...wrongs]);
    return { word: w, options, dir };
  });
  mcCurrent = 0; mcScore = 0; mcStreak = 0; mcAnswered = new Array(mcQuestions.length).fill(null);
  updateMCScoreBar();
  renderMCQuestion();
}

function updateMCScoreBar() {
  document.getElementById('mc-score').textContent = mcScore;
  document.getElementById('mc-total').textContent = mcQuestions.length;
  const pct = mcQuestions.length ? Math.round(mcScore / mcQuestions.length * 100) : 0;
  document.getElementById('mc-progress-fill').style.width = pct + '%';
  document.getElementById('mc-streak').textContent = '🔥 ' + mcStreak;
}

function renderMCQuestion() {
  const container = document.getElementById('mc-container');
  if (mcCurrent >= mcQuestions.length) {
    const pct = Math.round(mcScore / mcQuestions.length * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
    container.innerHTML = `
      <div style="text-align:center;padding:30px;background:white;border-radius:var(--radius);border:2px solid var(--gray2)">
        <div style="font-size:3rem">${emoji}</div>
        <div style="font-size:1.5rem;font-weight:800;margin:10px 0">${mcScore}/${mcQuestions.length} đúng</div>
        <div style="color:var(--text-light)">${pct}% chính xác</div>
        <button class="ex-gen-btn" style="margin-top:16px" onclick="generateMC()">🔄 Làm lại</button>
      </div>`;
    return;
  }
  const q = mcQuestions[mcCurrent];
  const w = q.word;
  const isZh2Vi = q.dir === 'zh2vi';
  const questionHTML = isZh2Vi
    ? `<div class="mc-question-word">${w.zh} <button class="mc-speak-btn" onclick="speak('${w.zh.replace(/'/g,"\\'")}')">🔊</button></div>
       <div class="mc-question-py">${w.py}</div>
       <div style="text-align:center;font-size:0.8rem;color:var(--text-light)">Nghĩa tiếng Việt là gì?</div>`
    : `<div style="text-align:center;font-size:1rem;color:var(--text-light);margin-bottom:6px">Từ nào có nghĩa:</div>
       <div style="text-align:center;font-size:1.3rem;font-weight:700;color:var(--dark);margin-bottom:4px">${w.vi}</div>
       <div style="text-align:center;font-size:0.8rem;color:var(--text-light)">Chọn chữ Hán đúng:</div>`;
  const optHTML = q.options.map((opt, oi) => {
    const label = isZh2Vi ? opt.vi : opt.zh;
    return `<button class="mc-option" onclick="answerMC(${oi})" data-idx="${oi}"
      data-correct="${opt.zh === w.zh}">${label}</button>`;
  }).join('');
  container.innerHTML = `
    <div class="mc-question-card">
      <div style="text-align:right;font-size:0.75rem;color:var(--text-light);margin-bottom:8px">
        Câu ${mcCurrent+1} / ${mcQuestions.length}
      </div>
      ${questionHTML}
      <div class="mc-options">${optHTML}</div>
      <div class="mc-hint" id="mc-hint"></div>
    </div>`;
  if (mcAnswered[mcCurrent] !== null) {
    document.querySelectorAll('.mc-option').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === 'true') btn.classList.add('correct');
      if (btn.dataset.idx == mcAnswered[mcCurrent] && btn.dataset.correct !== 'true') btn.classList.add('wrong');
    });
  }
}

function answerMC(optIdx) {
  if (mcAnswered[mcCurrent] !== null) return;
  mcAnswered[mcCurrent] = optIdx;
  const q = mcQuestions[mcCurrent];
  const buttons = document.querySelectorAll('.mc-option');
  const chosen = buttons[optIdx];
  const isCorrect = chosen.dataset.correct === 'true';
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === 'true') btn.classList.add('correct');
  });
  if (isCorrect) {
    mcScore++;
    mcStreak++;
    document.getElementById('mc-hint').textContent = '✅ Đúng! ' + (mcStreak >= 3 ? '🔥 '.repeat(Math.min(mcStreak,5)) : '');
  } else {
    chosen.classList.add('wrong');
    mcStreak = 0;
    const correctWord = q.word;
    document.getElementById('mc-hint').textContent = '❌ Sai. Đáp án: ' + (q.dir==='zh2vi' ? correctWord.vi : correctWord.zh);
  }
  updateMCScoreBar();
  setTimeout(() => { mcCurrent++; renderMCQuestion(); }, 1200);
}

// ===================================================
// NỐI TỪ (Matching Game)
// ===================================================
let matchSelected = null;
let matchPairs = [];
let matchCorrect = 0;

function generateMatch() {
  const words = getFilteredWords('match-lesson-sel');
  if (words.length < 6) { alert('Cần ít nhất 6 từ!'); return; }
  matchPairs = shuffle(words).slice(0, 8);
  matchSelected = null;
  matchCorrect = 0;
  document.getElementById('match-result').classList.remove('show');
  document.getElementById('match-score-text').textContent = '';
  renderMatch();
}

function renderMatch() {
  const container = document.getElementById('match-container');
  const viShuffled = shuffle(matchPairs.map(w => ({vi: w.vi, zh: w.zh})));
  let leftHTML = '<div class="match-col" id="match-left">';
  matchPairs.forEach(function(w, i) {
    const zhSafe = w.zh.replace(/"/g, '&quot;');
    const zhSpeak = w.zh.replace(/'/g, "\\'");
    leftHTML += '<div class="match-card zh-card" data-zh="' + zhSafe + '" data-side="left" data-idx="' + i + '" onclick="selectMatch(this)">'
      + w.zh
      + '<button style="background:none;border:none;cursor:pointer;font-size:0.8rem;margin-left:4px" onclick="event.stopPropagation();speak(\'' + zhSpeak + '\')">🔊</button>'
      + '</div>';
  });
  leftHTML += '</div>';
  let rightHTML = '<div class="match-col" id="match-right">';
  viShuffled.forEach(function(w, i) {
    const zhSafe = w.zh.replace(/"/g, '&quot;');
    rightHTML += '<div class="match-card" data-zh="' + zhSafe + '" data-side="right" data-idx="' + i + '" onclick="selectMatch(this)">'
      + w.vi
      + '</div>';
  });
  rightHTML += '</div>';
  container.innerHTML = leftHTML + rightHTML;
}

function selectMatch(card) {
  if (card.classList.contains('matched')) return;
  const side = card.dataset.side;
  // If same side as current selection, just swap
  if (matchSelected && matchSelected.dataset.side === side) {
    matchSelected.classList.remove('selected');
    matchSelected = card;
    card.classList.add('selected');
    return;
  }
  if (!matchSelected) {
    matchSelected = card;
    card.classList.add('selected');
    return;
  }
  // We have two cards from different sides
  const first = matchSelected;
  const second = card;
  first.classList.remove('selected');
  matchSelected = null;
  if (first.dataset.zh === second.dataset.zh) {
    // Correct match
    first.classList.add('matched');
    second.classList.add('matched');
    matchCorrect++;
    document.getElementById('match-score-text').textContent = `✅ ${matchCorrect} / ${matchPairs.length} cặp đúng`;
    if (matchCorrect === matchPairs.length) {
      document.getElementById('match-result').classList.add('show');
    }
  } else {
    // Wrong - flash red
    first.classList.add('wrong-flash');
    second.classList.add('wrong-flash');
    setTimeout(() => {
      first.classList.remove('wrong-flash');
      second.classList.remove('wrong-flash');
    }, 600);
  }
}

// ===================================================
// NGHE & CHỌN CHỮ (Listen and Choose)
// ===================================================
let listenQuestions = [];
let listenCurrent = 0;
let listenScore = 0;

function generateListen() {
  const words = getFilteredWords('listen-lesson-sel');
  if (words.length < 4) { alert('Cần ít nhất 4 từ!'); return; }
  listenQuestions = shuffle(words).slice(0, Math.min(8, words.length));
  listenCurrent = 0;
  listenScore = 0;
  renderListenQuestion();
}

function renderListenQuestion() {
  const counter = document.getElementById('listen-counter');
  const card = document.getElementById('listen-card');
  if (listenCurrent >= listenQuestions.length) {
    const pct = Math.round(listenScore / listenQuestions.length * 100);
    counter.textContent = 'Hoàn thành!';
    card.innerHTML = `
      <div style="padding:20px;text-align:center">
        <div style="font-size:2.5rem">${pct===100?'🏆':pct>=80?'🎉':'💪'}</div>
        <div style="font-size:1.3rem;font-weight:800;margin:10px 0">${listenScore}/${listenQuestions.length} đúng</div>
        <button class="ex-gen-btn" style="margin-top:10px" onclick="generateListen()">🔄 Làm lại</button>
      </div>`;
    return;
  }
  const q = listenQuestions[listenCurrent];
  const allWords = [];
  VOCAB_DATA.forEach(l => allWords.push(...l.words));
  const wrongs = shuffle(allWords.filter(w => w.zh !== q.zh)).slice(0, 3);
  const options = shuffle([q, ...wrongs]);
  counter.textContent = `Câu ${listenCurrent+1} / ${listenQuestions.length}  |  ✅ ${listenScore} đúng`;
  let optHTML = '';
  options.forEach(function(opt) {
    const optSpeak = opt.zh.replace(/'/g, "\\'");
    const qSpeak = q.zh.replace(/'/g, "\\'");
    optHTML += '<div class="listen-option" onclick="answerListen(this, \'' + optSpeak + '\', \'' + qSpeak + '\')">'
      + opt.zh
      + '<span class="listen-opt-py">' + opt.py + '</span>'
      + '</div>';
  });
  card.innerHTML = '<button class="listen-play-btn" onclick="playListenWord()" id="listen-play-btn">🔊</button>'
    + '<div class="listen-subtitle">Nhấn để nghe, rồi chọn chữ đúng</div>'
    + '<div class="listen-options">' + optHTML + '</div>';
  // Auto-play on new question
  setTimeout(() => playListenWord(), 300);
}

function playListenWord() {
  const q = listenQuestions[listenCurrent];
  if (!q) return;
  const btn = document.getElementById('listen-play-btn');
  if (btn) { btn.classList.add('playing'); setTimeout(()=>btn.classList.remove('playing'),1200); }
  speak(q.zh);
}

function answerListen(el, chosen, correct) {
  if (el.hasAttribute('disabled')) return;
  document.querySelectorAll('.listen-option').forEach(o => o.setAttribute('disabled',''));
  if (chosen === correct) {
    el.classList.add('correct');
    listenScore++;
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('.listen-option').forEach(o => {
      if (o.textContent.trim().startsWith(correct.substring(0,1))) o.classList.add('reveal');
    });
  }
  setTimeout(() => { listenCurrent++; renderListenQuestion(); }, 1300);
}

// ===================================================
// ĐIỀN VÀO CÂU (Fill in Blank with Word Bank)
// ===================================================
let fillData = [];    // [{sentence, blank, answer}]
let fillState = [];   // answers filled in

// Build fill sentences from example sentences in VOCAB_DATA
function buildFillSentences(words) {
  const sentences = [];
  words.forEach(w => {
    if (!w.ex || !w.ex.length) return;
    w.ex.forEach(ex => {
      if (ex.zh && ex.zh.includes(w.zh) && w.zh.length <= 3) {
        sentences.push({
          zh: ex.zh,
          py: ex.py,
          vi: ex.vi,
          answer: w.zh,
          hint: w.py
        });
      }
    });
  });
  return sentences;
}

function generateFill() {
  const words = getFilteredWords('fill-lesson-sel');
  let sentences = buildFillSentences(words);
  if (sentences.length < 3) {
    // Fallback: use phrases
    sentences = PHRASES.filter(p => {
      const lessonSel = document.getElementById('fill-lesson-sel');
      const val = lessonSel ? parseInt(lessonSel.value) : -1;
      return val === -1 || p.lesson === val+1;
    }).map(p => ({zh:p.zh, py:p.py, vi:p.vi, answer:null, hint:''}));
  }
  fillData = shuffle(sentences).slice(0, Math.min(6, sentences.length));
  fillState = new Array(fillData.length).fill(null);
  document.getElementById('fill-score').style.display = 'none';
  renderFill();
}

function renderFill() {
  const sentContainer = document.getElementById('fill-sentences');
  const bankContainer = document.getElementById('fill-wordbank');
  if (fillData.length === 0) {
    sentContainer.innerHTML = '<p style="color:var(--text-light);text-align:center">Nhấn "Tạo bài mới" để bắt đầu</p>';
    bankContainer.innerHTML = '';
    return;
  }
  // Word bank = shuffled answers
  const answers = shuffle([...new Set(fillData.filter(f=>f.answer).map(f=>f.answer))]);
  bankContainer.innerHTML = answers.map(a =>
    `<div class="word-chip" id="chip-${a}" onclick="fillChipClick('${a.replace(/'/g,"\\'")}')">
      ${a} <button style="background:none;border:none;font-size:0.7rem;cursor:pointer"
        onclick="event.stopPropagation();speak('${a.replace(/'/g,"\\'")}')">🔊</button>
    </div>`
  ).join('');
  sentContainer.innerHTML = fillData.map((item, i) => {
    if (!item.answer) {
      // No blank - show full sentence for reference
      return `<div class="fill-sentence" style="opacity:0.6">
        <span style="font-size:0.75rem;color:var(--text-light)">${i+1}. </span>
        <span style="font-size:1.1rem;font-weight:700">${item.zh}</span>
        <span class="fill-py">${item.py}</span>
        <span class="fill-vi">${item.vi}</span>
      </div>`;
    }
    const before = item.zh.substring(0, item.zh.indexOf(item.answer));
    const after = item.zh.substring(item.zh.indexOf(item.answer) + item.answer.length);
    const filled = fillState[i] || '';
    return `<div class="fill-sentence">
      <span style="font-size:0.75rem;color:var(--text-light)">${i+1}. </span>
      <span style="font-size:1.1rem">${before}</span>
      <span class="fill-blank ${filled?'filled':''}" id="blank-${i}" onclick="clearBlank(${i})" data-idx="${i}">${filled || '___'}</span>
      <span style="font-size:1.1rem">${after}</span>
      <span class="fill-py">${item.py}</span>
      <span class="fill-vi">${item.vi}</span>
    </div>`;
  }).join('');
}

function fillChipClick(word) {
  // Find first empty blank that accepts this word
  const emptyIdx = fillState.findIndex((v,i) => v === null && fillData[i].answer);
  if (emptyIdx === -1) return;
  fillState[emptyIdx] = word;
  const chip = document.getElementById('chip-' + word);
  if (chip) chip.classList.add('used');
  renderFill();
}

function clearBlank(idx) {
  const word = fillState[idx];
  if (!word) return;
  fillState[idx] = null;
  const chip = document.getElementById('chip-' + word);
  if (chip) chip.classList.remove('used');
  renderFill();
}

function checkFill() {
  let correct = 0, total = 0;
  fillData.forEach((item, i) => {
    if (!item.answer) return;
    total++;
    const blank = document.getElementById('blank-' + i);
    if (!blank) return;
    if (fillState[i] === item.answer) {
      correct++;
      blank.classList.add('correct');
      blank.classList.remove('wrong','filled');
    } else {
      blank.classList.add('wrong');
      blank.classList.remove('correct','filled');
      if (!fillState[i]) blank.textContent = '?' ;
      // Show hint
      blank.title = 'Đáp án: ' + item.answer;
    }
  });
  const sb = document.getElementById('fill-score');
  const pct = total ? Math.round(correct/total*100) : 0;
  sb.style.display = 'inline-block';
  sb.textContent = `✅ ${correct}/${total} — ${pct}%`;
  sb.style.background = pct>=80?'#d4edda':pct>=50?'#fff3cd':'#f8d7da';
  sb.style.color = pct>=80?'#155724':pct>=50?'#856404':'#721c24';
}

function resetFill() {
  fillState = new Array(fillData.length).fill(null);
  document.getElementById('fill-score').style.display = 'none';
  renderFill();
}

// Init exercises on load
function initExercises() {
  populateExLessonSelects();
  renderFill();
}



// ===================================================
// PHONETICS DATA & RENDER
