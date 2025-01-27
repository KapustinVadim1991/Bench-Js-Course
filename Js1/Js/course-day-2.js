// Object.assign(target, ...sources) will make a copy of all enumerable own properties from one or more source objects to a target object.
// Will not copy inner objects, it will copy only references to them.

//  let obj1 = { name1: 'John', age: 30 };
//  let obj2 = { snils: 172123112, id: 7, secondLevel: { object2name: 'alalal'} };
// let obj3 = Object.assign({}, obj1, obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// >>>>>>> copy with operator spread
// Will not copy inner objects, it will copy only references to them.

// let obj3 = { ...obj4, ...obj5 };
// console.log(obj3);

// >>>>>>> DEEP COPY
//let obj3 = structuredClone(obj2);

// -------------------------------- JSON ----------------------------------------------

// let obj1 = { name1: 'John', age: 30 };
// let obj2 = JSON.stringify(obj1);
// console.log(obj2);

// let obj3 = JSON.parse(obj2);
// console.log(obj3);

// -------------------------------- Destructurization ---------------------------------

// const obj1 = { name1: 'John', age: 30 };

// const { name1, age } = obj1; // name1 = obj1.name1, age = obj1.age
// const { name1: myName, age: myAge } = obj1; // Renaming fields, myName = obj1.name1, myAge = obj1.age
// const { name1: myName1 = "defaultValue", age: myAge1 } = obj1; // Renaming fields, myName = obj1.name1, myAge = obj1.age

// >>>>>>> destructurization of inner objects

// const obj2 = { snils: 172123112, id: 7, secondLevel: { object2name: 'alalal'} };
// const { snils, id, secondLevel: { object2name } } = obj2;
// console.log(snils, id, object2name);

// >>>>>>> destructurization of arrays

// const arr = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Jack', age: 40 }]
// for(const { name, age } of arr){
//     console.log(name, age);
// }

// -------------------------------- Spread & Rest ---------------------------------

// >>>>>>> Spread operator is used to split an array or object into individual elements.

// const arr1 = [1, 2, 3, false];
// const arr2 = [...arr1, 4, 5, 6];
// console.log(arr2); // [1, 2, 3, false, 4, 5, 6]

// >>>>>>>  rest operator is used to collect multiple elements into an array.

// const [first, ...rest] = arr2; // destructurization with rest operator
// console.log(rest); // [2, 3, false, 4, 5, 6]

// -------------------------------- Object ---------------------------------
// const person = { 
//     name: 'John', 
//     age: 30,
//     greet: function(){
//         console.log('Hello, ' + this.name);
//     },
//     greet1(){
//         console.log('Hello, ' + this.name);
//     }
// };

// let keys = Object.keys(person); // ['name', 'age', 'greet', 'greet1']
// let values = Object.values(person); // ['John', 30, function(){...}, function greet1(){...}]
// let entries = Object.entries(person); // [['name', 'John'], ['age', 30], ['greet', function(){...}], ['greet1', function greet1(){...}]]

// for (let key of keys){
//     console.log(key, person[key]); // name John, age 30, greet function(){...}, greet1 function greet1(){...}
// }

// for (let key in person){
//     console.log(key, person[key]); // name John, age 30, greet function(){...}, greet1 function greet1(){...}
// }

// array.forEach((item, index, arr) => {
//     console.log(item, index, arr); 
// });

// console.log(person.hasOwnProperty('name')); // true

// -------------------------------- immutable object ---------------------------------

// Object.freeze(person); // make object immutable
// person.name = 'Owl'; // throws an error in strict mode  'use strict';
// console.log(person.name); // John
// console.log(Object.isFrozen(person)); // true

// >>>>>>> Changable but not deletable and addable

// Object.seal(person); // make object changable but not deletable and addable
// person.name = 'Owl'; // Owl
// delete.person.name; // throws an error
// console.log(Object.isSealed(person)); // true

// >>>>>>> Changable but not extendable

// Object.preventExtensions(person); // make object changable but not extendable
// person.name = 'Owl'; // Owl
// person.surname = 'Smith'; // throws an error

// -------------------------------- ?? ---------------------------------

// let a = null; // or undefined
// let b = a ?? 'default value';

// -------------------------------- ? ---------------------------------

