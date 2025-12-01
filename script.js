// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,  // Lower threshold for better mobile detection
    rootMargin: '0px 0px -50px 0px'  // Less restrictive margin
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Helper to check if element is already in viewport
function checkIfInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight && rect.bottom > 0;
}

// Observe the about section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
    // Check immediately if already visible
    if (checkIfInViewport(aboutSection)) {
        aboutSection.classList.add('animate');
    }
}

// Observe the projects section
const projectsSection = document.querySelector('.projects');
if (projectsSection) {
    observer.observe(projectsSection);
    // Check immediately if already visible (important for thin screens!)
    if (checkIfInViewport(projectsSection)) {
        projectsSection.classList.add('animate');
    }
}

// Also check after page load as a fallback
window.addEventListener('load', () => {
    if (projectsSection && !projectsSection.classList.contains('animate')) {
        if (checkIfInViewport(projectsSection)) {
            projectsSection.classList.add('animate');
        }
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

