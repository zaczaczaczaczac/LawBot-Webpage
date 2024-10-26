const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const chatSend = document.getElementById('chatSend');

// Function to send message
function sendMessage() {
    const userMessage = chatInput.value.trim();

    if (userMessage) {
        // Display user message
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('user-message');
        userMessageElement.textContent = `User: ${userMessage}`;
        chatMessages.appendChild(userMessageElement);

        // Scroll to the bottom of the chat box
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear input
        chatInput.value = '';

        // Generate a simple bot response
        const botResponse = document.createElement('div');
        botResponse.classList.add('bot-response');
        botResponse.textContent = 'LawBot: Thank you for your question. I will get back to you with relevant information shortly.';
        chatMessages.appendChild(botResponse);

        // Scroll to the bottom of the chat box after bot response
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Send message on button click
chatSend.addEventListener('click', sendMessage);

// Send message on Enter key press
chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter behavior
        sendMessage();
    }
});
