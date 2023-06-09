import { gsap } from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const precentage = document.querySelector(".loading__counter--number");

let counter = 0;

let barInterval = setInterval(() => {
  bar.style.width = counter + "%"; // loading bar
  precentage.innerHTML = counter + "%"; // loading number
  counter++;
  if (counter === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      // throw the bar away
      duration: 10,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text, .loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 8,
      opacity: 1,
      rotate: "360deg",
    });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      zIndex: 1,
      background: "transparent",
      opacity: 0.5,
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      rotate: "360deg",
    });
  }
}, 30);
