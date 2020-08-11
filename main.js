'use strict'
let b;
let a = prompt();
function cutFunction() {
    b = a.split(' ').join('');
    if (typeof a != 'string') {
        alert('Введите строку');
        return;
    }
    else if (b.length >= 30) {
        console.log((b.slice(0, 30)) + '...');
    } 
    else if (b.length < 30) {
        console.log(b);
    }
}
cutFunction(a);
