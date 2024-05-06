var tl = gsap.timeline();
tl.from(".left h1", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
});
tl.from(".right a", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});
tl.from(".lowerpage .lower_left h1,.lowerpage .lower_left h2", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});
tl.from(
  ".lowerpage .lower_right .imageleft .image1,.image2 ,.lowerpage .lower_right .imageright .image3,.image4",
  {
    scale: 0,
    opacity: 0,
    stagger: 0.7,
    duration: 0.5,
  }
);
tl.from(".service", {
  scale: 0,
  opacity: 0,
  //   stagger: 0.7,
  duration: 0.5,
  rotate: 280,
  borderRadius: "50%",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 4,
    markers: true,
    start: "top 25%",
    end: "top 15%",
  },
});
tl.from(".feedbackleft #head ,.feedbackleft h1 , .feedbackleft p", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
});
tl.from(".feedbackright", {
  scale: 0,
  opacity: 0,
  stagger: 0.7,
  duration: 0.5,
});
tl.from(".custom-shape-divider-bottom-1713427540", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 1,
  yoyo: 1,
});
