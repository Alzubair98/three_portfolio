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
      duration: 1,
      opacity: 0,
    });
  }
}, 30);
