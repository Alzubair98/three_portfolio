import { gsap } from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const precentage = document.querySelector(".loading__counter--number");

let counter = 0;

let barInterval = setInterval(() => {
  bar.style.width = counter + "%";
  precentage.innerHTML = counter + "%";
  counter++;
  if (counter === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      duration: 10,
      rotate: "90deg",
      left: "1000%",
    });
  }
}, 30);
