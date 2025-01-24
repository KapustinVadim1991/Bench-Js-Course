// var str = 'Hello World';
// var str1 = 'Hello World1';

// console.log(str);
// console.log(str1);

// {
//     var glVar = 200; // global variable, window glVar
// }

// console.log(glVar);

// {
//     let localScope = 200; // local variable
// }
// console.log(localScope); // ReferenceError: localScope is not defined

// // template string
// let name = "John";
// let greeting = `Hello, ${name}! Welcome to the course.`;
// console.log(greeting);

// Циклы
// for (let i = 0; i < 10; i++) {
// while (i < 10) {
// do while (i < 10)
// for in (for objects)
// for of (for arrays)
// forEach (for arrays)

//if('str' && 20){ console.log(true)} //true

// Функции декларейшн и экспрешн

// fnDeclaration();
// function fnDeclaration(){
//     console.log('Can call this function above the function')
// }

// //fnExpression(); // ReferenceError: Cannot access 'fnExpression' before initialization
// const fnExpression = function (){
//     console.log('Cannot call this function above the function')
// }
// fnExpression();

// Приоритет функций

// function fPriority(){
//     console.log('Я главный');
// }
// fPriority();
// function fPriority(){
//     console.log('Нет я главный');
// }

// Аргументы функций

// function arg(){
//     console.log(arguments); // все аргументы
// }

function setRandomGeneratedPassword(){
    let password = generatePassword();
    document.getElementById('password').value = password;
}

function generatePassword(){
    let password = '';
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++){
        let index = Math.floor(Math.random() * symbols.length);
        password += symbols[index];
    }
    return password;
}