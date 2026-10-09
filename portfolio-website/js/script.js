const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const siteHeader = document.querySelector(".site-header");

const closeMenu = () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
};

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        closeMenu();
    }
});

const updateOnScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);

    let currentSection = "";
    sections.forEach((section) => {
        if (window.scrollY + window.innerHeight / 2 >= section.offsetTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.section === currentSection);
    });
};

updateOnScroll();
window.addEventListener("scroll", updateOnScroll, { passive: true });

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", isActive);
        });

        projectCards.forEach((card) => {
            const isVisible = filter === "alle" || card.dataset.projectCategory === filter;
            card.classList.toggle("is-hidden", !isVisible);
        });
    });
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#form-status").textContent = "Bedankt! Dit demoformulier verstuurt nog geen berichten.";
    event.target.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
