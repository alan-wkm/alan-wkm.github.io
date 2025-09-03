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

// Carousel navigation
const carousel = document.querySelector(".events-carousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
});



window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
