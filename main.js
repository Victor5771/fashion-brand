/* =========================
   MOBILE NAVIGATION TOGGLE
========================= */
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   CLOSE MENU WHEN LINK IS CLICKED (MOBILE)
========================= */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* =========================
   HEADER SCROLL EFFECT
   (Subtle luxury enhancement)
========================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "12px 0";
    header.style.transition = "0.3s ease";
    header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
  } else {
    header.style.padding = "20px 0";
    header.style.boxShadow = "none";
  }
});

/* =========================
   SCROLL REVEAL FOR IMAGE TEXT
========================= */
const textBlocks = document.querySelectorAll(".look-text");

const revealText = () => {
  const windowHeight = window.innerHeight;
  textBlocks.forEach((block) => {
    const revealTop = block.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      block.classList.add("active");
    } else {
      block.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealText);
