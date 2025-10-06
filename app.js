
  const paragraphs = document.querySelectorAll('.about p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.6 }); // 60% visible

  paragraphs.forEach(p => observer.observe(p));


// Select the hamburger menu and nav links
// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");

// // Toggle 'active' class on click
// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// document.querySelectorAll(".nav-links a").forEach(link => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });


// animations using GSAP
document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  // HERO SECTION
  const tl = gsap.timeline();
  tl.from(".hero-h1", { y: -50, opacity: 0, duration: 4, ease: "power3.out" })
    .from(".hero h2", { y: 40, opacity: 0, duration: 3, ease: "power2.out" }, "-=1")
    .from(".hero p", { y: 30, opacity: 0, duration: 3, ease: "power1.out" }, "-=0.8")
    .from(".hero-btn", { y: 20, opacity: 0, duration: 2, ease: "power1.out" }, "-=0.6");

  // GENERAL SECTION FADE-IN
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
      opacity: 0,
      y: 80,
      duration: 1.4,
      ease: "power2.out",
    });
  });

  // SERVICE CARDS
  
const totalCards = document.querySelectorAll(".service-card").length;

gsap.to(".services-container", {
  xPercent: -100,
  repeat: -1,
  duration: 20,
  ease: "none",
  modifiers: {
    xPercent: gsap.utils.wrap(-100, 0),
  },
});

  

  // ABOUT SECTION
  if (window.innerWidth > 768) {
  gsap.from(".about-image img", {
    scrollTrigger: {
      trigger: ".about",
      start: "center 80%",
      end: "bottom 80%",
      scrub: true,
    },
    opacity: 0,
    x: -150,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about",
      start: "center 80%",
      end: "bottom 80%",
      scrub: true,
    },
    opacity: 0,
    x: 150,
    duration: 1.2,
    ease: "power2.out",
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
