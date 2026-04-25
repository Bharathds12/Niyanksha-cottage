// Luxury Hotel Website - Niyanksha Cottage

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Booking bar background on scroll - Enhanced
window.addEventListener('scroll', () => {
    const bookingBar = document.querySelector('.booking-bar');
    if (window.scrollY > 50) {
        bookingBar.classList.add('scrolled');
    } else {
        bookingBar.classList.remove('scrolled');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe amenity items, gallery items, rule cards
document.querySelectorAll('.amenity-item, .gallery-item-large, .gallery-item-medium, .gallery-item-small, .rule-card-luxury, .booking-card-luxury').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Staggered animation for amenities
const amenityItems = document.querySelectorAll('.amenity-item');
amenityItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
});

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item-large, .gallery-item-medium, .gallery-item-small');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            modal.innerHTML = `
                <div class="modal-backdrop"></div>
                <div class="modal-content-gallery">
                    <span class="modal-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            // Add modal styles dynamically
            if (!document.getElementById('modal-styles')) {
                const style = document.createElement('style');
                style.id = 'modal-styles';
                style.textContent = `
                    .gallery-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 10000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: fadeIn 0.3s ease;
                    }
                    .modal-backdrop {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.95);
                    }
                    .modal-content-gallery {
                        position: relative;
                        max-width: 90%;
                        max-height: 90%;
                        z-index: 10001;
                    }
                    .modal-content-gallery img {
                        max-width: 100%;
                        max-height: 90vh;
                        object-fit: contain;
                        animation: zoomIn 0.3s ease;
                    }
                    .modal-close {
                        position: absolute;
                        top: -50px;
                        right: 0;
                        font-size: 40px;
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .modal-close:hover {
                        color: #C9A961;
                        transform: rotate(90deg);
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes zoomIn {
                        from { transform: scale(0.8); }
                        to { transform: scale(1); }
                    }
                `;
                document.head.appendChild(style);
            }

            // Close modal
            const closeBtn = modal.querySelector('.modal-close');
            const backdrop = modal.querySelector('.modal-backdrop');

            closeBtn.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflow = '';
            });

            backdrop.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflow = '';
            });

            // Close with Escape key
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape' && modal) {
                    modal.remove();
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', escHandler);
                }
            });
        }
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-slide.active');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth reveal for sections
const revealSections = document.querySelectorAll('.intro-section, .experience-section, .location-section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15 });

revealSections.forEach(section => {
    revealObserver.observe(section);
});

// Enhanced booking bar animation on page load
window.addEventListener('load', () => {
    const bookingBar = document.querySelector('.booking-bar');
    bookingBar.style.transform = 'translateY(-100%)';
    bookingBar.style.opacity = '0';
    setTimeout(() => {
        bookingBar.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        bookingBar.style.transform = 'translateY(0)';
        bookingBar.style.opacity = '1';
    }, 300);

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.book-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');

            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

console.log('Niyanksha Cottage - Luxury website loaded successfully');
