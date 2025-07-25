// Simple navbar functionality - bulletproof version
console.log('Navbar script loading...');

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

function initNavbar() {
  console.log('Initializing navbar...');
  
  // Get elements
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-links');
  
  console.log('Hamburger element:', hamburger);
  console.log('Nav links element:', navLinks);
  
  // Check if elements exist
  if (!hamburger) {
    console.error('Hamburger element not found!');
    return;
  }
  
  if (!navLinks) {
    console.error('Nav links element not found!');
    return;
  }
  
  // Add click event to hamburger
  hamburger.onclick = function(e) {
    console.log('Hamburger clicked!');
    e.preventDefault();
    e.stopPropagation();
    
    // Toggle classes
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    
    console.log('Menu toggled. Open:', navLinks.classList.contains('open'));
  };
  
  // Add click events to menu links
  const links = navLinks.querySelectorAll('a');
  links.forEach(function(link) {
    link.onclick = function() {
      console.log('Menu link clicked:', this.href);
      // Close menu
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    };
  });
  
  // Close menu when clicking outside
  document.onclick = function(e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  };
  
  console.log('Navbar initialized successfully!');
} 