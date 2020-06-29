"use strict"

let credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt ("сколько дроидов?");
let totalPrice;

if (quantity == null) {
    console.log("Отменено пользователем")
}  else {
    totalPrice = quantity*pricePerDroid;
}

if (totalPrice>credits) {
    console.log("недостаточно средств на счету")
}  else {
    console.log ("вы купили", quantity, "дроидов", "на счету осталось", credits-totalPrice, "кредитов");
}







