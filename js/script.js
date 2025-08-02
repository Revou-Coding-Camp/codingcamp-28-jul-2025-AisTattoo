document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('name');
    
    if (userName) {
        const welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.textContent = 'Hi ' + userName + ', Welcome To Website';
    }

    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
       
        clearAllErrors();
        
        let hasError = false;
        
        
        if (name.trim() === '') {
            showError('name', 'Name is required');
            hasError = true;
        } else if (name.trim().length < 2) {
            showError('name', 'Name must be at least 2 characters');
            hasError = true;
        }
        
        
        if (email.trim() === '') {
            showError('email', 'Email is required');
            hasError = true;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            hasError = true;
        }
        
        
        if (phone.trim() === '') {
            showError('phone', 'Phone number is required');
            hasError = true;
        } else if (phone.trim().length < 10) {
            showError('phone', 'Phone number must be at least 10 digits');
            hasError = true;
        }
        
        
        if (message.trim() === '') {
            showError('message', 'Message is required');
            hasError = true;
        } else if (message.trim().length < 10) {
            showError('message', 'Message must be at least 10 characters');
            hasError = true;
        }
        
        
        if (!hasError) {
            alert('Thank you! Your message has been sent successfully.');
            
            // Reset form
            contactForm.reset();
            
            
            console.log('Form Data:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Message:', message);
        }
    });
});


function showError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const errorElement = document.getElementById(fieldName + 'Error');
    
    field.classList.add('error');
    errorElement.textContent = message;
}


function clearAllErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const errorFields = document.querySelectorAll('.error');
    
    errorMessages.forEach(function(error) {
        error.textContent = '';
    });
    
    errorFields.forEach(function(field) {
        field.classList.remove('error');
    });
}


function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});