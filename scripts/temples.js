// temples.js - hamburger menu and footer dates

// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Temples page loaded!');
    
    // Get the hamburger button and navigation menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Check if elements exist (they should!)
    if (hamburgerBtn && navMenu) {
        // Add click event to hamburger button
        hamburgerBtn.addEventListener('click', function() {
            // Toggle the 'open' class on the nav menu
            navMenu.classList.toggle('open');
            
            // Change the hamburger icon based on menu state
            if (navMenu.classList.contains('open')) {
                hamburgerBtn.innerHTML = '✕'; // X symbol when open
                console.log('Menu opened');
            } else {
                hamburgerBtn.innerHTML = '☰'; // Hamburger when closed
                console.log('Menu closed');
            }
        });
    } else {
        console.log('Could not find hamburger button or nav menu');
    }
    
    // Footer date stuff - copied from last week
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Update copyright year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    // Update last modified
    const lastModElement = document.getElementById('lastModified');
    if (lastModElement) {
        const lastModifiedDate = document.lastModified;
        lastModElement.innerHTML = 'Last modified: ' + lastModifiedDate;
    }
    
    console.log('Footer dates updated');
});

// i think this function might be useful later
function toggleMenu() {
    console.log('toggleMenu function called');
    const nav = document.getElementById('nav-menu');
    const btn = document.getElementById('hamburger-btn');
    
    if (nav && btn) {
        nav.classList.toggle('open');
        if (nav.classList.contains('open')) {
            btn.innerHTML = '✕';
        } else {
            btn.innerHTML = '☰';
        }
    }
}