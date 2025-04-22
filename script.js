document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Handle scroll events
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Navigation background change on scroll
        const nav = document.getElementById('main-nav');
        if (scrollPosition > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        // Activate scroll animations
        handleScrollAnimations();
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // If mobile menu is open, close it after clicking
            if (document.getElementById('navLinks').classList.contains('active')) {
                document.getElementById('navLinks').classList.remove('active');
                document.getElementById('mobileNavToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    mobileNavToggle.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            mobileNavToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Form submission handling
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Image lazy loading
    lazyLoadImages();
});

// Initial animations
function initAnimations() {
    // Set delay variables for staggered animations
    const heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach((el, index) => {
        el.style.setProperty('--delay', index + 1);
    });
    
    // Trigger initial hero animations
    setTimeout(() => {
        heroElements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        });
    }, 300);
}

// Handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formResponse = document.getElementById('formResponse');
    
    // Basic validation
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#f44336';
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    // Check cookie selection
    const cookieCheckboxes = form.querySelectorAll('input[name="cookies"]');
    let cookieSelected = false;
    
    cookieCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            cookieSelected = true;
        }
    });
    
    if (!cookieSelected) {
        isValid = false;
        formResponse.textContent = 'Please select at least one cookie type.';
        formResponse.classList.add('error');
        formResponse.style.display = 'block';
        return;
    }
    
    if (!isValid) {
        formResponse.textContent = 'Please fill in all required fields.';
        formResponse.classList.add('error');
        formResponse.style.display = 'block';
        return;
    }
    
    // In a real implementation, you would send the form data to a server here
    // For now, we'll just show a success message
    formResponse.textContent = 'Thank you for your order request! We will contact you shortly to confirm the details.';
    formResponse.classList.remove('error');
    formResponse.classList.add('success');
    formResponse.style.display = 'block';
    
    form.reset();
    
    // Scroll to the response message
    formResponse.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Lazy loading images
function lazyLoadImages() {
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Browser doesn't support native lazy loading, load a polyfill
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
}