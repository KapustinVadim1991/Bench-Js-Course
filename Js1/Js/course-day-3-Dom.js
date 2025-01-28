"use strict";

// -------------------------------- Selection ---------------------------------

// const allPs = document.querySelectorAll("p");
// allPs.forEach((element) => {
//   element.style.color = "red";
// });

// console.log(document.getElementsByTagName("p"));

// const h1 = document.querySelector("#h1-test");
// const input = document.querySelector("#input-test");

// input.addEventListener("input", (e) => {
//   h1.textContent = e.target.value;

//   if (e.target.value === "") {
//     h1.textContent = "DOM";
//   }
// });

// document.querySelectorAll("p").forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.target.style.color = randomColor();
//   });
// });

// function randomColor() {
//   let randomByte = () => Math.floor(Math.random() * 256);
//   return `rgb(${randomByte()}, ${randomByte()}, ${randomByte()})`;
// }

// -------------------------------- Create nodes ---------------------------------

// const div = document.createElement("div");
// const p = document.createElement("p");
// const text = document.createTextNode("Hello, DOM");

// const p2 = document.createElement("p");
// p2.textContent = "Hello, DOM";

// document
//   .querySelector("body")
//   .appendChild(div)
//   .appendChild(p)
//   .appendChild(text);

// document.querySelector("body").prepend(p2);

// -------------------------------- Work with classes ---------------------------------

// const container = document.querySelector(".p-container");

// container.addEventListener("click", (e) => {
//   e.target.classList.toggle("black"); // cool way to add/remove class

//   e.target.classList.contains("black") // old way to add/remove class
//     ? e.target.classList.add("red")
//     : e.target.classList.remove("red");
// });

// -------------------------------- Optimization events handling ---------------------------------

// instead of attaching events to repetative elements attach it to the parent element and check the target

// const container = document.querySelector(".p-container");

// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("p-class")) {
//     e.target.classList.toggle("black");
//     console.log(e.target);
//   }
// });

// -------------- You can control throtling of the events that happens often -------------

// onThrottledMouseMove(document.querySelector("body"), 500);

// function onThrottledMouseMove(elem, interval) {
//   elem.addEventListener(
//     "mousemove",
//     _.throttle((e) => { // library lodash
//       console.log("mousemove: ", e.clientX, e.clientY);
//     }, interval)
//   );
// }

// -------------- Attributes -------------

// const input = document.querySelector("input");
// console.log(input.getAttribute("type"));
// input.setAttribute("type", "password");
// input.removeAttribute("type");

// -------------- Data attributes - very useful!!! -------------

// const input = document.querySelector("#dataset-element");
// console.log(input.dataset.age); // 29
// console.log(input.dataset.name); // John
