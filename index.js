import confetti from './snowpack/pkg/canvas-confetti.js';

initTheme();

document.getElementById('theme-switcher').addEventListener('click', () => {
    toggleTheme();
    showConfetti();
});

document.getElementById('affiliate-link').addEventListener('click', (e) => {
    showFireWorks();
});

function setTheme() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

function initTheme() {
    if (!'theme' in localStorage) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.theme = 'dark'
        } else {
            localStorage.theme = 'light'
        }
    }

    setTheme();
}

function toggleTheme() {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    setTheme();
}

function showConfetti() {
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 }
    });
}

function showFireWorks() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}