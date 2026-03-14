// temples.js — Temple Album JavaScript
// Handles: hamburger nav toggle, footer year, footer last-modified date

/* ── Footer: dynamic copyright year ── */
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ── Footer: last modified date ── */
const lastModifiedSpan = document.getElementById('last-modified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/* ── Hamburger navigation toggle ── */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    // Update aria-expanded for accessibility
    hamburger.setAttribute('aria-expanded', isOpen.toString());

    // Toggle icon between ☰ (open) and ✕ (close)
    hamburger.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  // Close the menu when a nav link is clicked (good UX on mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.innerHTML = '&#9776;';
    });
  });
}
