// ===================================================
const EX1 = [
  {q:'你好', a:'nǐ hǎo'},
  {q:'汉语', a:'hànyǔ'},
  {q:'老师', a:'lǎoshī'},
  {q:'学校', a:'xuéxiào'},
  {q:'邮局', a:'yóujú'},
  {q:'苹果', a:'píngguǒ'},
  {q:'便宜', a:'piányi'},
  {q:'一共', a:'yígòng'},
  {q:'对不起', a:'duìbuqǐ'},
  {q:'请问', a:'qǐngwèn'},
];

const EX2 = [
  {q:'你好 (nǐ hǎo)', a:'ní hǎo'},
  {q:'我很好 (wǒ hěn hǎo)', a:'wó hén hǎo'},
  {q:'一斤', a:'yì jīn'},
  {q:'一个', a:'yí ge'},
  {q:'一共', a:'yí gòng'},
  {q:'不忙', a:'bù máng'},
  {q:'不是', a:'bú shì'},
  {q:'不去', a:'bú qù'},
];

const EX3 = [
  {words:'汉语 / 难 / 不太', a:'汉语不太难。'},
  {words:'去 / 你 / 哪儿', a:'你去哪儿？'},
  {words:'我 / 老师 / 这 / 是 / 的 / 书', a:'这是我老师的书。'},
  {words:'钱 / 一斤 / 苹果 / 多少', a:'苹果一斤多少钱？'},
  {words:'吃饭 / 食堂 / 我 / 去 / 中午', a:'中午我去食堂吃饭。'},
  {words:'包子 / 两个 / 一碗 / 我 / 要 / 汤 / 和', a:'我要两个包子和一碗汤。'},
];

function renderExercises() {
  // Ex1
  const ex1 = document.getElementById('ex1');
  EX1.forEach((q, i) => {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    row.innerHTML = `<label class="q-label"><strong>${i+1}.</strong> <span style="font-size:1.1rem;font-weight:700">${q.q}</span> → <button class="speak-btn" onclick="speak('${q.q}')">🔊</button></label>
    <input type="text" class="answer-input" data-ans="${q.a}" placeholder="Nhập pinyin có thanh điệu...">`;
    ex1.appendChild(row);
  });

  // Ex2
  const ex2 = document.getElementById('ex2');
  EX2.forEach((q, i) => {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    row.innerHTML = `<label class="q-label"><strong>${i+1}.</strong> ${q.q} → <button class="speak-btn" onclick="speak('${q.q.split(' ')[0]}')">🔊</button></label>
    <input type="text" class="answer-input" data-ans="${q.a}" placeholder="Đọc thực tế là...">`;
    ex2.appendChild(row);
  });

  // Ex3
  const ex3 = document.getElementById('ex3');
  EX3.forEach((q, i) => {
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    row.innerHTML = `<label class="q-label"><strong>${i+1}.</strong> <em style="color:var(--mid)">${q.words}</em></label>
    <input type="text" class="answer-input" data-ans="${q.a}" placeholder="Viết câu đúng...">`;
    ex3.appendChild(row);
  });
}

function checkInputs(containerId, scoreId, normalize) {
  const inputs = document.querySelectorAll('#' + containerId + ' .answer-input');
  let correct = 0;
  inputs.forEach(inp => {
    const ans = normalize(inp.value);
    const expected = normalize(inp.dataset.ans);
    if (ans === expected) { inp.classList.add('correct'); inp.classList.remove('wrong'); correct++; }
    else { inp.classList.add('wrong'); inp.classList.remove('correct'); inp.title = 'Đáp án: ' + inp.dataset.ans; }
  });
  const sb = document.getElementById(scoreId);
  const pct = Math.round(correct / inputs.length * 100);
  sb.style.display = 'inline-block';
  sb.textContent = `✅ ${correct}/${inputs.length} — ${pct}%`;
  sb.style.background = pct >= 80 ? '#d4edda' : pct >= 50 ? '#fff3cd' : '#f8d7da';
  sb.style.color = pct >= 80 ? '#155724' : pct >= 50 ? '#856404' : '#721c24';
}

const norm = s => s.trim().toLowerCase().replace(/\s+/g, ' ');
const normZh = s => s.trim().replace(/\s+/g, '').replace(/[。？！，、]/g, '');

function checkEx1() { checkInputs('ex1', 'score1', norm); }
function checkEx2() { checkInputs('ex2', 'score2', norm); }
function checkEx3() { checkInputs('ex3', 'score3', normZh); }

