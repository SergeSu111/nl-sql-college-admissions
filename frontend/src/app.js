const messagesEl = document.getElementById('messages');
const inputEl    = document.getElementById('input');
const sendBtn    = document.getElementById('send');

function appendMessage(text, cls) {
  const div = document.createElement('div');
  div.className = 'message ' + cls;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}


sendBtn.onclick = async () => {
  const question = inputEl.value.trim();
  if (!question) return;
  appendMessage(question, 'user');
  inputEl.value = '';
  sendBtn.disabled = true;

  try {
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await resp.json();
    const { sql, rows, error, answer } = data;

    // 1) If the backend surfaced an execution or GPT error
    if (error) {
      appendMessage(`Error: ${error}`, 'bot');

    // 2) If the backend wants to return a pure-NL reply (answer)  
    } else if (answer) {
      appendMessage(answer, 'bot');

    // 3) Otherwise we expect a real SQL + rows
    } else {
      // safe‐guard: make sure sql is a string
      const cleanSql = typeof sql === 'string' ? sql.trim() : '';
      
      // if for some reason it's the 'NO_SQL' sentinel you set
      if (cleanSql === 'NO_SQL') {
        appendMessage('Sorry, I can only answer database questions.', 'bot');
      } else {
        appendMessage(cleanSql, 'bot');
        appendMessage(JSON.stringify(rows), 'bot');
      }
    }

  } catch (e) {
    appendMessage('Network error: ' + e.message, 'bot');
  } finally {
    sendBtn.disabled = false;
  }
};