'use strict';

const getDate = () => {

let firstFormat = document.querySelector('.firstFormat');
let secondFormat = document.querySelector('.secondFormat');


  let Data = new Date();
  let Year = Data.getFullYear();
  let Month = Data.getMonth();
  let Day = Data.getDay();
  let dayNumber = Data.getDate();
  let Hour = Data.getHours();
  let Minutes = Data.getMinutes();
  let Seconds = Data.getSeconds();

  let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

  let currentDay = week[Day - 1];
  let currentMonth = month[Month];

  const formatB = (item) => {
    if (String(item).length === 1) {
      return '0' + item;
    } else {
      return String(item);
    }
  };

let formatHour;
let formatMinutes;
let formatSeconds;


    if (Hour === 1 || Hour === 21) {
        formatHour =  'час';
    }   else if (Hour ===2 || Hour ===3 || Hour ===4 || Hour ===22 || Hour ===23) {
        formatHour = 'часа';
    } else {
        formatHour = 'часов';
    }

    if (Minutes === 1||Minutes === 21||Minutes === 31||Minutes === 41||Minutes === Minutes === 51) {
        formatMinutes = 'минута';
    } else if (Minutes === 2||Minutes === 3||Minutes === 4||Minutes === 22||Minutes === 23||Minutes === 24||Minutes === 32||Minutes === 33||Minutes === 34||Minutes === 42||Minutes === 43||Minutes === 44|Minutes === 52||Minutes === 53||Minutes === 54){
        formatMinutes = 'минуты';
    } else {
        formatMinutes = 'минут';
    }

    if (Seconds === 1||Seconds === 21||Seconds === 31||Seconds === 41||Seconds === 51) {
        formatSeconds = 'секунда';
    } else if (Seconds === 2||Seconds === 3||Seconds === 4||Seconds === 22||Seconds === 23||Seconds === 24||Seconds === 32||Seconds === 33||Seconds === 34||Seconds === 42||Seconds === 43||Seconds === 44|Seconds === 52||Seconds === 53||Seconds === 54){
        formatSeconds = 'секунды';
    } else {
        formatSeconds = 'секунд';
    }



 const formatA = () => {
  firstFormat.textContent =  `Сегодня  ${currentDay}, ${ dayNumber} 
  ${currentMonth}   ${Year}  года 
,  ${Hour}  ${formatHour}  ${Minutes}  ${formatMinutes}  
${Seconds}  ${formatSeconds} `; 
 };

  secondFormat.textContent = (formatB(dayNumber) + '.' + formatB(Month) + '.' + formatB(Year) + ' - ' +
    formatB(Hour) + '.' + formatB(Minutes) + '.' + formatB(Seconds));


formatA();
};

setInterval(getDate, 1000);