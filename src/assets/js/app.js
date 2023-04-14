const bar = document.querySelector(".loading__bar--inner");
const precentage = document.querySelector(".loading__counter--number");

let counter = 0;

let barInterval = setInterval(() => {
  bar.style.width = counter + "%";
  precentage.innerHTML = counter + "%";
  counter++;
  if (counter === 101) {
    clearInterval(barInterval);
  }
}, 30);
