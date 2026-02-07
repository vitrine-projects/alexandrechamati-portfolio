// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill pills on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-pill').forEach((pill, index) => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateX(-20px)';
    pill.style.transition = `all 0.5s ease ${index * 0.05}s`;
    skillObserver.observe(pill);
});

// Animate timeline cards
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    timelineObserver.observe(card);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const heroTitle = document.querySelector('.hero h1');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Show/hide brand name based on hero title visibility
    if (heroTitle) {
        const heroTitleRect = heroTitle.getBoundingClientRect();
        if (heroTitleRect.bottom < 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(39, 201, 63, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Counter animation for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current) + '+';
                }
            }, 30);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// Add ripple effect to buttons
document.querySelectorAll('.btn-scroll, .contact-card').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation style dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .btn-scroll,
    .contact-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

console.log('%c✨ Portfolio Alexandre Chamati', 'font-size: 20px; color: #27c93f; font-weight: bold;');
console.log('%c👋 Merci de visiter mon portfolio!', 'font-size: 14px; color: #16a34a;');
console.log('%c📧 Contact: chamati.alexandre@gmail.com', 'font-size: 12px; color: #6b7280;');