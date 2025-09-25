// Data do início do namoro - 04/09/2022
const startDate = new Date('2022-09-04'); // Formato YYYY-MM-DD

// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado - inicializando...');
    initializeApp();
});

function initializeApp() {
    // Elementos DOM
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseContent = document.getElementById('surpriseContent');
    const loveMessage = document.getElementById('loveMessage');
    const yearsElement = document.getElementById('years');
    const monthsElement = document.getElementById('months');
    const weeksElement = document.getElementById('weeks');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    console.log('Elementos encontrados:', {
        surpriseBtn: !!surpriseBtn,
        yearsElement: !!yearsElement,
        monthsElement: !!monthsElement,
        daysElement: !!daysElement
    });

    // Mensagens de amor aleatórias
    const loveMessages = [
        "Cada momento contigo é especial! 💕",
        "Eu te amo mais a cada dia que passa! 🌹",
        "Você é o amor da minha vida! 💖",
        "Meu coração é todo seu! 💘",
        "Nada se compara ao teu amor! ✨",
        "Você é a pessoa mais linda do mundo! 🌟",
        "Eu te amo infinitamente! 💝",
        "Você completa minha vida! 💑",
        "Sou o homem mais sortudo do mundo! 🍀",
        "Para sempre teu amor! 💞"
    ];

    // Surpresa Interativa
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', function() {
            // Mostrar conteúdo da surpresa
            if (surpriseContent) surpriseContent.style.display = 'block';
            
            // Mensagem aleatória de amor
            if (loveMessage) {
                const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
                loveMessage.textContent = randomMessage;
            }
            
            // Criar corações flutuantes
            createFloatingHearts(15);
            
            // Efeito de confete
            createConfetti();
            
            // Mudar texto do botão temporariamente
            const originalText = this.querySelector('.btn-text');
            if (originalText) {
                originalText.textContent = 'Mais Amor!';
                setTimeout(() => {
                    originalText.textContent = 'Clique para uma Surpresa!';
                }, 2000);
            }
        });
    }

    // Iniciar contador
    initializeCounter();
    
    // Iniciar efeito de digitação
    setTimeout(typeWriterEffect, 1000);
    
    // Configurar outros eventos
    setupEventListeners();
}

// Contador de tempo juntos (SIMPLIFICADO E FUNCIONAL)
function updateTimeCounter() {
    const now = new Date();
    const diff = now - startDate;
    
    // Verificar se a data é válida
    if (isNaN(diff) || diff < 0) {
        console.error('Data inválida');
        return;
    }
    
    // Cálculo SIMPLIFICADO e CORRETO
    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;
    
    // Calcular semanas separadamente
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    
    console.log('Tempo calculado:', { 
        anos: years, 
        meses: months, 
        semanas: weeks, 
        dias: remainingDays,
        horas: hours,
        minutos: minutes,
        segundos: seconds 
    });
    
    // Atualizar elementos na página
    updateElement('years', years.toString().padStart(2, '0'));
    updateElement('months', months.toString().padStart(2, '0'));
    updateElement('weeks', weeks.toString().padStart(2, '0'));
    updateElement('days', remainingDays.toString().padStart(2, '0'));
    updateElement('hours', hours.toString().padStart(2, '0'));
    updateElement('minutes', minutes.toString().padStart(2, '0'));
    updateElement('seconds', seconds.toString().padStart(2, '0'));
    
    // Atualizar total de dias
    updateTotalDays(totalDays);
    
    // Atualizar título da página
    updatePageTitle(years, months, remainingDays);
}

// Função auxiliar para atualizar elementos
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

// Atualizar total de dias
function updateTotalDays(totalDays) {
    const totalDaysElement = document.getElementById('totalDays');
    if (totalDaysElement) {
        totalDaysElement.textContent = `Total: ${totalDays} dias de puro amor! 💝`;
    }
}

// Atualizar título da página
function updatePageTitle(years, months, days) {
    document.title = `💖 ${years} anos, ${months} meses e ${days} dias com Meu Amor!`;
}

// Inicializar contador
function initializeCounter() {
    console.log('Iniciando contador...');
    console.log('Data inicial:', startDate);
    
    // Primeira atualização
    updateTimeCounter();
    
    // Atualizar a cada segundo
    setInterval(updateTimeCounter, 1000);
}

// Criar corações flutuantes
function createFloatingHearts(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `floatUp ${Math.random() * 3 + 3}s linear forwards`;
            
            document.body.appendChild(heart);
            
            // Remover após animação
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 6000);
        }, i * 200);
    }
}

// Efeito de confete
function createConfetti() {
    const colors = ['#e91e63', '#9c27b0', '#2196f3', '#4caf50', '#ffeb3b'];
    const confettiCount = 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.animation = `floatUp ${Math.random() * 2 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 4000);
    }
}

// Efeito de digitação na declaração
function typeWriterEffect() {
    const messages = document.querySelectorAll('.message-content p');
    messages.forEach((message, index) => {
        const originalText = message.textContent;
        message.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typing = setInterval(() => {
                if (i < originalText.length) {
                    message.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 50);
        }, index * 2000);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Rolagem suave para as seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito parallax no header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Música de fundo (opcional)
    document.addEventListener('click', playBackgroundMusic, { once: true });
}

// Música de fundo (opcional)
function playBackgroundMusic() {
    // Descomente e adicione o caminho para uma música especial
    
    const audio = new Audio('music/nossa-musica.mp3');
    audio.volume = 0.2;
    audio.loop = true;
    audio.play().catch(e => console.log('Autoplay bloqueado'));
    
}

// Adicionar CSS para animação se não existir
if (!document.querySelector('#floatAnimation')) {
    const style = document.createElement('style');
    style.id = 'floatAnimation';
    style.textContent = `
        @keyframes floatUp {
            0% { 
                transform: translateY(100vh) rotate(0deg); 
                opacity: 1; 
            }
            100% { 
                transform: translateY(-100px) rotate(360deg); 
                opacity: 0; 
            }
        }
        .floating-heart {
            pointer-events: none;
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);
}