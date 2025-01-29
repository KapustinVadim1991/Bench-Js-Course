"use strict";

const sections = document.querySelectorAll(".sec");

function callback(e, obs) {
  var sec = e[0];

  if (sec.isIntersecting) {
    sec.target.classList.remove("pop");
  }
}

const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((element) => {
  observer.observe(element);
});

console.log(0 % 5);
console.log(1 % 5);
console.log(2 % 5);
console.log(3 % 5);
console.log(4 % 5);
console.log(5 % 5);
