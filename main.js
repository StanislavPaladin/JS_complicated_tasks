'use strict';

let array = ['244', '27', '11223', '4123123', '4123123123', '7811', '123']; 

array.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});




let n = 1000;
nextPrime:
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j ==0)
         continue nextPrime;
    }
    console.log(i + ' Делители этого числа 1 и ' + i);
};