import emailjs from 'emailjs-com';

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

function toggleInfo(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden'); // Show the element
    } else {
        element.classList.add('hidden'); // Hide the element
    }
}

// CV download function
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'documents/Daniel Chege cv.pdf';
    link.download = 'Daniel_Chege_cv.pdf';
    link.click();
}

// Form validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }

    alert('Your message has been sent successfully!');
});

// Initialize EmailJS
emailjs.init("-qO9nsFXC7nNbxi74"); // Replace with your Public Key

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_jwceu8t", "template_ycqpqm9", formData)
        .then(response => {
            console.log("SUCCESS!", response);
            alert("Message sent successfully!");
        })
        .catch(error => {
            console.error("FAILED...", error);
            alert("Failed to send message. Please try again.");
        });
});

document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.querySelectorAll(".animated-text span");
    let index = 0;

    function showNextText() {
        animatedText.forEach((span, i) => {
            span.style.display = i === index ? "inline" : "none";
        });
        index = (index + 1) % animatedText.length;
    }

    setInterval(showNextText, 2000); // Change text every 2 seconds
    showNextText(); // Initialize
});