// if(personNotExisted?.name){
//     console.log(personNotExisted.name);
// }
// else{
//     console.log('Person is not existed');
// }

// -------------------------------- Arrays ---------------------------------

// let arr = [1, 2, 3, 4, 5];
// arr.push(6, 7, 8); // add elements to the end of the array
// arr.pop(); // remove the last element of the array

// shift is expensive operation, because it should shift all elements indexes to the right
// arr.unshift(0); // add elements to the beginning of the array
// arr.shift(); // remove the first element of the array
// arr.slice(1, 3); // [2, 3] - returns a new array from 1 to 3 indexes
// arr.slice(-2); // [4, 5] - returns a new array from the end of the array
// arr.slice(0, -2); // [1, 2, 3] - returns a new array from the beginning to the end - 2 indexes

// arr.splice(1, 2); // [2, 3] - remove 2 elements from 1 index into a new array
// arr.splice(1, 2, 'a', 'b', 'c'); // [2, 3] - remove 2 elements from 1 index and add 'a', 'b', 'c' elements into a new array
// arr.toSpliced(1, 2); // [2, 3] - remove 2 elements from 1 index into a new array, but not change the original array

// arr.splice(-2, 2); // [4, 5] - remove 2 elements from the end of the array into a new array

// arr.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8] - returns a new array with concatenated elements
// arr.concat([6, 7, 8], 30, 40); // [1, 2, 3, 4, 5, 6, 7, 8, 30, 40] - returns a new array with concatenated elements

//arr.reduce((acc, item) => acc + item, 0); // 15 - returns a sum of all elements, last parameter is initial value of accumulator

// >>>>>>> Method map() creates a new array with the results of calling a provided function on every element in the calling array.
//arr.map((item, index) => item * 2); // [2, 4, 6, 8, 10] - returns a new array with all elements multiplied by 2

// >>>>>>> Method filter() creates a new array with all elements that pass the test implemented by the provided function.
//arr.filter((item, index) => item > 2); // [3, 4, 5] - returns a new array with elements greater than 2

// >>>>>>> Method find() returns the first element in the array that satisfies the provided testing function.
//arr.find((item, index) => item > 2); // 3 - returns the first element greater than 2

// >>>>>>> Method findIndex() returns the index of the first element in the array that satisfies the provided testing function.
//arr.findIndex((item, index) => item > 2); // 2 - returns the index of the first element greater than 2

// >>>>>>> Method every() tests whether all elements in the array pass the test implemented by the provided function.
//arr.every((item, index) => item > 2); // false - returns false because not all elements greater than 2

// >>>>>>> Method some() tests whether at least one element in the array passes the test implemented by the provided function.
//arr.some((item, index) => item > 2); // true - returns true because at least one element greater than 2

// >>>>>>> Method includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//arr.includes(2); // true - returns true because the array includes 2
//arr.includes(2, 2); // false - returns false because the array does not include 2 from the 2 index


// >>>>>>> Method reverse() reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//arr.reverse(); // [5, 4, 3, 2, 1] - returns a reversed array

// >>>>>>> Method toReversed() returns a new reversed array
//arr.toReversed(); // [5, 4, 3, 2, 1] - returns a reversed array

// >>>>>>> Method sort() sorts the elements of an array in place and returns the sorted array.
//const arrSort = [1, 11, 22, 50, 5, 2];
//arrSort.sort(); // [1, 11, 2, 22, 5, 50] - returns a sorted array
//arrSort.sort((a, b) => a - b); // [1, 2, 5, 11, 22, 50] - returns a sorted array

// >>>>>>> Method toSorted() returns a new sorted array
//arrSort.toSorted((a,b) => a - b); // [1, 2, 5, 11, 22, 50] - returns a sorted array

// >>>>>>> Method flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//const arrFlat = [1, 2, [3, 4, [5, 6]]];
//console.log(arrFlat.flat(2)); // [1, 2, 3, 4, 5, 6] - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// depth 1 - [1, 2, 3, 4, [5, 6]]

// >>>>>>> Method with() returns a new array with added element at the specified index
// let arr = [1, 2, 3, 4, 5];
// let arrCopy = arr.with (3, 'Some value'); // [1, 2, 3, 'Some value', 4, 5] - returns a new array with added element at the specified index