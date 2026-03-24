// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    
    // Change hamburger icon to X when open, back to ☰ when closed
    if (navMenu.classList.contains('open')) {
        hamburgerBtn.textContent = '✖';
        hamburgerBtn.setAttribute('aria-label', 'Close menu');
    } else {
        hamburgerBtn.textContent = '☰';
        hamburgerBtn.setAttribute('aria-label', 'Toggle menu');
    }
});

// Footer dynamic content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;