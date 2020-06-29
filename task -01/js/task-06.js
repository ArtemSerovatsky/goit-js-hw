"use strict"

let total=0;

do {
    let input=prompt("Введите число");

if (input === null) {
    console.log ("Отменено пользователем");
    break; 

    } else {
        total=total+Number(input);
    }
        } while (true);


console.log ("всего", total)