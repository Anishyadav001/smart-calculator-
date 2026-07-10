const display = document.getElementById("sciDisplay");

// Add Value

function insertValue(value) {

    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Clear

function clearDisplay() {
    display.value = "0";
}

// Delete

function deleteLast() {

    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate

function calculate() {

    try {

        let expression = display.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");

        let result = eval(expression);

        saveHistory(`${display.value} = ${result}`);

        display.value = result;

    } catch {

        display.value = "Error";

        setTimeout(() => {
            display.value = "0";
        }, 1000);
    }
}

// Square Root

function sqrt() {

    let value = parseFloat(display.value);

    let result = Math.sqrt(value);

    saveHistory(`√(${value}) = ${result}`);

    display.value = result;
}

// Square

function square() {

    let value = parseFloat(display.value);

    let result = value * value;

    saveHistory(`${value}² = ${result}`);

    display.value = result;
}

// Power

function power() {

    let base = parseFloat(display.value);

    let exponent = prompt("Enter Power");

    if (exponent === null) return;

    let result = Math.pow(base, exponent);

    saveHistory(`${base}^${exponent} = ${result}`);

    display.value = result;
}

// Sin

function sin() {

    let value = parseFloat(display.value);

    let result = Math.sin(value);

    saveHistory(`sin(${value}) = ${result}`);

    display.value = result;
}

// Cos

function cos() {

    let value = parseFloat(display.value);

    let result = Math.cos(value);

    saveHistory(`cos(${value}) = ${result}`);

    display.value = result;
}

// Tan

function tan() {

    let value = parseFloat(display.value);

    let result = Math.tan(value);

    saveHistory(`tan(${value}) = ${result}`);

    display.value = result;
}

// Log

function log() {

    let value = parseFloat(display.value);

    let result = Math.log10(value);

    saveHistory(`log(${value}) = ${result}`);

    display.value = result;
}

// Natural Log

function ln() {

    let value = parseFloat(display.value);

    let result = Math.log(value);

    saveHistory(`ln(${value}) = ${result}`);

    display.value = result;
}

// Factorial

function factorial() {

    let n = parseInt(display.value);

    if (n < 0) {
        display.value = "Error";
        return;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    saveHistory(`${n}! = ${result}`);

    display.value = result;
}

// Pi

function pi() {
    display.value = Math.PI.toFixed(8);
}

// Euler Number

function eValue() {
    display.value = Math.E.toFixed(8);
}

// Save History

function saveHistory(item) {

    let history =
        JSON.parse(
            localStorage.getItem("history")
        ) || [];

    history.push(item);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );
}

// Keyboard Support

document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (
        "0123456789+-*/.%()".includes(key)
    ) {
        insertValue(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        deleteLast();
    }

    if (key === "Escape") {
        clearDisplay();
    }
});