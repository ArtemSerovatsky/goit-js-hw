"use strict"

const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaikaPrice = 120;

const country = prompt("в какую страну необходима доставка?");

if (country !== null) {
switch (country.toLowerCase()) {
    case "china":
        console.log("Доставка в", country, "будет стоить", chinaPrice, "кредитов");
        break

    case "chili":        
        console.log("Доставка в", country, "будет стоить", chiliPrice, "кредитов");
        break

    case "australia":
        console.log("Доставка в", country, "будет стоить", australiaPrice, "кредитов");
        break

    case "india":
        console.log("Доставка в", country, "будет стоить", indiaPrice, "кредитов");
        break

    case "jamaika":
        console.log("Доставка в", country, "будет стоить", jamaikaPrice, "кредитов");
        break

    default:
        console.log("В вашей стране доставка не доступна");
}
}