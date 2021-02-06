import confetti from './_snowpack/pkg/canvas-confetti.js';

initTheme();

document.getElementById('theme-switcher').addEventListener('click', () => {
    toggleTheme();
    showConfetti();
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