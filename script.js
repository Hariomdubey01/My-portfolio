// Mobile Navbar Toggle
// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when link is clicked (mobile)
document.querySelectorAll(".nav__link").forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
);

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll(".nav__link").forEach(link =>
                link.classList.remove("active-link")
            );
            if (navLink) {
                navLink.classList.add("active-link");
            }
        }
    });
});
