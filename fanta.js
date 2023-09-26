// // // var tl = gsap.timeline({
// // //   srollTrigger: {
// // //     trigger: ".two",
// // //     start: "50% 50%",
// // //     end: "50% 50%",
// // //     markers: true,
// // //     scrub: true,
// // //   },
// // // });
let time = gsap.timeline();

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".two",
//     start: "40% 40%",
//     end: "70% 60%",
//     scrub: true,
//     // markers: true,
//   },
// });

// var tl2 = gsap.timeline({
//   scrollTriger: {
//     trigger: ".three",
//     start: "0% 95%",
//     end: "70% 50%",
//     scrub: true,
//     markers: true,
//   },
// });
// tl2.from(".lemon1", {
//   rotate: "-90deg",
//   left: "-50%",
//   top: "110%",
// });

// tl2.from("#cocacola", {
//   rotate: "-90deg",
//   left: "-50%",
//   top: "110%",
// });

// tl.to(
//   "#fanta",
//   {
//     top: "120%",
//     left: "0%",
//   },
//   "orange"
// );
// tl.to(
//   "#orange-cut",
//   {
//     top: "160%",
//     left: "23%",
//   },
//   "orange"
// );
// tl.to(
//   "#orange",
//   {
//     top: "160%",
//     right: "10%",
//     width: "17%",
//   },
//   "orange"
// );
// tl.to(
//   "#leaf",
//   {
//     top: "120%",
//     left: "80%",
//     rotate: "140deg",
//   },
//   "orange"
// );
// tl.to("#leaf2", {
//   top: "110%",
//   left: "0%",
//   rotate: "140deg",
// });

time.from("nav", {
  y: -200,
  opacity: 0,
  scale: 0,
  delay: 1,
  stagger: 0.3,
});

time.from(".head", {
  y: -200,
  opacity: 0,
  scale: 0,
  delay: 1,
  stagger: 0.3,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  },
  "ca"
);

tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);

tl2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "42%",
    top: "204%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "35%",
    top: "210%",
    left: "33%",
  },
  "ca"
);
