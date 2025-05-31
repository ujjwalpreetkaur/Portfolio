const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Typing text animation
const text = "Web Developer";
const span = document.querySelector(".typing-text");
let i = 0;

function type() {
    if (i < text.length) {
        span.textContent += text.charAt(i);
        i++;
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            span.textContent = '';
            i = 0;
            type();
        }, 2000); // Wait 2 seconds, then repeat
    }
}

document.addEventListener("DOMContentLoaded", type);
