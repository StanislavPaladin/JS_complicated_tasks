'use strict'
let output;
let input = 'lol kek';
function cutFunction(param) {
    output = param.split(' ').join('');
    if (typeof param != 'string') {
        alert ('Введите строку');
        return;
    }
    else if (output.length >= 30) {
        return ((output.slice(0, 30)) + '...');
    } 
    else if (output.length < 30) {
        return (output);
    }
}
console.log(cutFunction(input));
