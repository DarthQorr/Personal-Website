// --- Deliverable 4: Typed-Text Class ---
class TypedText {
    constructor(element, config) {
        this.el = element;
        this.strings = config.strings;
        this.speed = config.typingSpeed;
        this.eraseSpeed = config.eraseSpeed;
        this.pause = config.pauseDuration;
        this.index = 0;
        this.isDeleting = false;
        this.text = '';
        this.type();
    }

    type() {
        const current = this.index % this.strings.length;
        const fullText = this.strings[current];

        if (this.isDeleting) {
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }

        this.el.textContent = this.text;

        let typeSpeed = this.isDeleting ? this.eraseSpeed : this.speed;

        if (!this.isDeleting && this.text === fullText) {
            typeSpeed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            this.index++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// --- Deliverable 2: Theme Toggle Logic ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

// Toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Persist across sessions
    });
}

// --- Deliverable 4: Event Delegation Timeline ---
const timeline = document.querySelector('.timeline-list');
if (timeline) {
    timeline.addEventListener('click', (e) => {
        const header = e.target.closest('.timeline-header');
        if (!header) return;

        const item = header.closest('.timeline-item');
        const content = item.querySelector('.timeline-content');
        if (!item || !content) return;

        const isExpanded = item.getAttribute('aria-expanded') === 'true';

        // Collapse all other open items (accordion)
        timeline.querySelectorAll('.timeline-item[aria-expanded="true"]').forEach(openItem => {
            if (openItem !== item) {
                openItem.setAttribute('aria-expanded', 'false');
                const openContent = openItem.querySelector('.timeline-content');
                if (openContent) openContent.style.maxHeight = '0';
            }
        });

        // Toggle current
        const next = !isExpanded;
        item.setAttribute('aria-expanded', String(next));
        content.style.maxHeight = next ? content.scrollHeight + 'px' : '0';
    });
}

// --- Scroll-triggered animations for timeline items ---
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length) {
    // Mark items so CSS knows to hide them before animating
    timelineItems.forEach(item => item.classList.add('will-animate'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
}

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#typed-text');
    if (target) {
        new TypedText(target, {
            strings: ['Navneet Nair', 'a Creator', 'a Learner', 'a Builder', 'a Dreamer'],
            typingSpeed: 100,
            eraseSpeed: 50,
            pauseDuration: 2000
        });
    }
});


// --- Deliverable 1: Form Validation Logic ---
const contactForm = document.getElementById('contact-form');
const successState = document.getElementById('success-state');
const formWrapper = document.getElementById('form-wrapper');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload
        
        let isValid = true;
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        // Simple validation checks
        if (!nameField.value.trim()) {
            nameField.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            nameField.parentElement.classList.remove('invalid');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailField.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            emailField.parentElement.classList.remove('invalid');
        }

        if (!messageField.value.trim()) {
            messageField.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            messageField.parentElement.classList.remove('invalid');
        }

        // If all passes, send data to FormSubmit, then show success state
        if (isValid) {
            // Change button text so user knows it's working
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Send the data securely via AJAX to your email
            fetch("https://formsubmit.co/ajax/fcb72dc625d570984a7d0fc452d8cfd7", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: nameField.value,
                    email: emailField.value,
                    message: messageField.value
                })
            })
            .then(response => response.json())
            .then(data => {
                // Hide form and show your custom success message
                formWrapper.classList.add('hidden');
                successState.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.textContent = 'Error. Try Again.';
                submitBtn.disabled = false;
            });
        }
    });

    // Remove red borders as user starts typing to correct mistakes
    contactForm.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            e.target.parentElement.classList.remove('invalid');
        }
    });
}