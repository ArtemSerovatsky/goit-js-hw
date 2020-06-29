"use strict"

let total = 1000;
let ordered = 700;
const notEnough = "на складе недостаточно товаров";
const order = "Заказ оформлен, с Вами свяжется менеджер";

if (ordered > total) {
    console.log(notEnough)
}

if (total>=ordered) {
    console.log(order)
}

ordered = 1500;

if (ordered > total) {
    console.log(notEnough)
}

if (total>=ordered) {
    console.log(order)
}


