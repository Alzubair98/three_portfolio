const bar = document.querySelector(".loading__bar--inner");

let counter = 0;

let barInterval = setInterval(() => {
  bar.style.width = counter + "%";
  counter++;
  if (counter === 101) {
    clearInterval(barInterval);
  }
}, 50);
