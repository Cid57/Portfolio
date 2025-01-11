// Configuration du chatbot
const chatbotResponses = {
    competences: `<div class="response-content">
        <h3>🚀 Compétences techniques</h3>
        <div class="skill-section">
            <h4>💻 Front-end</h4>
            <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>Bootstrap, React, Next.js</li>
            </ul>
        </div>
        <div class="skill-section">
            <h4>⚙️ Back-end</h4>
            <ul>
                <li>PHP, Laravel</li>
                <li>MySQL</li>
            </ul>
        </div>
        <div class="skill-section">
            <h4>🛠️ Outils</h4>
            <ul>
                <li>Git, GitHub</li>
                <li>VS Code, PHPStorm</li>
                <li>WampServer</li>
            </ul>
        </div>
        <p class="highlight">Je maîtrise également les méthodologies Agile et Scrum.</p>
    </div>`,

    parcours: `<div class="response-content">
        <h3>👩‍💻 Mon Parcours</h3>
        <p>Je suis <strong>Cindy Singer</strong>, Développeuse Full Stack de 38 ans.</p>
        <div class="timeline">
            <div class="timeline-item">
                <span class="timeline-dot">📚</span>
                <p>Reconversion professionnelle réussie avec un diplôme RNCP 5 à <strong>Metz Numeric School</strong></p>
            </div>
            <div class="timeline-item">
                <span class="timeline-dot">💼</span>
                <p>Actuellement <strong>Développeuse Full Stack</strong> chez Digital Factory au Luxembourg</p>
            </div>
            <div class="timeline-item">
                <span class="timeline-dot">🚀</span>
                <p>Travail sur <strong>Teeqode</strong>, une plateforme SaaS innovante</p>
            </div>
        </div>
    </div>`,

    projets: `<div class="response-content">
        <h3>🎯 Mes Projets</h3>
        <div class="project-item">
            <h4>📝 TodoList Javascript</h4>
            <p>Application de gestion de tâches développée en JavaScript</p>
        </div>
        <div class="project-item">
            <h4>🌴 Projet Madagascar</h4>
            <p>Site web créé avec HTML, CSS (Bootstrap) et JavaScript (Node.js)</p>
        </div>
        <div class="project-item">
            <h4>🏨 Agence SingerRooms</h4>
            <p>Projet de site pour une agence de réservation de chambres</p>
        </div>
        <p class="note">👉 Découvrez ces projets en détail dans la section "Projets" de mon portfolio</p>
    </div>`,

    cv: `<div class="response-content">
        <h3>📄 Mon CV</h3>
        <p>Consultez mon CV complet en cliquant sur le bouton <strong>"Mon CV"</strong> en haut de la page.</p>
        <p class="note">Vous y trouverez tous les détails de mon parcours professionnel et de mes compétences.</p>
    </div>`,

    contact: `<div class="response-content">
        <h3>📬 Me Contacter</h3>
        <div class="contact-links">
            <a href="https://www.linkedin.com/in/cindy-singer/" target="_blank" class="contact-link">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Cid57" target="_blank" class="contact-link">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
        <p class="note">N'hésitez pas à me contacter pour discuter d'opportunités professionnelles !</p>
    </div>`,

    default: `<div class="response-content">
        <h3>👋 Bonjour !</h3>
        <p>Je suis l'assistant virtuel du portfolio de Cindy Singer. Je peux vous parler de :</p>
        <ul>
            <li>Son parcours professionnel</li>
            <li>Ses compétences techniques</li>
            <li>Ses projets</li>
            <li>Comment la contacter</li>
        </ul>
        <p class="note">N'hésitez pas à me poser des questions sur ces sujets !</p>
    </div>`
};

// Création des éléments du chatbot
const chatbotHTML = `
    <div id="chatbot-container" class="chatbot-hidden">
        <div id="chatbot-header">
            <span>Assistant Portfolio</span>
            <button id="close-chatbot" aria-label="Fermer le chat">×</button>
        </div>
        <div id="chatbot-messages"></div>
        <div id="chatbot-input-container">
            <input type="text" id="chatbot-input" placeholder="Posez votre question..." aria-label="Message">
            <button id="send-message" aria-label="Envoyer">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
    <button class="chatbot-toggle-button" aria-label="Ouvrir le chat">
        <i class="fas fa-comments"></i>
    </button>
`;

// Variables globales pour les éléments du DOM
let chatbotToggle, chatbotContainer, closeButton, messagesContainer, inputField, sendButton;
let isFirstOpen = true;

// Fonction pour basculer l'affichage du chatbot
function toggleChatbot() {
    chatbotContainer.classList.toggle('chatbot-hidden');
    if (!chatbotContainer.classList.contains('chatbot-hidden')) {
        inputField.focus();
        if (isFirstOpen) {
            addWelcomeMessage();
            isFirstOpen = false;
        }
    }
}

