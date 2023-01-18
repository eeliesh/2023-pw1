let x = document.getElementById("x");
let y = document.getElementById("y");
let operator = document.getElementById("operator");
let result = document.getElementById("result");
const operators = ["*", "/", "+", "-"];

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
