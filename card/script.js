gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".slide");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sliders",
    pin: ".body",
    pinSpacing: true,
    scrub: 1,
    end: "+=1500",
  },
});

gsap.to(".next-block", {
  // backgroundColor: "tomato",
  scrollTrigger: {
    trigger: ".next-block",
    pinnedContainer: ".body",
    start: "top 50%",
    toggleActions: "play none reset none",
  },
});
