"use strict"

let message = prompt("Введите пароль");
const password= "12345";

if(message===null) {
    console.log("Отменено пользователем")
}

if (message===password) {
    console.log("Добро пожаловать")
}

if (message!==password&&message!==null) {
    console.log("Доступ запрещен, неверный пароль")
}


alert(message)