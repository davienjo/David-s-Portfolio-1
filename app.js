// 1️⃣ Register GSAP + ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2️⃣ Initialize Lenis
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
});

// 3️⃣ Run Lenis each frame
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // ensure GSAP syncs
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 4️⃣ Sync Lenis with ScrollTrigger
ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) lenis.scrollTo(value);
    return window.scrollY;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }
});


// ==============================
// 3️⃣ NAV MENU TOGGLE
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==============================
// 4️⃣ DOM LOADED: ANIMATIONS
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // HERO SECTION ANIMATION
  const tl = gsap.timeline({ defaults: { ease: "linear", duration: 1 } });
  tl.fromTo(".hero-img img", { y: -1000 }, { opacity: 1, y: 0, duration: 1.6 });
  tl.fromTo(
    ".hero-text-section",
    { x: 1000, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.8 },
    "-=1.2"
  );

  // HERO WAVE TEXT
  const waveText = document.querySelector(".hero-h1");
  if (waveText) {
    const chars = waveText.textContent.split("");
    waveText.textContent = "";

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      waveText.appendChild(span);
    });

    gsap.to(".hero-h1 span", {
      y: -30,
      ease: "elastic.out(1, 0.5)",
      duration: 1,
      stagger: { each: 0.02, repeat: 5, yoyo: true },
      color: "var(--light-color)",
    });
  }

  // ABOUT SECTION - SplitType ANIMATION
  const splitTypes = document.querySelectorAll(".reveal-line");
  splitTypes.forEach((element) => {
    const text = new SplitType(element, { types: "words" });
    gsap.from(text.words, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: false,
        toggleActions: "play none none reverse",
      },
      opacity: 0.2,
      duration: 2.5,
      // y:10,
      stagger: 0.1,
      ease: "power2.out",
    });
  });

  // SERVICES - INFINITE SCROLL
  const servicesContainer = document.getElementById("services-container");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  if (servicesContainer && leftArrow && rightArrow) {
    const scrollAmount = 300;
    leftArrow.addEventListener("click", () => {
      servicesContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    rightArrow.addEventListener("click", () => {
      servicesContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  // PROJECTS
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 60%",
        scrub: false,
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0.8,
      duration: 2,
      ease: "power2.out",
      delay: i * 0.2,
    });
  });

  // CONTACT FORM
  gsap.from(".contact form", {
    scrollTrigger: {
      trigger: ".contact form",
      start: "top 80%",
      end: "top 60%",
      scrub: true,
    },
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power2.out",
  });
});

// ==============================
// 5️⃣ REFRESH SCROLLTRIGGER AFTER LOAD
// ==============================
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
