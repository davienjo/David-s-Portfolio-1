gsap.registerPlugin(ScrollTrigger);

// lenis scrolling smooth animation
// Initialize Lenis
const lenis = new Lenis({ duration: 3 });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// End of lenis

// humburger menu

const menu = document.getElementById("menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

gsap.fromTo(
  ".nav-title",
  { y: -180, scale: 3 },
  {
    y: 0,
    scale: 1,
    ease: "power3.out",
    duration: 1,
    scrollTrigger: {
      trigger: ".nav-title",
      start: "top 80%",
      end: "bottom top",
      scrub: 2,
      invalidateOnRefresh: true,
    },
  },
);

// slide animation
const slideTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".slide",
    scrub: 2,
    start: "top 20%",
  },
});

slideTl.to(".slide1", { y: 220 });
slideTl.to(".slide2", { y: 220 });
slideTl.to(".slide3", { y: 220 });
slideTl.to(".slide4", { y: 220 });

// image section animation

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#image-section > .container",
    start: "top top",
    end: "bottom bottom",
    pin: true,
    scrub: 3,

    onEnter: () => {
      document.body.classList.add("dark-theme");
    },

    onLeaveBack: () => {
      document.body.classList.remove("dark-theme");
    },
  },
});

// IMAGE ANIMATION
tl.to("#clip-path", {
  clipPath: "circle(100% at 50% 50%)",
  scale: 1,
  ease: "none",
});

// TEXT ANIMATION
tl.fromTo(
  ".image-text",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    // filter: "blur(0px)",
    ease: "power2.out",
  },
  0.1,
);

// projects section
// const projects = document.querySelector(".horizontal");

// gsap.to(projects, {
//   x: () => projects.scrollWidth * -1,
//   // xPercent :100,
//   scrollTrigger: {
//   trigger: projects,
//   start: "top top",
//   end: "+=1000px",
//   scrub:  2,
//   pin: true,
//   invalidateOnRefresh:true

// }
// })

if (window.innerWidth > 768) {
  const projects = document.querySelector(".horizontal");

  gsap.to(projects, {
    x: () => -(projects.scrollWidth - window.innerWidth), // FIXED
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll-wrapper", // FIXED
      start: "top top",
      end: () => "+=" + (projects.scrollWidth - window.innerWidth), // FIXED
      scrub: 2,
      pin: true,
      invalidateOnRefresh: true,
    },
  });
}

// about section

const textElements = gsap.utils.toArray(".text");
textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "center 80%",
      end: "center 30%",
      scrub: true,
    },
  });
});

// -----end of about section-----

// ---------- 8. CTA ----------
gsap.from(".cta", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 90%",
    end: "top 60%",
    scrub: 2,
    toggleActions: "play none none reverse",
  },
  opacity: 0.2,
  scale: 0.6,
});

// ---------- 9. CONTACT FORM ----------
if (window.innerWidth > 768) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    })
    .from(".contact-info", {
      opacity: 0,
      xPercent: -50,
      duration: 1.2,
      ease: "power2.out",
    })
    .from(".form", {
      opacity: 0,
      xPercent: 50,
      duration: 1.2,
      ease: "power2.out",
    });
}
ScrollTrigger.refresh();