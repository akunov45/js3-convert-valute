

// DOM
const inputs = document.querySelectorAll('input')
const selects = document.querySelectorAll('select')

// DOM EVENTS (onchange, oninput, onclick ...)

// addEventListener(param1, param2)
// param1 = event
// param2 = callback function
inputs[0].addEventListener('input', calculate)
selects[0].addEventListener('change', calculate)

const currency = {
    eur: 93.45,
    usd: 85.80
}

function calculate(){
    inputs[1].value = inputs[0].value  * currency[selects[0].value]
}

