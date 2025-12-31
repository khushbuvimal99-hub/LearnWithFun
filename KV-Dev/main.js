import { createIcons, ArrowLeft, Volume2 } from 'lucide';
import { hindiVarnmala, englishAlphabet, numbersList } from './data.js';

// Initialize Lucide icons
createIcons({
    icons: { ArrowLeft, Volume2 }
});

const screens = {
    home: document.getElementById('home-screen'),
    grid: document.getElementById('grid-screen')
};

const header = document.getElementById('header');
const pageTitle = document.getElementById('page-title');
const backBtn = document.getElementById('back-btn');
const cardsGrid = document.getElementById('cards-grid');

// Speech Synthesis setup
const speak = (text, lang = 'hi-IN') => {
    window.speechSynthesis.cancel(); // Stop current speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to find a matching voice
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
    if (voice) utterance.voice = voice;
    
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
};

// Populate the speech voices list (needed for some browsers)
window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
};

const showView = (viewName, title = 'Learning Fun') => {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[viewName].classList.add('active');
    
    if (viewName === 'home') {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
        pageTitle.textContent = title;
    }
};

const renderCards = (data, category) => {
    cardsGrid.innerHTML = '';
    const lang = category === 'hindi' ? 'hi-IN' : 'en-US';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="card-char">${item.char}</span>
            <div class="img-wrapper">
                <img class="card-img" src="${item.image}" alt="${item.word}" loading="lazy">
            </div>
            ${item.word ? `<span class="card-word">${item.word}</span>` : ''}
            <button class="volume-btn">
                <i data-lucide="volume-2"></i> Listen
            </button>
        `;

        const volBtn = card.querySelector('.volume-btn');
        volBtn.onclick = (e) => {
            e.stopPropagation();
            speak(item.sound, lang);
        };

        card.onclick = () => speak(item.sound, lang);
        
        cardsGrid.appendChild(card);
    });

    createIcons({
        icons: { Volume2 }
    });
};

// Event Listeners
document.querySelectorAll('.menu-card').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        let data, title;

        if (target === 'hindi') {
            data = hindiVarnmala;
            title = 'हिन्दी वर्णमाला';
        } else if (target === 'english') {
            data = englishAlphabet;
            title = 'English Alphabet';
        } else if (target === 'numbers') {
            data = numbersList;
            title = 'Numbers';
        }

        renderCards(data, target);
        showView('grid', title);
        
        // Auto play first item sound
        if (data.length > 0) {
            setTimeout(() => speak(data[0].sound, target === 'hindi' ? 'hi-IN' : 'en-US'), 500);
        }
    });
});

backBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    showView('home');
});

// Initialization
showView('home');