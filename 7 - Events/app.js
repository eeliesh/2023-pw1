let x = document.getElementById("x");
let y = document.getElementById("y");
let operator = document.getElementById("operator");
let result = document.getElementById("result");
let sum = document.getElementById("sum");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
const operators = ["*", "/", "+", "-"];

sum.addEventListener("click", () => {
    result.innerHTML = parseInt(x.value) + parseInt(y.value);
});

subtract.addEventListener("click", () => {
    result.innerHTML = parseInt(x.value) - parseInt(y.value);
});

multiply.addEventListener("click", () => {
    result.innerHTML = parseInt(x.value) * parseInt(y.value);
});

divide.addEventListener("click", () => {
    result.innerHTML = parseInt(x.value) / parseInt(y.value);
});

document.body.addEventListener("keypress", (e) => {
    if (operators.includes(e.key)) operator.innerHTML = e.key;

    switch (e.key) {
        case "*":
            result.innerHTML = parseInt(x.value) * parseInt(y.value);
            break;
        case "/":
            result.innerHTML = parseInt(x.value) / parseInt(y.value);
            break;
        case "+":
            result.innerHTML = parseInt(x.value) + parseInt(y.value);
            break;
        case "-":
            result.innerHTML = parseInt(x.value) - parseInt(y.value);
    }
});
