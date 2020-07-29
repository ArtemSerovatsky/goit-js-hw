"use strict"

let input;
let total=0;

do {
    input=prompt("Введите число");

    if (Number.isNaN(Number(input))) {
        alert("Это не число, попробуйте еще раз");
        continue; 
    }
    total += +input
    } while (input !== null);


console.log (`всего ${total}`)