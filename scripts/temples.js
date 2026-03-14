// temples.js – hamburger menu & footer dates
document.addEventListener('DOMContentLoaded', function() {
    console.log('temples.js loaded');

    // --- hamburger menu ---
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            // change icon between ☰ and ✕
            if (navMenu.classList.contains('open')) {
                hamburger.innerHTML = '✕';
            } else {
                hamburger.innerHTML = '☰';
            }
        });
    }

    // --- footer dates ---
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    const lastMod = document.getElementById('lastModified');
    if (lastMod) {
        lastMod.textContent = 'Last Modified: ' + document.lastModified;
    }

    // optional: prevent default on nav links for demo (remove if you want real links)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            alert('Demo link – no page navigation.');
        });
    });
});