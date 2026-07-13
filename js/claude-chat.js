// assistant-chat.js — Tro Ly Tieng Trung (Google Gemini 2.0 Flash)
(function () {
  'use strict';

  var GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  var CC_HISTORY = [];
  var CC_SENDING = false;
  var msgId = 0;
  var LS_KEY = 'zh_gemini_key_v2';

  var SYSTEM_PROMPT =
    'Ban la tro ly hoc tieng Trung chuyen nghiep cho hoc vien Viet Nam trinh do so cap.\n\n' +
    'KHI nguoi dung nhap TU hoac CAU tieng Viet can dich/tra, hay tra loi theo dung format sau:\n\n' +
    '**Tieng Viet:** [tu/cau goc]\n' +
    '**Tieng Trung:** [ban dich tieng Trung]\n' +
    '**Phien am:** [pinyin co dau thanh day du]\n' +
    '**Cach doc:** [giai thich cach phat am tung am tiet, thanh dieu]\n\n' +
    '---\n' +
    '[Giai thich them neu can: loai tu, vi du cau, meo nho]\n\n' +
    'KHI nguoi dung hoi ve ngu phap, van hoa, hoac cau hoi khac -> tra loi truc tiep.\n' +
    'Luon dung tieng Viet de giai thich. Dung **bold** cho label, - cho danh sach.';

  function getKey() { return localStorage.getItem(LS_KEY) || ''; }

  function validateKey(k) {
    k = (k || '').trim();
    if (!k || k.length < 10) return 'Vui long nhap API Key';
    return null;
  }

  window.saveCCApiKey = function () { saveKeyFromInput('ccApiKeyInput'); };
  window.saveCCApiKeyFromSettings = function () { saveKeyFromInput('ccApiKeyInputSettings'); };

  function saveKeyFromInput(inputId) {
    var el = document.getElementById(inputId);
    var k = el ? el.value.trim() : '';
    var err = validateKey(k);
    if (err) { showKeyError(err); return; }
    localStorage.setItem(LS_KEY, k);
    if (el) el.value = '';
    refreshView();
    addSysMsg('Da luu API Key. San sang ho tro hoc tieng Trung!');
  }

  function showKeyError(msg) {
    var el = document.getElementById('ccKeyError');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
    else alert(msg);
  }

  window.clearCCApiKey = function () {
    if (!confirm('Xoa API Key da luu?')) return;
    localStorage.removeItem(LS_KEY);
    CC_HISTORY = [];
    var m = document.getElementById('ccMessages');
    if (m) m.innerHTML = '';
    refreshView();
  };

  function refreshView() {
    var key   = getKey();
    var setup = document.getElementById('ccSetup');
    var body  = document.getElementById('ccChatBody');
    var info  = document.getElementById('ccKeyInfo');
    var err   = document.getElementById('ccKeyError');
    if (!setup || !body) return;
    if (err) err.style.display = 'none';
    if (key) {
      setup.style.display = 'none';
      body.style.display  = 'flex';
      if (info) info.textContent = 'Gemini ket noi · ' + key.slice(0,8) + '...';
    } else {
      setup.style.display = 'flex';
      body.style.display  = 'none';
      if (info) info.textContent = 'Chua ket noi';
    }
  }

  window.toggleCCSettings = function () {
    var p = document.getElementById('ccSettingsPanel');
    if (p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
  };

  window.onClaudeTabOpen = function () { refreshView(); };

  /* Markdown renderer */
  function esc(t) {
    return String(t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function inlineFmt(s) {
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*(.+?)\*/g,     '<em>$1</em>');
    s = s.replace(/`([^`]+)`/g,     '<code>$1</code>');
    return s;
  }

  function renderMarkdown(raw) {
    var lines = raw.split('\n');
    var html  = '';
    var inUL  = false;

    function closeList() { if (inUL) { html += '</ul>'; inUL = false; } }

    lines.forEach(function (line) {
      var bullet = line.match(/^[*\-]\s+([\s\S]+)/);
      var h3     = line.match(/^###\s+([\s\S]+)/);
      var h2     = line.match(/^##\s+([\s\S]+)/);
      var hr     = /^---+$/.test(line.trim());
      var empty  = line.trim() === '';

      if (bullet) {
        if (!inUL) { html += '<ul class="cc-ul">'; inUL = true; }
        html += '<li>' + inlineFmt(esc(bullet[1])) + '</li>';
      } else if (h3) {
        closeList();
        html += '<div class="cc-h3">' + inlineFmt(esc(h3[1])) + '</div>';
      } else if (h2) {
        closeList();
        html += '<div class="cc-h2">' + inlineFmt(esc(h2[1])) + '</div>';
      } else if (hr) {
        closeList();
        html += '<hr class="cc-hr">';
      } else if (empty) {
        closeList();
        html += '<div class="cc-gap"></div>';
      } else {
        closeList();
        html += '<div class="cc-line">' + inlineFmt(esc(line)) + '</div>';
      }
    });
    closeList();
    return html;
  }

  /* Extract Chinese for TTS */
  function extractChinese(text) {
    var m = text.match(/Tieng Trung[^:]*:\s*\*?\*?([^\n*]+)/);
    if (m) return m[1].trim();
    var chars = text.match(/[一-鿿㐀-䶿]+/g);
    return chars ? chars.join('') : '';
  }

  /* TTS */
  window.ccSpeak = function (text) {
    if (!text) return;
    if (typeof speak === 'function') { speak(text); return; }
    var synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    var utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'zh-CN';
    utt.rate = 0.85;
    var voices = synth.getVoices();
    var cv = voices.find(function (v) { return /zh/i.test(v.lang); });
    if (cv) utt.voice = cv;
    synth.speak(utt);
  };

  /* Message rendering */
  function buildAIHtml(content, speakText) {
    var btn = speakText
      ? '<div class="cc-msg-actions"><button class="cc-speak-btn" onclick="ccSpeak(\'' +
        speakText.replace(/\\/g,'\\\\').replace(/'/g,"\\'") +
        '\')" title="Phat am tieng Trung">&#128266; Phat am</button></div>'
      : '';
    return '<div class="cc-avatar-wrap"><span class="cc-av">&#10024;</span></div>' +
           '<div class="cc-bubble-wrap"><div class="cc-bubble cc-bubble-ai">' +
           content + '</div>' + btn + '</div>';
  }

  function appendMsg(role, content, speakText) {
    var id   = 'cm' + (++msgId);
    var wrap = document.getElementById('ccMessages');
    if (!wrap) return id;
    var div  = document.createElement('div');
    div.id   = id;
    div.className = 'cc-msg cc-msg-' + role;
    if (role === 'ai') {
      div.innerHTML = buildAIHtml(content, speakText);
    } else if (role === 'user') {
      div.innerHTML = '<div class="cc-bubble cc-bubble-user">' + content + '</div>';
    } else {
      div.innerHTML = '<div class="cc-sys-msg">' + content + '</div>';
    }
    wrap.appendChild(div);
    wrap.scrollTop = wrap.scrollHeight;
    return id;
  }

  function updateMsg(id, content, speakText) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = buildAIHtml(content, speakText);
    var wrap = document.getElementById('ccMessages');
    if (wrap) wrap.scrollTop = wrap.scrollHeight;
  }

  function addSysMsg(text) { appendMsg('sys', esc(text)); }

  /* Send */
  window.sendCCMessage = async function () {
    if (CC_SENDING) return;
    var key = getKey();
    if (!key) { refreshView(); return; }
    var input = document.getElementById('ccInput');
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;

    input.value = '';
    autoH(input);
    CC_SENDING = true;
    var btn = document.getElementById('ccSendBtn');
    if (btn) btn.disabled = true;

    if (CC_HISTORY.length > 20) CC_HISTORY = CC_HISTORY.slice(-20);
    CC_HISTORY.push({ role: 'user', parts: [{ text: text }] });
    appendMsg('user', esc(text));

    var loadHtml = '<div class="cc-typing"><span></span><span></span><span></span></div>';
    var loadId = appendMsg('ai', loadHtml);

    try {
      var res = await fetch(GEMINI_URL + '?key=' + encodeURIComponent(key), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: CC_HISTORY,
          generationConfig: { maxOutputTokens: 1024 }
        })
      });

      if (!res.ok) {
        var ed = {};
        try { ed = await res.json(); } catch (e) {}
        var em = (ed.error && ed.error.message) || ('HTTP ' + res.status);
        if (res.status === 400 || res.status === 401) {
          em = 'API Key khong hop le. Kiem tra lai key tu aistudio.google.com';
        } else if (res.status === 429) {
          em = 'Qua nhieu yeu cau — vui long doi roi thu lai.';
        }
        throw new Error(em);
      }

      var data  = await res.json();
      var reply = data.candidates[0].content.parts[0].text;
      CC_HISTORY.push({ role: 'model', parts: [{ text: reply }] });
      var cn = extractChinese(reply);
      updateMsg(loadId, renderMarkdown(reply), cn || null);

    } catch (e) {
      updateMsg(loadId, '<div class="cc-error">Loi: ' + esc(e.message) + '</div>', null);
    }

    CC_SENDING = false;
    if (btn) btn.disabled = false;
    if (input) input.focus();
  };

  /* Quick prompts */
  window.ccQuickPrompt = function (type) {
    var map = {
      'dich':      'Dich sang tieng Trung: ',
      'tra':       'Tra tu: ',
      'phatam':    'Giai thich phat am: ',
      'nguphap':   'Giai thich ngu phap: ',
      'vidu':      'Dat cau vi du voi tu: ',
      'thanhdieu': 'Giai thich 4 thanh dieu tieng Trung cho toi'
    };
    var input = document.getElementById('ccInput');
    if (!input) return;
    var txt = map[type] || '';
    input.value = txt;
    autoH(input);
    input.focus();
    input.selectionStart = input.selectionEnd = txt.length;
    if (txt.slice(-1) !== ' ') window.sendCCMessage();
  };

  window.clearCCHistory = function () {
    CC_HISTORY = [];
    var m = document.getElementById('ccMessages');
    if (m) m.innerHTML = '';
    addSysMsg('Lich su da xoa.');
  };

  function autoH(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  function init() {
    var input = document.getElementById('ccInput');
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); window.sendCCMessage(); }
      });
      input.addEventListener('input', function () { autoH(this); });
    }
    // Xoa key Anthropic cu neu con ton tai
    localStorage.removeItem('cc_api_key');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
