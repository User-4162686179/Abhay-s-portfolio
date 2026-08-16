// Ensure animations trigger only when the element is scrolled into view
document.addEventListener('DOMContentLoaded', () => {
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Triggers when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Run animation once
            }
        });
    }, observerOptions);

    // Attach observer to all elements with the 'fade-in' class
    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => {
        observer.observe(el);
    });

    // Optional: Add subtle parallax effect to the 3D cube based on mouse movement
    const scene = document.querySelector('.scene');
    if (scene) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;
            scene.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
    }
});