"use strict";

// ------------------ Incapsulation ---------------------

function MyIncapsulatedFunc() {
  let privateField = 0;

  this.getPrivateField = () => privateField;
}

var myIncapsulatedObject = new MyIncapsulatedFunc();
console.log(myIncapsulatedObject.privateField); // undefined
console.log(myIncapsulatedObject.getPrivateField()); // 0

function MyIncapsulatedFunc2() {
  let myObj = {
    name,
    age: 55,
  };

  return {
    getAge: function () {
      return myObj.age;
    },

    setAge: function (a) {
      myObj.age = a;
    },
  };
}

let myF2 = MyIncapsulatedFunc2();

myF2.setAge(5);
console.log(myF2.getAge());

// ------------------ Inheritance & Polymorphism ---------------------

function F1() {}
F1.prototype.polyMethod = function () {
  console.log("Function 1");
};

function F2() {}

F2.prototype = Object.create(F1);
F2.prototype.constructor = F2;
F2.prototype.polyMethod = function () {
  console.log("Function 2");
};

function F3() {}

F3.prototype = Object.create(F1);
F3.prototype.constructor = F2;
F3.prototype.polyMethod = function () {
  console.log("Function 3");
};

let f1 = new F1();
let f2 = new F2();
let f3 = new F3();

f1.polyMethod();
f2.polyMethod();
f3.polyMethod();

// -------------------------- Classes -----------------------------

// Comparison of the function construction and class

function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};
let person = new Person("John");
console.log(person.name);
person.sayHello();

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello " + this.name);
  }
}

let person1 = new PersonClass("Bob");
console.log(person1.name);
person1.sayHello();

// -------------- Modern class with private fields -----------

class PrivateFields {
  #name;
  #age;

  constructor(name, age = 0) {
    this.#name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0 && newAge < 130) {
      this.#age = newAge;
    } else {
      alert("Age is incorrect");
    }
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }
}

let obj = new PrivateFields("John", 32);
obj.setAge(145); //alert
console.log(obj.getAge()); //32
obj.setAge(55);
console.log(obj.getAge()); //55
