// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
            link.classList.add("active");
        }
    });
});

// Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

// Event image toggle
document.querySelectorAll(".event-card").forEach((card) => {
    const images = card.querySelectorAll(".event-images img");
    const buttons = card.querySelectorAll(".image-toggle button");

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            images.forEach(img => img.classList.remove("active"));
            buttons.forEach(b => b.classList.remove("active"));
            images[index].classList.add("active");
            btn.classList.add("active");
        });
    });
});

// Carousel navigation with snap-to-center
const carousel = document.querySelector(".events-carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

function getCardWidth() {
    const card = carousel.querySelector(".event-card");
    return card ? card.offsetWidth + 24 : 320; // card width + gap (1.5rem = 24px)
}

function scrollToCard(direction) {
    const cardWidth = getCardWidth();
    const currentScroll = carousel.scrollLeft;
    const newScroll = currentScroll + (direction * cardWidth);

    carousel.scrollTo({
        left: newScroll,
        behavior: "smooth"
    });
}

prevBtn.addEventListener("click", () => scrollToCard(-1));
nextBtn.addEventListener("click", () => scrollToCard(1));



window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
