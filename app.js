// 1Register GSAP + ScrollTrigger
document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

// 2Initialize Lenis
const lenis = new Lenis({
  smooth: true,
  lerp: 0.1,
});

// 3 Run Lenis each frame
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // ensure GSAP syncs
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 4 Sync Lenis with ScrollTrigger
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
// 3 NAV MENU TOGGLE
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ==============================
// 4 DOM LOADED: ANIMATIONS
// ==============================

  
  
  
// HERO ANIMATION
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 2 } });

tl.from(".hero-image", { x: -800, opacity: 0 })
  .from(".blob", { scale: 0, opacity: 0 }, "-=1")
  .from(".hero-text h1", { x: 500, opacity: 0 }, "-=0.8")
  .from(".hero-text h2", { x: 500, opacity: 0 }, "-=1")
  .from(".hero-buttons", { y: 50, opacity: 0 }, "-=1");


  // ABOUT SECTION - SplitType ANIMATION
  const splitTypes = document.querySelectorAll(".reveal-line");
  splitTypes.forEach((element) => {
    const text = new SplitType(element, { types: "chars" });
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        
      },
      
      transformOrigin:"top",
      scaleY:0,
      y:-20,
      stagger: 0.1,
      
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
      start: "top 90%",
      end: "top 50%",
      toggleActions:"play none none reverse",
      // markers:true,
    },
    y: 150,
    opacity: 0,
    scale: 0.8,
    // rotateX: -10,
    transformOrigin: "center",
    ease: "power2.out",
  });
});

const btn = document.querySelector(".see-more-btn");
const moreProjects = document.querySelector(".more-projects");
let expanded = false;

btn.addEventListener("click", () => {
  if (!expanded) {
    moreProjects.style.display = "flex";
    gsap.to(moreProjects, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
    btn.textContent = "Show Less ↑";
  } else {
    gsap.to(moreProjects, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power1.in",
      onComplete: () => (moreProjects.style.display = "none"),
    });
    btn.textContent = "See More Projects ↓";
  }
  expanded = !expanded;
});

// CTA SECTION

gsap.from(".cta", {
  scrollTrigger:{
    trigger:".cta",
    start:"top 90%",
    end:"top 60%",
    scrub:1,
    toggleActions:"play none none reverse",
    // markers:true
  },
  opacity:0.2,
  scale: 0.6,
  });



  // CONTACT FORM
if (window.innerWidth > 768){

const cont = gsap.timeline({
  scrollTrigger:{
    trigger:".contact",
    start: "top 70%",
    end: "top 40%",
    scrub:5,
    toggleActions: "play none none reverse",
}
 });

  cont.from(".contact-info", {
   opacity: 0,
    xPercent: -50,
    duration: 1.2,
    ease: "power2.out",
    })
  .from(".form",{
    opacity: 0,
    xPercent: 50,
    duration: 1.2,
    ease: "power2.out",
  });

  }
// fLOATING ORB




// ==============================
// 5 REFRESH SCROLLTRIGGER AFTER LOAD
// ==============================
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
});

