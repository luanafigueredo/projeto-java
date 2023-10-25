const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert ") // valor em Real
    const currencyValueconverted = document.querySelector(".currency-value") // outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2



    if (currencyselect.value == "dolar") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyselect.value == "euro") {
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencyselect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImage.src = "./src/img/estados-unidos (1) 1.png"
    }


    if (currencyselect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = "./src/img/euro.png"
    }

}
currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)