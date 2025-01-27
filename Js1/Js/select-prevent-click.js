// ПРЕДОТВРАЩЕНИЕ ОБРАБОТКИ КЛИКОВ ПРИ ОТКРЫТОМ ДРОПДАЦУНЕ

// 'use strict;'

// var myApp = myApp || {}; // creating namespace

// document.addEventListener('DOMContentLoaded', function(){
//     let select = document.getElementsByClassName('our-select')[0];
//     myApp.SelectBox.init(select);
// });

// myApp.SelectBox = (function(){
    
//     let select;
//     let isDropdownOpened = false;

//     function generateRandomText(length = 8){
//         let result = '';
//         let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         for (let i = 0; i < length; i++){
//             let index = Math.floor(Math.random() * symbols.length);
//             result += symbols[index];
//         }
//         return result;
//     }
    
//     return {
//         init: function (selectElement) {
//             select = selectElement;

//             // Обработчик клика по select
//             select.addEventListener('click', (e) => {
//                 e.stopPropagation(); // Остановить всплытие, чтобы document-click не сработал
//                 isDropdownOpened = !isDropdownOpened;
//                 if (isDropdownOpened) {
//                     select.classList.add('open');
//                 } else {
//                     select.classList.remove('open');
//                 }
//             });

//             // Обработчик кликов вне select
//             document.addEventListener('click', (e) => {
//                 if (!select.contains(e.target)) {
//                     if (isDropdownOpened) {
//                         // Закрыть dropdown
//                         select.classList.remove('open');
//                         isDropdownOpened = false;

//                         // Остановить действие по умолчанию
//                         e.preventDefault();
//                         e.stopPropagation();
//                     }
//                 }
//             }, true);

//         },

//         testClick: function (){

//             console.log('IsDropdownOpened: ', isDropdownOpened);

//             var h1 = document.getElementsByClassName('test-text')[0];
//             h1.textContent = generateRandomText();
//         }
//     }
// })();