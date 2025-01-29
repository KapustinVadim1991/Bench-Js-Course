"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});

const links = document.querySelectorAll(".nav-link");
// for (let link of links) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     let href = this.getAttribute("href");
//     document.querySelector(href).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// }

// Optimization

// navMenu.addEventListener("click", function (e) {
//   if (e.target.classList.contains("nav-link")) {
//     e.preventDefault();
//     let href = e.target.getAttribute("href");
//     document.querySelector(href).scrollIntoView({
//       behavior: "smooth",
//     });
//   }
// });

// BUT if you need smooth scroll only, use css scroll-behavior smooth
