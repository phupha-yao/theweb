// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe the about section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    observer.observe(aboutSection);
}

// Observe the projects section
const projectsSection = document.querySelector('.projects');
if (projectsSection) {
    observer.observe(projectsSection);
}

