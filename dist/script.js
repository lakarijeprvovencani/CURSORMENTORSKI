// ===============================================
// VIBE CODING - Landing Page Scripts
// ===============================================

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

// Form submission with animation
const signupForm = document.getElementById('signup-form');

signupForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    
    // Animate button
    const button = this.querySelector('button[type="submit"]');
    button.innerHTML = `
        <svg class="spinner" width="24" height="24" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="60" stroke-dashoffset="20">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
            </circle>
        </svg>
        Šaljem...
    `;
    button.disabled = true;
    
    // Simulate submission delay
    setTimeout(() => {
        this.innerHTML = `
            <div class="form-success">
                <div class="success-icon">🎉</div>
                <h3>Hvala ti, ${name}!</h3>
                <p>Javićemo ti se uskoro na <strong>${email}</strong></p>
            </div>
        `;
    }, 1500);
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
