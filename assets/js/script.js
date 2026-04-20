const header = document.querySelector("header");

function getHeaderOffset() {
  return header ? header.offsetHeight + 24 : 108;
}

function syncHeaderOffsetVar() {
  document.documentElement.style.setProperty(
    "--header-offset",
    `${getHeaderOffset()}px`,
  );
}

// Smooth scroll for navigation with sticky-header offset.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const hash = this.getAttribute("href");

    if (!hash) {
      return;
    }

    e.preventDefault();

    if (hash === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    const targetY =
      target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

    window.scrollTo({
      top: Math.max(targetY, 0),
      behavior: "smooth",
    });
  });
});

// Navbar background on scroll
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // if (currentScroll > 50) {
  //   navbar.style.background = "rgba(255, 255, 255, 0.95)";
  //   navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  // } else {
  //   navbar.style.background = "rgba(255, 255, 255, 0.8)";
  //   navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
  // }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  syncHeaderOffsetVar();

  const animatedElements = document.querySelectorAll(
    ".bg-white.p-6, .bg-white.rounded-2xl",
  );
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

window.addEventListener("resize", syncHeaderOffsetVar);