// Fonction pour ajouter un message
function addMessage(content, isUser = false, isFollowUp = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
    if (isUser) {
        messageDiv.textContent = content;
    } else {
        messageDiv.innerHTML = content;
        // Ajouter la question de suivi seulement si ce n'est pas déjà une question de suivi
        if (!isFollowUp) {
            setTimeout(() => {
                const followUpDiv = document.createElement('div');
                followUpDiv.className = 'chatbot-message bot-message';
                followUpDiv.innerHTML = `<div class="response-content">
                    <p>Puis-je vous aider avec autre chose ? 😊</p>
                    <div class="quick-questions">
                        <button class="quick-question" onclick="handleQuickQuestion('Parle-moi de ton parcours')">Parle-moi de ton parcours</button>
                        <button class="quick-question" onclick="handleQuickQuestion('Quelles sont tes compétences ?')">Quelles sont tes compétences ?</button>
                        <button class="quick-question" onclick="handleQuickQuestion('Quels sont tes projets ?')">Quels sont tes projets ?</button>
                        <button class="quick-question" onclick="handleQuickQuestion('Comment te contacter ?')">Comment te contacter ?</button>
                    </div>
                </div>`;
                messagesContainer.appendChild(followUpDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
        }
    }
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Fonction pour ajouter les suggestions de questions
function addQuickQuestions() {
    const quickQuestions = [
        "Quelles sont tes compétences techniques ?",
        "Parle-moi de ton parcours professionnel",
        "Quels sont tes projets principaux ?",
        "Où puis-je voir ton CV ?",
        "Comment te contacter ?"
    ];

    const questionsHTML = quickQuestions.map(q => 
        `<button class="quick-question" onclick="handleQuickQuestion('${q}')">${q}</button>`
    ).join('');
    
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'quick-questions';
    suggestionsDiv.innerHTML = questionsHTML;
    messagesContainer.appendChild(suggestionsDiv);
}

// Fonction pour gérer les questions rapides
window.handleQuickQuestion = function(question) {
    addMessage(question, true);
    const response = getResponse(question);
    addMessage(response, false, false);
}

// Fonction pour obtenir la réponse appropriée
function getResponse(message) {
    const lowercaseMessage = message.toLowerCase();
    
    if (lowercaseMessage.includes('compétence') || lowercaseMessage.includes('competence') || 
        lowercaseMessage.includes('technologie') || lowercaseMessage.includes('stack') ||
        lowercaseMessage.includes('savoir') || lowercaseMessage.includes('sais')) {
        return chatbotResponses.competences;
    } 
    else if (lowercaseMessage.includes('parcours') || lowercaseMessage.includes('formation') || 
             lowercaseMessage.includes('expérience') || lowercaseMessage.includes('experience') ||
             lowercaseMessage.includes('étude') || lowercaseMessage.includes('travail')) {
        return chatbotResponses.parcours;
    } 
    else if (lowercaseMessage.includes('projet') || lowercaseMessage.includes('réalisation') || 
             lowercaseMessage.includes('portfolio') || lowercaseMessage.includes('fait')) {
        return chatbotResponses.projets;
    } 
    else if (lowercaseMessage.includes('cv') || lowercaseMessage.includes('curriculum') || 
             lowercaseMessage.includes('vitae') || lowercaseMessage.includes('resume')) {
        return chatbotResponses.cv;
    } 
    else if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('linkedin') || 
             lowercaseMessage.includes('github') || lowercaseMessage.includes('email') ||
             lowercaseMessage.includes('mail') || lowercaseMessage.includes('joindre')) {
        return chatbotResponses.contact;
    } 
    else {
        return chatbotResponses.default;
    }
}

// Message de bienvenue avec animation de typing
function addWelcomeMessage() {
    const welcomeMessage = "👋 Bonjour ! Je suis l'assistant virtuel du portfolio de Cindy Singer. Je peux vous parler de son parcours, ses compétences, ses projets ou vous aider à la contacter. Comment puis-je vous aider ?";
    let index = 0;
    
    addMessage("", false, true);
    const lastMessage = document.querySelector('.bot-message:last-child');
    
    function typeText() {
        if (index < welcomeMessage.length) {
            lastMessage.textContent += welcomeMessage.charAt(index);
            index++;
            setTimeout(typeText, 20);
        } else {
            addQuickQuestions();
        }
    }
    
    typeText();
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    
    // Initialiser les éléments
    chatbotToggle = document.querySelector('.chatbot-toggle-button');
    chatbotContainer = document.querySelector('#chatbot-container');
    closeButton = document.querySelector('#close-chatbot');
    messagesContainer = document.querySelector('#chatbot-messages');
    inputField = document.querySelector('#chatbot-input');
    sendButton = document.querySelector('#send-message');
    
    // Event listeners
    chatbotToggle.addEventListener('click', toggleChatbot);
    closeButton.addEventListener('click', toggleChatbot);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
    sendButton.addEventListener('click', handleSendMessage);

    // Gestionnaire d'envoi de message
    function handleSendMessage() {
        const message = inputField.value.trim();
        if (message) {
            addMessage(message, true);
            const response = getResponse(message);
            addMessage(response, false, false);
            inputField.value = '';
        }
    }
});
