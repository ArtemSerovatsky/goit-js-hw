"use strict"

let credits = 23580;
const pricePerDroid = 3000;

const howManyDroids = prompt('Сколько Вы хотите купить дроидов?');

if (howManyDroids == null) {
    console.log("Отменено пользователем");
}  else {
    const totalPrice = howManyDroids * pricePerDroid;
    if (totalPrice > credits) {
    console.log("недостаточно средств на счету");
    } else {
    console.log (`Вы купили ${howManyDroids}, дроидов, на счету осталось ${credits - totalPrice}, кредитов`);
}
}
