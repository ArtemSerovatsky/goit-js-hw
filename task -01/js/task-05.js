"use strict"

let cost;

let country = prompt("в какую страну необходима доставка?");

switch (country.toLowerCase()) {
    case "китай":
        cost=100
        console.log("Доставка в", country, "будет стоить", cost, "кредитов")
        break

    case "чили":
        cost=250
        console.log("Доставка в", country, "будет стоить", cost, "кредитов")
        break

    case "австралия":
        cost=170
        console.log("Доставка в", country, "будет стоить", cost, "кредитов")
        break

    case "индия":
        cost=80
        console.log("Доставка в", country, "будет стоить", cost, "кредитов")
        break

    case "ямайка":
        cost=120
        console.log("Доставка в", country, "будет стоить", cost, "кредитов")
        break

    default:
        console.log("В вашей стране доставка не доступна")
}