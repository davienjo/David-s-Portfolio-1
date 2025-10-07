
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




// animations using GSAP
document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  // HERO SECTION
  const tl = gsap.timeline({ defaults: { ease: "linear", duration:1} });
  tl.fromTo(".hero-img img", { y: -1000}, {opacity: 1, y:0 });
  tl.fromTo(".hero-text-section", { x: 1000, opacity: 0,}, { x: 0, opacity: 1 });


  // ABOUT SECTION
  
  // tl.fromTo(".about-text", { x: 1000, opacity: 0,}, { x: 0, opacity: 1 });


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

  // SERVICE CARDS---------------------------------------To revisit LATER for better understanding
  
// select the container and cards
const container = document.querySelector(".services-container");
const cards = gsap.utils.toArray(".service-card");

// duplicate your 6 cards once (so total 12)
cards.forEach((card) => {
  container.appendChild(card.cloneNode(true));
});

// make it scroll infinitely and seamlessly
const scroll = gsap.to(container, {
  xPercent: -50,  // moves halfway (since we doubled)
  ease: "none",
  duration: 20,   // adjust for speed (higher = slower)
  repeat: -1,
  modifiers: {
  xPercent: gsap.utils.wrap(-50, 0) // wraps perfectly
  }
});

// optional: pause on hover
container.addEventListener("mouseenter", () => scroll.pause());
container.addEventListener("mouseleave", () => scroll.play());


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
