// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter Effect for Home
const text = "Welcome to My Portfolio";
const typewriter = document.getElementById("typewriter");
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!typewriter) return;
    if (isDeleting) {
        typewriter.textContent = text.substring(0, index--);
    } else {
        typewriter.textContent = text.substring(0, index++);
    }

    if (!isDeleting && index === text.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

typeEffect();

// About Me Typewriter Effect
const aboutText = "James Romuar";
const aboutTypewriter = document.getElementById("about-typewriter");
let aboutIndex = 0;
let aboutDeleting = false;

function aboutTypeEffect() {
    if (!aboutTypewriter) return;

    if (aboutDeleting) {
        aboutTypewriter.textContent = aboutText.substring(0, aboutIndex--);
    } else {
        aboutTypewriter.textContent = aboutText.substring(0, aboutIndex++);
    }

    if (!aboutDeleting && aboutIndex === aboutText.length) {
        setTimeout(() => aboutDeleting = true, 1000);
    } else if (aboutDeleting && aboutIndex === 0) {
        aboutDeleting = false;
    }

    setTimeout(aboutTypeEffect, aboutDeleting ? 100 : 150);
}

aboutTypeEffect();
