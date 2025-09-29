
  const input = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");
  const messagesContainer = document.getElementById("chat-messages");

  // Habilita botão só se tiver texto
  input.addEventListener("input", () => {
    sendButton.disabled = input.value.trim() === "";
    sendButton.setAttribute("aria-disabled", sendButton.disabled.toString());
  });

  // Envio da mensagem
  document.getElementById("chat-input-bar").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    // Cria nova mensagem de saída
    const msgDiv = document.createElement("div");
    msgDiv.className = "message outgoing";
    msgDiv.textContent = text;

    // Hora atual no formato HH:mm
    const now = new Date();
    const h = now.getHours().toString().padStart(2, "0");
    const m = now.getMinutes().toString().padStart(2, "0");

    const timeSpan = document.createElement("span");
    timeSpan.className = "message-time";
    timeSpan.textContent = `${h}:${m}`;
    msgDiv.appendChild(timeSpan);

    messagesContainer.appendChild(msgDiv);

    // Scroll pro final
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Limpa input e desabilita botão
    input.value = "";
    sendButton.disabled = true;
    sendButton.setAttribute("aria-disabled", "true");
  });

  // Scroll inicial para o final da conversa
  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  scrollToBottom();

  // Permite selecionar conversa (apenas visual aqui)
  const conversationList = document.getElementById("conversation-list");
  conversationList.addEventListener("click", (e) => {
    let conv = e.target.closest(".conversation");
    if (!conv) return;
    if (conv.classList.contains("selected")) return;

    // Remove classe selected anterior
    document.querySelector(".conversation.selected")?.classList.remove("selected");
    conv.classList.add("selected");

    // Aqui poderia trocar a conversa do chat - neste demo não troca mensagens
  });
