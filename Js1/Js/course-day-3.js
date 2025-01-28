"use strict";

// -------------------------------- Internationalization ---------------------------------

// const number = 123456.789;
// const numberFormat = new Intl.NumberFormat('en-US');
// console.log(numberFormat.format(number)); // 123,456.789

// const currencyFormat = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });
// console.log(currencyFormat.format(number)); // $123,456.79

// -------------------------------- Date ---------------------------------

// const date = new Date();
// console.log(date); //Tue Jan 28 2025 13:11:45 GMT+0300 (Moscow Standard Time)

// const date = new Date(2025, 0, 28, 13, 11, 45); // 0 - January; 2025 - year; 28 - day; 13 - hours; 11 - minutes; 45 - seconds
// console.log(new Date().getDate() - 20); // 28 of the jan - 20 days is 8 Jan, result is equal to 8
// console.log(typeof (new Date().getDate() - 20)); // number
// console.log(new Date().getMonth() - 3); // -3 because Jan is 0

// console.log(new Date().toISOString); // 2025-01-28T10:11:45.000Z
// console.log(new Date().toDateString); // Tue Jan 28 2025
// console.log(new Date().toTimeString); // 13:11:45 GMT+0300 (Moscow Standard Time)
// console.log(new Date().toLocaleString); // 1/28/2025, 1:11:45 PM
// console.log(new Date().toLocaleDateString); // 1/28/2025
// console.log(new Date().toLocaleTimeString); // 1:11:45 PM
// console.log(new Date().toUTCString); // Tue, 28 Jan 2025 10:11:45 GMT

// new Date().toLocaleDateString('en-US', {
//     year: 'numeric',
//      month: 'long',
//      day: 'numeric'}); // January 28, 2025

// -------------------------------- Call Apply Bind ---------------------------------

// >>>> Call - apply a method of an object to another object

// const person1 = {
//   name: "John",
//   age: 30,
//   greet() {
//     console.log("Hello, " + this.name);
//   },
// };

// const person2 = {
//   name: "Elton",
// };

// let personGreet = person1.greet;
// personGreet.call(person1); // Hello, John
// personGreet.call(person2); // Hello, Elton

//>>>> Apply - apply a method of an object to another object with arguments
//difference between call and apply is that apply takes an array of arguments

// personGreet.apply(person1, ["Hello"]); // Hello, John
// personGreet.apply(person2, ["Hello"]); // Hello, Elton

//>>>> Bind - create a new function with a specified 'this'(context) value

// const person1 = {
//   name: "John",
//   age: 30,
//   greet(second) {
//     console.log("Hello, " + this.name + " " + (second ?? ""));
//   },
// };

// let personGreetBind = person1.greet.bind(person1);
// personGreetBind("something"); // Hello, John something
// let personGreetBind2 = person1.greet.bind(person1, "Who is this");
// personGreetBind2(); // Hello, John Who is this

// -------------------------------- Prototype ---------------------------------

// Using an object to create another object

// let objToPrototype = {
//     name: 'John',
//     age: 30
// }

// let obj = Object.create(objToPrototype);
// console.log(obj.name); // John
// console.log(obj.age); // 30
// console.log(obj.__proto__); // {name: 'John', age: 30}

// objToPrototype.newField = 'newField'; // The prototype is a reference to the object that is used to create another object.
// console.log(obj.newField); // newField

// >>>> Set prototype to the object

// const obj = {};
// const proto = {
//   name: "John",
//   age: 30,
// };

// Object.setPrototypeOf(obj, proto); // not recommended to use
// console.log(obj.name); // John

// obj.newField = "newField";
// console.log(proto.newField); // undefined
// proto.newField = "newProtoField";
// console.log(obj.newField); // newField
// console.log(obj.__proto__.newField); // newProtoField
// proto.notDuplicateNewField = "something";
// console.log(obj.notDuplicateNewField); // something

// -------------------------------- WeakMap - weak reference ---------------------------------

// const weakMap = new WeakMap();
// const key = { id: 1 };
// weakMap.set(key, "John");
// console.log(weakMap.get(key)); // John

// -------------------------------- WeakSet ---------------------------------

// const weakSet = new WeakSet();
// const key = { id: 1 };
// weakSet.add(key);
// console.log(weakSet.has(key)); // true
// weakSet.delete(key);

// -------------------------------- Set (unique values) ---------------------------------

// const set = new Set([1, 2, 3, 4]);
// console.log(set); // Set {1, 2, 3, 4}

// set.add(5);
// console.log(set); // Set {1, 2, 3, 4, 5}
// set.delete(5);
// console.log(set); // Set {1, 2, 3, 4}
// console.log(set.has(3)); // true
// set.clear();
// console.log(set); // Set {}

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([3, 4, 5, 6]);
// const diff = new Set([...setA].filter((x) => !setB.has(x)));
// console.log(diff); // Set {1, 2}

// -------------------------------- Map ---------------------------------

// const map = new Map();
// map.set("name", "John").set("age", 30).set("animal", "Owl");

// console.log(map.get("name")); // John
// console.log(map.has("city")); // false

// for (let [key, value] of map) {
//   console.log(key, value); // name John, age 30, animal Owl
// }

// for (let key of map.keys()) {
//   console.log(key); // name, age, animal
// }

// for (let value of map.values()) {
//   console.log(value); // John, 30, Owl
// }

// for (let [key, value] of map.entries()) {
//   console.log(key, value); // name John, age 30, animal Owl
// }

// var arr = Array.from(map);
// console.log(arr); // [['name', 'John'], ['age', 30], ['animal', 'Owl']]

// var obj = Object.fromEntries(map);
// console.log(obj); // {name: 'John', age: 30, animal: 'Owl'}

//map.clear();

// -------------------------------- Strings ---------------------------------

// >>> CASE

//const name = "John Doe";
//console.log(name.toUpperCase()); // JOHN DOE
//console.log(name.toLowerCase()); // john doe

// >>> TRIM
//console.log('   Hello World   '.trim()); // Hello World

// >>> REPLACE
//console.log('Hello World'.replace('World', 'John')); // Hello John

// >>> SPLIT
//console.log('Hello World'.split(' ')); // ['Hello', 'World']

// >>> SUBSTRING
//console.log('Hello World'.substring(6, 11)); // World

// >>> SUBSTR
//console.log('Hello World'.substr(6, 5)); // World

// >>> SLICE
//console.log('Hello World'.slice(6, 11)); // World

// >>> CONCAT
//console.log('Hello'.concat(' ', 'World')); // Hello World

// >>> CHARAT
//console.log('Hello World'.charAt(6)); // W

// >>> CHARCODEAT
//console.log('Hello World'.charCodeAt(6)); // 87

// >>> INCLUDES
//console.log('Hello World'.includes('World')); // true

// >>> STARTSWITH
//console.log('Hello World'.startsWith('Hello')); // true

// >>> ENDSWITH
//console.log('Hello World'.endsWith('World')); // true

// >>> INDEXOF
//console.log('Hello World'.indexOf('World')); // 6

// >>> LASTINDEXOF
//console.log('Hello World'.lastIndexOf('o')); // 7

// >>> MATCH
//console.log('Hello World'.match(/o/g)); // ['o', 'o']

// >>> SEARCH
//console.log('Hello World'.search(/o/)); // 4

// >>> REPEAT
//console.log('Hello World'.repeat(2)); // Hello WorldHello World

// >>> PADSTART
//console.log('Hello World'.padStart(15, '123')); // 123Hello World

// >>> PADEND
//console.log('Hello World'.padEnd(15, '123')); // Hello World123