function checkDialog() {
  const answers = {
    d1_1:'买', d1_2:'多少', d1_3:'贵', d1_4:'吧', d1_5:'斤', d1_6:'共',
    d2_1:'贵', d2_2:'姓', d2_3:'叫', d2_4:'哪', d2_5:'是', d2_6:'吗', d2_7:'很', d2_8:'不'
  };
  let correct = 0, total = 0;
  for (const [id, ans] of Object.entries(answers)) {
    total++;
    const inp = document.getElementById(id);
    if (!inp) continue;
    if (inp.value.trim() === ans) { inp.classList.add('correct'); inp.classList.remove('wrong'); correct++; }
    else { inp.classList.add('wrong'); inp.classList.remove('correct'); inp.title = 'Đáp án: ' + ans; }
  }
  const sb = document.getElementById('scoreDialog');
  const pct = Math.round(correct / total * 100);
  sb.style.display = 'inline-block';
  sb.textContent = `✅ ${correct}/${total} — ${pct}%`;
  sb.style.background = pct >= 80 ? '#d4edda' : pct >= 50 ? '#fff3cd' : '#f8d7da';
  sb.style.color = pct >= 80 ? '#155724' : pct >= 50 ? '#856404' : '#721c24';
}

// ===================================================
// DIALOGUE RENDER
// ===================================================
function renderDialogues() {
  const container = document.getElementById('dialogueContainer');
  container.innerHTML = '';
  DIALOGUE_DATA.forEach((dlg, di) => {
    const sec = document.createElement('div');
    sec.className = 'lt-section';

    const bodyId = 'dlg-body-' + di;
    const collapsed = di > 0;
    const hdrDiv = document.createElement('div');
    hdrDiv.className = 'dialogue-lesson-hdr' + (collapsed ? ' collapsed' : '');
    hdrDiv.onclick = () => toggleDialogue(di);
    hdrDiv.innerHTML =
      '<span style="font-size:1.2rem">\u{1F4AC}</span> ' +
      '<strong>' + dlg.lesson + '</strong>' +
      '<span style="font-size:0.82rem;opacity:0.75;margin-left:8px">' + dlg.title + '</span>' +
      '<span class="toggle-icon" style="margin-left:auto">&#9660;</span>';
    sec.appendChild(hdrDiv);

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'dialogue-body' + (collapsed ? ' hidden' : '');
    bodyDiv.id = bodyId;

    const cards = document.createElement('div');
    cards.className = 'zh-cards';
    cards.style.marginTop = '8px';

    dlg.lines.forEach((line, li) => {
      const zhEsc = line.zh.replace(/'/g, "\\'");
      const pyEsc = line.py.replace(/'/g, "\\'");
      const viEsc = line.vi.replace(/'/g, "\\'");
      const spk = line.s || 'A';
      const spkClass = 'lt-badge spk-' + spk.toLowerCase();

      const card = document.createElement('div');
      card.className = 'zh-card lt-card';
      card.innerHTML =
        '<div class="zh-card-top">' +
          '<span class="' + spkClass + '" style="flex-shrink:0">' + spk + '</span>' +
          '<span class="zh-char" onclick="showStrokeModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',\'Hội thoại\')" title="Xem n\xe9t viết">' + line.zh + '</span>' +
          '<div class="zh-card-actions-inline">' +
            '<button class="dl-btn dl-btn-speak" onclick="speak(\'' + zhEsc + '\')">\u{1F50A}</button>' +
            '<button class="dl-btn dl-btn-practice" onclick="openSpeakModal(\'' + zhEsc + '\',\'' + pyEsc + '\',\'' + viEsc + '\',' + di + ',' + li + ')">\u{1F3A4} Luyện n\xf3i</button>' +
          '</div>' +
        '</div>' +
        '<div class="zh-card-py">' + line.py + '</div>' +
        '<div class="zh-card-vi">' + line.vi + '</div>';
      cards.appendChild(card);
    });

    bodyDiv.appendChild(cards);

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;gap:8px;margin-top:12px;flex-wrap:wrap';
    actions.innerHTML =
      '<button class="stroke-ctrl-btn btn-speak-modal" onclick="playFullDialogue(' + di + ')" style="font-size:0.82rem;padding:7px 14px">&#9654; Nghe to\xe0n bộ</button>' +
      '<button class="stroke-ctrl-btn btn-quiz" onclick="practiceDialogue(' + di + ')" style="font-size:0.82rem;padding:7px 14px">\u{1F3A4} Luyện n\xf3i cả đoạn</button>';
    bodyDiv.appendChild(actions);

    sec.appendChild(bodyDiv);
    container.appendChild(sec);
  });
}

function toggleDialogue(idx) {
  const body = document.getElementById('dlg-body-' + idx);
  const hdr = body.previousElementSibling;
  body.classList.toggle('hidden');
  hdr.classList.toggle('collapsed');
}

function playFullDialogue(di) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const lines = DIALOGUE_DATA[di].lines;
  let idx = 0;
  function playOne() {
    if (idx >= lines.length) return;
    const utt = new SpeechSynthesisUtterance(lines[idx].zh);
    utt.lang = 'zh-CN';
    if (ttsVoice) utt.voice = ttsVoice;
    utt.rate = getRate();
    utt.onend = () => { idx++; setTimeout(playOne, 600); };
    window.speechSynthesis.speak(utt);
  }
  playOne();
}

// ===================================================
// SPEAK PRACTICE CARDS RENDER
