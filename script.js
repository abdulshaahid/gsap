// GSAP Animations

// Hero section animation
gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1.5, ease: 'bounce' });
gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
gsap.from('.cta-btn', { opacity: 0, scale: 0.8, duration: 1, delay: 1, ease: 'back' });

// Main image parallax scroll effect
gsap.to('.main-image', {
    scrollTrigger: {
        trigger: '.main-image-container',
        start: 'top bottom', // Image starts moving when its top is at the bottom of the viewport
        end: 'bottom top',   // Image stops moving when its bottom is at the top of the viewport
        scrub: true,         // Smooth scrolling movement
    },
    y: -150,                 // Move the image upward as the user scrolls down
    scale: 1.1               // Slight scaling effect to make the parallax effect stronger
});

// About section animation
gsap.from('.about-section h2', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
    },
    opacity: 0,
    x: -100,
    duration: 1
});
gsap.from('.about-section p', {
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
    },
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.5
});

// Services section animation
gsap.from('.service-box', {
    scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
});

// Gallery image hover animation
const galleryImages = document.querySelectorAll('.gallery-item');
galleryImages.forEach((img) => {
    gsap.from(img, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
            trigger: img,
            start: 'top 90%',
        }
    });
});

// Testimonials animation
gsap.from('.testimonial', {
    scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
    },
    opacity: 0,
    scale: 0.9,
    duration: 1,
    stagger: 0.3
});

// Contact form animation
gsap.from('.contact-section h2', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    duration: 1
});
gsap.from('.contact-section form', {
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
    },
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5
});
