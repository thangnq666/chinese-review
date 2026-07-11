// claude-chat.js — Claude AI Chat for Chinese Learning
// Calls Anthropic API directly from browser using user's own API key
(function () {
  'use strict';

  var CC_MODEL = 'claude-haiku-4-5-20251001';
  var CC_MAX_TOKENS = 1024;
  var CC_HISTORY = [];
  var CC_SENDING = false;
  var msgCounter = 0;

  var CC_SYSTEM =
    'Bạn là trợ lý học tiếng Trung chuyên nghiệp dành cho học viên Việt Nam đang học tiếng Trung sơ cấp.\n\n' +
    'Nhiệm vụ chính:\n' +
    '• Dịch Việt ↔ Trung: luôn kèm pinyin và nghĩa Việt\n' +
    '• Tra từ vựng: hiển thị "汉字 (pīnyīn) – [Loại từ] – Nghĩa tiếng Việt"\n' +
    '• Giải thích phát âm: thanh điệu, cách đọc, âm khó\n' +
    '• Giải thích ngữ pháp: ngắn gọn, có ví dụ thực tế\n' +
    '• Đặt câu ví dụ: đơn giản phù hợp trình độ sơ cấp\n\n' +
    'Quy tắc định dạng:\n' +
    '- Luôn trả lời bằng tiếng Việt\n' +
    '- Khi hiển thị từ tiếng Trung, luôn kèm pinyin trong ngoặc đơn\n' +
    '- Giữ câu trả lời ngắn gọn và thực tế\n' +
    '- Dùng • để liệt kê rõ ràng\n' +
    '- Đừng dùng markdown heading (##), dùng **bold** cho tiêu đề nhỏ';

  /* ────── API Key ────── */
  function getApiKey() {
    return localStorage.getItem('cc_api_key') || '';
  }

  function doSaveKey(key) {
    key = (key || '').trim();
    if (!key) { alert('Vui lòng nhập API Key'); return false; }
    if (!key.startsWith('sk-ant-')) {
      alert('API Key không hợp lệ. Key phải bắt đầu bằng sk-ant-'); return false;
    }
    localStorage.setItem('cc_api_key', key);
    return true;
  }

  window.saveCCApiKey = function () {
    var key = document.getElementById('ccApiKeyInput') && document.getElementById('ccApiKeyInput').value;
    if (doSaveKey(key)) {
      document.getElementById('ccApiKeyInput').value = '';
      refreshCCView();
      addSystemMsg('✅ Đã lưu API Key. Sẵn sàng hỗ trợ học tiếng Trung!');
    }
  };

  window.saveCCApiKeyFromSettings = function () {
    var key = document.getElementById('ccApiKeyInputSettings') && document.getElementById('ccApiKeyInputSettings').value;
    if (doSaveKey(key)) {
      document.getElementById('ccApiKeyInputSettings').value = '';
      toggleCCSettings();
      refreshCCView();
      addSystemMsg('✅ Đã cập nhật API Key mới.');
    }
  };

  window.clearCCApiKey = function () {
    if (!confirm('Xóa API Key đã lưu?')) return;
    localStorage.removeItem('cc_api_key');
    CC_HISTORY = [];
    var msgs = document.getElementById('ccMessages');
    if (msgs) msgs.innerHTML = '';
    refreshCCView();
  };

  /* ────── UI state ────── */
  function refreshCCView() {
    var key = getApiKey();
    var setup = document.getElementById('ccSetup');
    var chatBody = document.getElementById('ccChatBody');
    var keyInfo = document.getElementById('ccKeyInfo');
    if (!setup || !chatBody) return;
    if (key) {
      setup.style.display = 'none';
      chatBody.style.display = 'flex';
      if (keyInfo) keyInfo.textContent = 'Key: ' + key.substring(0, 14) + '···';
    } else {
      setup.style.display = 'flex';
      chatBody.style.display = 'none';
      if (keyInfo) keyInfo.textContent = 'Chưa cấu hình API Key';
    }
  }

  window.toggleCCSettings = function () {
    var p = document.getElementById('ccSettingsPanel');
    if (!p) return;
    p.style.display = (p.style.display === 'none' || p.style.display === '') ? 'block' : 'none';
  };

  window.onClaudeTabOpen = function () { refreshCCView(); };

  /* ────── Messages ────── */
  function esc(t) {
    return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function fmt(text) {
    var s = esc(text);
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*(.+?)\*/g,     '<em>$1</em>');
    s = s.replace(/`([^`\n]+)`/g,   '<code>$1</code>');
    // bullet lines → keep as-is with spacing
    s = s.replace(/^(•|-|–)\s/gm,   '<br>&bull; ');
    s = s.replace(/\n\n/g, '<br><br>');
    s = s.replace(/\n/g,   '<br>');
    return s;
  }

  function appendMsg(role, htmlContent) {
    var id = 'ccm' + (++msgCounter);
    var msgs = document.getElementById('ccMessages');
    if (!msgs) return id;
    var div = document.createElement('div');
    div.id = id;
    div.className = 'cc-msg cc-msg-' + role;
    if (role === 'assistant') {
      div.innerHTML = '<div class="cc-avatar">🤖</div><div class="cc-bubble">' + htmlContent + '</div>';
    } else if (role === 'user') {
      div.innerHTML = '<div class="cc-bubble">' + htmlContent + '</div>';
    } else {
      div.innerHTML = '<div class="cc-bubble cc-system">' + htmlContent + '</div>';
    }
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return id;
  }

  function addSystemMsg(text) { return appendMsg('system', esc(text)); }

  function updateMsgContent(id, htmlContent, role) {
    var el = document.getElementById(id);
    if (!el) return;
    if (role === 'assistant') {
      el.innerHTML = '<div class="cc-avatar">🤖</div><div class="cc-bubble">' + htmlContent + '</div>';
    }
    var msgs = document.getElementById('ccMessages');
    if (msgs) msgs.scrollTop = msgs.scrollHeight;
  }

  /* ────── Send ────── */
  window.sendCCMessage = async function () {
    if (CC_SENDING) return;
    var key = getApiKey();
    if (!key) { refreshCCView(); return; }

    var input = document.getElementById('ccInput');
    if (!input) return;
    var text = input.value.trim();
    if (!text) return;

    input.value = '';
    autoResizeInput(input);
    CC_SENDING = true;

    var btn = document.getElementById('ccSendBtn');
    if (btn) { btn.disabled = true; }

    // Keep last 20 messages (10 exchanges)
    if (CC_HISTORY.length > 20) CC_HISTORY = CC_HISTORY.slice(-20);

    CC_HISTORY.push({ role: 'user', content: text });
    appendMsg('user', esc(text));

    var loadId = appendMsg('assistant', '<span class="cc-loading">⏳</span> Đang xử lý...');

    try {
      var res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': key,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
          model: CC_MODEL,
          max_tokens: CC_MAX_TOKENS,
          system: CC_SYSTEM,
          messages: CC_HISTORY
        })
      });

      if (!res.ok) {
        var ed = {};
        try { ed = await res.json(); } catch(e) {}
        var em = (ed.error && ed.error.message) || ('HTTP ' + res.status);
        if (res.status === 401) em = 'API Key không hợp lệ hoặc hết hạn. Vui lòng kiểm tra lại.';
        else if (res.status === 429) em = 'Quá nhiều yêu cầu. Vui lòng đợi rồi thử lại.';
        else if (res.status === 403) em = 'API Key không có quyền. Kiểm tra lại tài khoản Anthropic.';
        throw new Error(em);
      }

      var data = await res.json();
      var reply = data.content[0].text;
      CC_HISTORY.push({ role: 'assistant', content: reply });
      updateMsgContent(loadId, fmt(reply), 'assistant');

    } catch (e) {
      updateMsgContent(loadId, '❌ <strong>Lỗi:</strong> ' + esc(e.message), 'assistant');
    }

    CC_SENDING = false;
    if (btn) btn.disabled = false;
    if (input) input.focus();
  };

  /* ────── Quick prompts ────── */
  window.ccQuickPrompt = function (type) {
    var map = {
      'dich':      'Dịch sang tiếng Trung: ',
      'tra':       'Tra từ và giải thích: ',
      'phatam':    'Giải thích phát âm của từ: ',
      'nguphap':   'Giải thích ngữ pháp câu: ',
      'vi-du':     'Đặt câu ví dụ với từ: ',
      'thanh-dieu':'Giải thích 4 thanh điệu tiếng Trung cho tôi'
    };
    var input = document.getElementById('ccInput');
    if (!input) return;
    var txt = map[type] || '';
    input.value = txt;
    autoResizeInput(input);
    input.focus();
    if (!txt || txt.endsWith(' ')) {
      input.selectionStart = input.selectionEnd = txt.length;
    } else {
      // Send immediately for self-contained prompts
      sendCCMessage();
    }
  };

  /* ────── Clear history ────── */
  window.clearCCHistory = function () {
    if (CC_HISTORY.length === 0) return;
    CC_HISTORY = [];
    var msgs = document.getElementById('ccMessages');
    if (msgs) msgs.innerHTML = '';
    addSystemMsg('💬 Lịch sử đã xóa. Bắt đầu cuộc trò chuyện mới!');
  };

  /* ────── Auto-resize textarea ────── */
  function autoResizeInput(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  /* ────── Init ────── */
  function initCCInput() {
    var input = document.getElementById('ccInput');
    if (!input) return;
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        window.sendCCMessage();
      }
    });
    input.addEventListener('input', function () { autoResizeInput(this); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCCInput);
  } else {
    initCCInput();
  }

})();
