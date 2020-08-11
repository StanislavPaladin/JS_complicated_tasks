'use strict'
let output;
let input = prompt();
function cutFunction() {
    output = input.split(' ').join('');
    if (typeof input != 'string') {
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
cutFunction(input);
console.log(cutFunction());
