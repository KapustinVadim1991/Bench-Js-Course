import { greet } from "./lib.js";
// default exported object can be named as you wish
import test from "./lib.js";

// import * as myModule from "./lib.js"; // to import all variables and functions

("use strict");

// this js file is connected via .html file

greet("John"); // Hi John
console.log(test.a1); // 32
console.log(test.a2); // hello
