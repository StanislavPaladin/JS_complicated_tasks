'use strict'

// Решение через многомерный массив:

let days = [];
days['ru'] = ['Пн, Вт, Ср, Чт, Пт, Сб, Вс'];
days['en'] = ['Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday'];
let language = prompt ('Введите ваш язык. Ru / En');
console.log(days[language]);


// let x = prompt('ru / eng');

//Решение через if
 

// if (x == 'ru') {
//     console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');

// } else if (x == 'en') {
//     console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday');
// }
// else 
// {
//     alert('Вы ввели неверное значение! Попробуйте ещё раз.')
// }

    
// Switch-case:

// switch(x) {
//     case 'ru':
//         console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
//         break;
//     case 'en':
//         console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Saturday');
//         break;
// };


// Вторая задача:
let namePerson = prompt('Имя пользователя');

let input = (namePerson == 'Артём') ? 'Директор' :
  (namePerson == 'Максим') ? 'Преподаватель' :
  (namePerson) ? 'Студент' :
  'Какой необычный возраст!';
console.log( input );
