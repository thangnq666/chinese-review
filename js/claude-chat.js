// ===================================================
// TRỢ LÝ TIẾNG TRUNG — Google Gemini 2.5
// v6: model mới + tự fallback, lưu lịch sử, copy/phát âm/dừng
// ===================================================
(function () {
  'use strict';

  // gemini-2.0-flash-lite đã bị Google tắt (06/2026) → dùng 2.5 + chuỗi dự phòng
  var MODEL_CHAIN = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-flash-latest'];
  var API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/';

  var LS_KEY     = 'zh_gemini_key_v2';
  var LS_MODEL   = 'zh_gemini_model_v1';
  var LS_HISTORY = 'zh_cc_history_v1';
  var MAX_TURNS  = 40;   // số message tối đa lưu/gửi

  var CC_HISTORY = [];   // [{role:'user'|'model', text:'...'}]
  var CC_SENDING = false;
  var abortCtrl  = null;
  var msgId = 0;

  var SYSTEM_PROMPT =
    'Bạn là trợ lý học tiếng Trung chuyên nghiệp cho học viên Việt Nam trình độ sơ cấp (giáo trình Hán ngữ quyển 1-2).\n\n' +
    'KHI người dùng nhập TỪ hoặc CÂU tiếng Việt cần dịch/tra, trả lời đúng format:\n\n' +
    '**Tiếng Việt:** [từ/câu gốc]\n' +
    '**Tiếng Trung:** [bản dịch tiếng Trung]\n' +
    '**Phiên âm:** [pinyin có dấu thanh đầy đủ]\n' +
    '**Cách đọc (theo tiếng Việt):** [phiên âm bồi bằng chữ tiếng Việt mô phỏng cách đọc, ví dụ: 你好 → "ní hảo", 谢谢 → "xiê xiệ"]\n' +
    '**Giải thích phát âm:** [giải thích từng âm tiết, thanh điệu, so sánh với âm tiếng Việt]\n\n' +
    '---\n' +
    '[Giải thích thêm nếu cần: loại từ, ví dụ câu, mẹo nhớ]\n\n' +
    'KHI người dùng hỏi về ngữ pháp, văn hóa, hoặc câu hỏi khác → trả lời trực tiếp, ngắn gọn, dễ hiểu.\n' +
    'Luôn dùng tiếng Việt để giải thích. Dùng **bold** cho nhãn, - cho danh sách.';

  /* ============ KEY & MODEL ============ */
  function getKey()   { return localStorage.getItem(LS_KEY) || ''; }
  function getModel() {
    var m = localStorage.getItem(LS_MODEL);
    return MODEL_CHAIN.indexOf(m) >= 0 ? m : MODEL_CHAIN[0];
  }
  window.setCCModel = function (m) {
    if (MODEL_CHAIN.indexOf(m) >= 0) localStorage.setItem(LS_MODEL, m);
    refreshView();
    addSysMsg('Đã chuyển sang model ' + m);
  };

  function validateKey(k) {
    k = (k || '').trim();
    if (!k || k.length < 10) return 'Vui lòng nhập API Key hợp lệ';
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
    var panel = document.getElementById('ccSettingsPanel');
    if (panel) panel.style.display = 'none';
    refreshView();
    addSysMsg('Đã lưu API Key. Sẵn sàng hỗ trợ học tiếng Trung!');
  }

  function showKeyError(msg) {
    var el = document.getElementById('ccKeyError');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
    else alert(msg);
  }

  window.clearCCApiKey = function () {
    if (!confirm('Xóa API Key đã lưu?')) return;
    localStorage.removeItem(LS_KEY);
    clearHistoryData();
    var m = document.getElementById('ccMessages');
    if (m) m.innerHTML = '';
    refreshView();
  };

  /* ============ LỊCH SỬ (localStorage) ============ */
  function loadHistory() {
    try {
      var raw = localStorage.getItem(LS_HISTORY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.slice(-MAX_TURNS) : [];
    } catch (e) { return []; }
  }
  function saveHistory() {
    try {
      localStorage.setItem(LS_HISTORY, JSON.stringify(CC_HISTORY.slice(-MAX_TURNS)));
    } catch (e) { /* localStorage đầy → bỏ qua */ }
  }
  function clearHistoryData() {
    CC_HISTORY = [];
    localStorage.removeItem(LS_HISTORY);
  }

  window.clearCCHistory = function () {
    if (CC_HISTORY.length && !confirm('Xóa toàn bộ lịch sử hội thoại?')) return;
    clearHistoryData();
    var m = document.getElementById('ccMessages');
    if (m) m.innerHTML = '';
    addSysMsg('Lịch sử đã xóa.');
  };

  /* ============ VIEW ============ */
  function refreshView() {
    var key   = getKey();
    var setup = document.getElementById('ccSetup');
    var body  = document.getElementById('ccChatBody');
    var info  = document.getElementById('ccKeyInfo');
    var err   = document.getElementById('ccKeyError');
    var sel   = document.getElementById('ccModelSel');
    if (sel) sel.value = getModel();
    if (!setup || !body) return;
    if (err) err.style.display = 'none';
    if (key) {
      setup.style.display = 'none';
      body.style.display  = 'flex';
      if (info) info.textContent = getModel() + ' · ' + key.slice(0, 8) + '...';
    } else {
      setup.style.display = 'flex';
      body.style.display  = 'none';
      if (info) info.textContent = 'Chưa kết nối';
    }
  }

  window.toggleCCSettings = function () {
    var p = document.getElementById('ccSettingsPanel');
    if (p) p.style.display = (p.style.display === 'block') ? 'none' : 'block';
  };

  window.onClaudeTabOpen = function () {
    refreshView();
    var input = document.getElementById('ccInput');
    if (input && getKey()) input.focus();
  };

  /* ============ MARKDOWN ============ */
  function esc(t) {
    return String(t)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function inlineFmt(s) {
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    return s;
  }

  function renderMarkdown(raw) {
    var lines = raw.split('\n');
    var html  = '';
    var inUL  = false, inOL = false;

    function closeLists() {
      if (inUL) { html += '</ul>'; inUL = false; }
      if (inOL) { html += '</ol>'; inOL = false; }
    }

    lines.forEach(function (line) {
      var bullet = line.match(/^\s*[*\-•]\s+(.+)/);
      var num    = line.match(/^\s*(\d+)[.)]\s+(.+)/);
      var h3     = line.match(/^###\s+(.+)/);
      var h2     = line.match(/^##\s+(.+)/);
      var hr     = /^\s*[-*_]{3,}\s*$/.test(line);
      var empty  = line.trim() === '';

      if (bullet) {
        if (inOL) { html += '</ol>'; inOL = false; }
        if (!inUL) { html += '<ul class="cc-ul">'; inUL = true; }
        html += '<li>' + inlineFmt(esc(bullet[1])) + '</li>';
      } else if (num) {
        if (inUL) { html += '</ul>'; inUL = false; }
        if (!inOL) { html += '<ol class="cc-ul">'; inOL = true; }
        html += '<li>' + inlineFmt(esc(num[2])) + '</li>';
      } else if (h3) {
        closeLists();
        html += '<div class="cc-h3">' + inlineFmt(esc(h3[1])) + '</div>';
      } else if (h2) {
        closeLists();
        html += '<div class="cc-h2">' + inlineFmt(esc(h2[1])) + '</div>';
      } else if (hr) {
        closeLists();
        html += '<hr class="cc-hr">';
      } else if (empty) {
        closeLists();
        html += '<div class="cc-gap"></div>';
      } else {
        closeLists();
        html += '<div class="cc-line">' + inlineFmt(esc(line)) + '</div>';
      }
    });
    closeLists();
    return html;
  }

  /* ============ TTS ============ */
  function extractChinese(text) {
    var m = text.match(/Tiếng Trung[^:：]*[:：]\s*\*?\*?([^\n*]+)/i);
    if (m) return m[1].trim();
    var chars = text.match(/[一-鿿㐀-䶿]+/g);
    return chars ? chars.join('') : '';
  }

  function ccSpeakText(text) {
    if (!text) return;
    if (typeof speak === 'function') { speak(text); return; }
    var synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    var utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'zh-CN';
    utt.rate = 0.85;
    synth.speak(utt);
  }

  /* ============ MESSAGE RENDERING (DOM, không innerHTML cho text) ============ */
  function scrollBottom() {
    var wrap = document.getElementById('ccMessages');
    if (wrap) wrap.scrollTop = wrap.scrollHeight;
  }

  function makeActionBtn(label, title, fn) {
    var b = document.createElement('button');
    b.className = 'cc-speak-btn';
    b.innerHTML = label;
    b.title = title;
    b.addEventListener('click', fn);
    return b;
  }

  // role: 'user' | 'ai' | 'sys'
  function appendMsg(role, rawText, opts) {
    opts = opts || {};
    var id   = 'cm' + (++msgId);
    var wrap = document.getElementById('ccMessages');
    if (!wrap) return null;
    var div  = document.createElement('div');
    div.id   = id;
    div.className = 'cc-msg cc-msg-' + role;

    if (role === 'ai') {
      fillAIMsg(div, rawText, opts);
    } else if (role === 'user') {
      var bub = document.createElement('div');
      bub.className = 'cc-bubble cc-bubble-user';
      bub.textContent = rawText;
      div.appendChild(bub);
    } else {
      var sys = document.createElement('div');
      sys.className = 'cc-sys-msg';
      sys.textContent = rawText;
      div.appendChild(sys);
    }
    wrap.appendChild(div);
    scrollBottom();
    return id;
  }

  // Dựng nội dung message AI: bubble + hàng nút hành động
  function fillAIMsg(div, rawText, opts) {
    opts = opts || {};
    div.innerHTML = '';

    var avWrap = document.createElement('div');
    avWrap.className = 'cc-avatar-wrap';
    avWrap.innerHTML = '<span class="cc-av">✨</span>';
    div.appendChild(avWrap);

    var bw = document.createElement('div');
    bw.className = 'cc-bubble-wrap';
    var bub = document.createElement('div');
    bub.className = 'cc-bubble cc-bubble-ai';

    if (opts.typing) {
      bub.innerHTML = '<div class="cc-typing"><span></span><span></span><span></span></div>';
      bw.appendChild(bub);
      div.appendChild(bw);
      return;
    }
    if (opts.error) {
      bub.innerHTML = '<div class="cc-error">⚠️ ' + esc(rawText) + '</div>';
      bw.appendChild(bub);
      var acts = document.createElement('div');
      acts.className = 'cc-msg-actions';
      acts.appendChild(makeActionBtn('🔄 Thử lại', 'Gửi lại tin nhắn cuối', function () { retryLast(); }));
      bw.appendChild(acts);
      div.appendChild(bw);
      return;
    }

    bub.innerHTML = renderMarkdown(rawText);

    // Hàng nút hành động đặt TRÊN nội dung trả lời
    var acts = document.createElement('div');
    acts.className = 'cc-msg-actions cc-msg-actions-top';
    var cn = extractChinese(rawText);
    if (cn) {
      acts.appendChild(makeActionBtn('🔊 Phát âm', 'Phát âm tiếng Trung', function () { ccSpeakText(cn); }));
    }
    acts.appendChild(makeActionBtn('📋 Copy', 'Sao chép nội dung', function () {
      var self = this;
      (navigator.clipboard ? navigator.clipboard.writeText(rawText) : Promise.reject())
        .then(function () { self.innerHTML = '✅ Đã copy'; setTimeout(function () { self.innerHTML = '📋 Copy'; }, 1500); })
        .catch(function () {
          var ta = document.createElement('textarea');
          ta.value = rawText; document.body.appendChild(ta);
          ta.select(); document.execCommand('copy'); ta.remove();
          self.innerHTML = '✅ Đã copy'; setTimeout(function () { self.innerHTML = '📋 Copy'; }, 1500);
        });
    }));
    bw.appendChild(acts);
    bw.appendChild(bub);
    div.appendChild(bw);
  }

  function updateAIMsg(id, rawText, opts) {
    var el = document.getElementById(id);
    if (!el) return;
    fillAIMsg(el, rawText, opts);
    scrollBottom();
  }

  function addSysMsg(text) { appendMsg('sys', text); }

  // Vẽ lại toàn bộ hội thoại từ lịch sử đã lưu
  function renderHistory() {
    var wrap = document.getElementById('ccMessages');
    if (!wrap || !CC_HISTORY.length) return;
    wrap.innerHTML = '';
    CC_HISTORY.forEach(function (m) {
      appendMsg(m.role === 'user' ? 'user' : 'ai', m.text);
    });
    addSysMsg('— Tiếp tục hội thoại trước —');
  }

  /* ============ GỬI TIN NHẮN ============ */
  function setSendingUI(sending) {
    CC_SENDING = sending;
    var btn = document.getElementById('ccSendBtn');
    if (!btn) return;
    if (sending) {
      btn.innerHTML = '⏹';
      btn.title = 'Dừng';
    } else {
      btn.innerHTML =
        '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="22" y1="2" x2="11" y2="13"></line>' +
        '<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>';
      btn.title = 'Gửi (Enter)';
    }
  }

  function historyToContents() {
    return CC_HISTORY.slice(-MAX_TURNS).map(function (m) {
      return { role: m.role, parts: [{ text: m.text }] };
    });
  }

  // Gọi API với chuỗi model dự phòng: model đang chọn → các model còn lại
  async function callGemini(key, signal) {
    var chain = [getModel()].concat(MODEL_CHAIN.filter(function (m) { return m !== getModel(); }));
    var lastErr = null;

    for (var i = 0; i < chain.length; i++) {
      var model = chain[i];
      var res;
      try {
        res = await fetch(API_BASE + model + ':generateContent?key=' + encodeURIComponent(key), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: signal,
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: historyToContents(),
            generationConfig: { maxOutputTokens: 2048, temperature: 0.6 }
          })
        });
      } catch (e) {
        if (e.name === 'AbortError') throw e;
        lastErr = new Error('Không kết nối được mạng. Kiểm tra Internet rồi thử lại.');
        continue;
      }

      if (res.ok) {
        var data = await res.json();
        if (data.promptFeedback && data.promptFeedback.blockReason) {
          throw new Error('Nội dung bị chặn bởi bộ lọc an toàn (' + data.promptFeedback.blockReason + ')');
        }
        var cand = data.candidates && data.candidates[0];
        var parts = cand && cand.content && cand.content.parts;
        var text = parts ? parts.map(function (p) { return p.text || ''; }).join('') : '';
        if (!text) throw new Error('AI không trả về nội dung. Thử lại hoặc đổi model trong ⚙️.');
        // Model dùng thành công khác model đang chọn → ghi nhớ luôn
        if (model !== getModel()) {
          localStorage.setItem(LS_MODEL, model);
          refreshView();
        }
        return text;
      }

      // Lỗi HTTP
      var ed = {};
      try { ed = await res.json(); } catch (e2) {}
      var em = (ed.error && ed.error.message) || ('HTTP ' + res.status);

      if (res.status === 404) { lastErr = new Error(em); continue; } // model không tồn tại → thử model kế
      if (res.status === 429) throw new Error('Hết hạn mức miễn phí hôm nay (429). Chờ vài phút hoặc thử ngày mai.');
      if (res.status === 400 || res.status === 401 || res.status === 403) {
        throw new Error('API Key không hợp lệ hoặc hết hạn. Vào ⚙️ để cập nhật key mới từ aistudio.google.com');
      }
      throw new Error(em);
    }
    throw (lastErr || new Error('Không có model khả dụng.'));
  }

  window.sendCCMessage = async function () {
    // Đang gửi → nút hoạt động như nút DỪNG
    if (CC_SENDING) {
      if (abortCtrl) abortCtrl.abort();
      return;
    }
    var key = getKey();
    if (!key) { refreshView(); return; }
    var input = document.getElementById('ccInput');
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;

    input.value = '';
    autoH(input);
    setSendingUI(true);

    CC_HISTORY.push({ role: 'user', text: text });
    appendMsg('user', text);
    var loadId = appendMsg('ai', '', { typing: true });

    abortCtrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;

    try {
      var reply = await callGemini(key, abortCtrl && abortCtrl.signal);
      CC_HISTORY.push({ role: 'model', text: reply });
      saveHistory();
      updateAIMsg(loadId, reply);
    } catch (e) {
      if (e.name === 'AbortError') {
        CC_HISTORY.pop(); // bỏ tin nhắn user chưa được trả lời
        saveHistory();
        updateAIMsg(loadId, 'Đã dừng.', { error: true });
      } else {
        saveHistory();
        updateAIMsg(loadId, e.message, { error: true });
      }
    }

    abortCtrl = null;
    setSendingUI(false);
    if (input) input.focus();
  };

  // Gửi lại tin nhắn user cuối cùng (dùng khi lỗi)
  function retryLast() {
    if (CC_SENDING) return;
    // Tìm tin user cuối
    var lastUser = null;
    for (var i = CC_HISTORY.length - 1; i >= 0; i--) {
      if (CC_HISTORY[i].role === 'user') { lastUser = CC_HISTORY[i].text; break; }
    }
    if (!lastUser) return;
    // Cắt lịch sử đến trước tin đó rồi gửi lại
    CC_HISTORY = CC_HISTORY.slice(0, i);
    var input = document.getElementById('ccInput');
    if (input) { input.value = lastUser; }
    window.sendCCMessage();
  }

  /* ============ QUICK PROMPTS ============ */
  window.ccQuickPrompt = function (type) {
    var map = {
      'dich':      'Dịch sang tiếng Trung: ',
      'tra':       'Tra từ: ',
      'phatam':    'Giải thích phát âm: ',
      'nguphap':   'Giải thích ngữ pháp: ',
      'vidu':      'Đặt câu ví dụ với từ: ',
      'thanhdieu': 'Giải thích 4 thanh điệu tiếng Trung cho tôi'
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

  function autoH(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  /* ============ INIT ============ */
  function init() {
    var input = document.getElementById('ccInput');
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); window.sendCCMessage(); }
      });
      input.addEventListener('input', function () { autoH(this); });
    }
    // Enter để lưu key ở cả 2 ô nhập
    ['ccApiKeyInput', 'ccApiKeyInputSettings'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); saveKeyFromInput(id); }
      });
    });
    // Dọn key cũ không dùng nữa
    localStorage.removeItem('cc_api_key');

    // Khôi phục lịch sử hội thoại
    CC_HISTORY = loadHistory();
    if (getKey() && CC_HISTORY.length) renderHistory();
    refreshView();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
