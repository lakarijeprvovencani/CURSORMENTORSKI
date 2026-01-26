// ===============================================
// VIBE CODING - Landing Page Scripts
// ===============================================

// Marquee infinite scroll
function initMarquee() {
    const marqueeTrack = document.querySelector('.marquee-track');
    if (!marqueeTrack) return;

    // Clone the content multiple times to ensure smooth infinite scroll
    const content = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = content + content + content + content;
}

// Initialize marquee on load
document.addEventListener('DOMContentLoaded', initMarquee);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 100; // Account for fixed navbar
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const announcementBar = document.querySelector('.announcement-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
});

// Form submission with Netlify Forms
const signupForm = document.getElementById('signup-form');

signupForm?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // Animate button
    const button = this.querySelector('button[type="submit"]');
    const originalButtonHTML = button.innerHTML;
    button.innerHTML = `
        <svg class="spinner" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="60" stroke-dashoffset="20">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
        Šaljem...
    `;
    button.disabled = true;
    
    try {
        // Submit to Netlify Forms
        const response = await fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        });
        
        if (response.ok) {
            // Redirect to thank you page
            window.location.href = '/thank-you.html';
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        // If fetch fails, try native form submission
        console.error('Error submitting form:', error);
        button.innerHTML = originalButtonHTML;
        button.disabled = false;
        
        // Fallback: allow native form submission
        this.submit();
    }
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .form-success {
        text-align: center;
        padding: 20px;
    }
    
    .form-success .success-icon {
        font-size: 4rem;
        margin-bottom: 20px;
    }
    
    .form-success h3 {
        font-size: 1.5rem;
        margin-bottom: 12px;
        color: var(--text-primary);
    }
    
    .form-success p {
        color: var(--text-secondary);
        font-size: 1rem;
    }
    
    .form-success strong {
        color: var(--accent);
    }
    
    .spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.98);
            padding: 24px;
            gap: 20px;
            border-bottom: 1px solid var(--border-color);
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Parallax effect removed for better performance

// Typing effect for code preview (optional enhancement)
const codeContent = document.querySelector('.code-content');
if (codeContent) {
    const originalHTML = codeContent.innerHTML;
    // Keep the code visible - no typing animation for better UX
}

// Counter animation removed for better performance

// Add hover effect to cards
document.querySelectorAll('.feature-card, .path-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = 'rgba(255, 107, 74, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '';
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Hero Video Player with iframe
document.addEventListener('DOMContentLoaded', function() {
    const heroVideo = document.getElementById('hero-video');
    const videoOverlay = document.getElementById('video-overlay');
    const playButton = document.getElementById('play-button');

    console.log('Video elements:', {heroVideo, videoOverlay, playButton});

    if (videoOverlay) {
        // Click on overlay to play
        videoOverlay.addEventListener('click', function(e) {
            console.log('Overlay clicked!');
            videoOverlay.style.display = 'none';
            console.log('Overlay hidden');
        });
    }

    if (playButton) {
        // Also add click on play button
        playButton.addEventListener('click', function(e) {
            console.log('Play button clicked!');
            e.preventDefault();
            e.stopPropagation();
            if (videoOverlay) {
                videoOverlay.style.display = 'none';
            }
        });
    }
});

// Image Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" id="lightbox-img">
    `;
    document.body.appendChild(lightbox);

    // Add click event to all testimonial screenshots
    const screenshots = document.querySelectorAll('.testimonial-screenshot');
    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            document.getElementById('lightbox-img').src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close lightbox when clicking on close button or outside image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.className === 'lightbox-close') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Mobile Testimonials Carousel Auto-scroll
document.addEventListener('DOMContentLoaded', function() {
    const screenshotsGrid = document.querySelector('.screenshots-grid');

    if (!screenshotsGrid) return;

    let autoScrollInterval;
    let isUserScrolling = false;
    let scrollTimeout;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function autoScroll() {
        if (!isMobile() || isUserScrolling) return;

        const scrollAmount = screenshotsGrid.clientWidth * 0.85; // One card width
        const maxScroll = screenshotsGrid.scrollWidth - screenshotsGrid.clientWidth;

        if (screenshotsGrid.scrollLeft >= maxScroll - 10) {
            // Reset to beginning
            screenshotsGrid.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Scroll to next item
            screenshotsGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    function startAutoScroll() {
        if (isMobile()) {
            autoScrollInterval = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds
        }
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Detect user scrolling
    screenshotsGrid.addEventListener('scroll', function() {
        isUserScrolling = true;
        stopAutoScroll();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            isUserScrolling = false;
            startAutoScroll();
        }, 5000); // Resume auto-scroll 5 seconds after user stops scrolling
    });

    // Start auto-scroll on mobile
    if (isMobile()) {
        startAutoScroll();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        stopAutoScroll();
        if (isMobile()) {
            startAutoScroll();
        }
    });

    // Pause auto-scroll when user touches the carousel
    screenshotsGrid.addEventListener('touchstart', function() {
        isUserScrolling = true;
        stopAutoScroll();
    });

    screenshotsGrid.addEventListener('touchend', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            isUserScrolling = false;
            startAutoScroll();
        }, 5000);
    });
});

// Console easter egg
console.log(`
%c⚡ Vibe Coding
%cNapravi svoj softver bez programiranja!

Zainteresovan si za saradnju ili imaš pitanja?
Kontaktiraj nas!
`,
'font-size: 24px; font-weight: bold; color: #ff6b4a;',
'font-size: 14px; color: #a0a0b0;'
);
