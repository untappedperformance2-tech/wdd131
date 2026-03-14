// temples.js - hamburger menu and footer dates
// this was tricky but i think i got it working

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Temples page loaded successfully!');
    
    // ===== HAMBURGER MENU FUNCTIONALITY =====
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Check if elements exist (they should!)
    if (hamburgerBtn && navMenu) {
        console.log('Hamburger button and nav menu found');
        
        // Add click event to hamburger button
        hamburgerBtn.addEventListener('click', function() {
            // Toggle the 'open' class
            navMenu.classList.toggle('open');
            
            // Change the button symbol
            if (navMenu.classList.contains('open')) {
                hamburgerBtn.innerHTML = '✕'; // X when open
                console.log('Menu opened');
            } else {
                hamburgerBtn.innerHTML = '☰'; // hamburger when closed
                console.log('Menu closed');
            }
        });
    } else {
        console.log('ERROR: Could not find hamburger button or nav menu');
        if (!hamburgerBtn) console.log('hamburger-btn not found');
        if (!navMenu) console.log('nav-menu not found');
    }
    
    // ===== FOOTER DATE STUFF =====
    // Get current year
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Update copyright year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
        console.log('Year updated to:', currentYear);
    } else {
        console.log('ERROR: currentyear span not found');
    }
    
    // Update last modified
    const lastModElement = document.getElementById('lastModified');
    if (lastModElement) {
        const lastModifiedDate = document.lastModified;
        lastModElement.innerHTML = 'Last Modified: ' + lastModifiedDate;
        console.log('Last modified date updated');
    } else {
        console.log('ERROR: lastModified element not found');
    }
    
    // ===== EXTRA FUNCTIONALITY FOR FUN =====
    // Add click tracking to nav links (not required but helpful)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // prevents actual navigation since these are placeholder links
            console.log('Nav link clicked:', this.textContent);
            alert('This is just a demo link! In a real site, this would take you to ' + this.textContent + ' page.');
        });
    });
    
    console.log('All JavaScript loaded and ready!');
});

// backup function just in case
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