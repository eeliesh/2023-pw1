// task 1
function nrToText(nr) {
    switch (nr) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eigth";
        case 9:
            return "nine";
        default:
            return `${nr} is not a digit`;
    }
}

// easier approach
function nrToText2(nr) {
    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine"];
    if (nr >= 0 && nr <= 9) return digits[nr];
    else return `${nr} is not a digit`;
}

// console.log(nrToText(1));
// console.log(nrToText(10));

// task 2
function sumEven(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}

// console.log(sumEven(1, 20));

// task 3
function minMax(a, b, c) {
    let min = a;
    let max = a;
    if (b < min) min = b;
    if (c < min) min = c;
    if (b > max) max = b;
    if (c > max) max = c;
    return `min: ${min}, max: ${max}`;
}

function minMax2(a, b, c) {
    return `min: ${Math.min(a, b, c)}, max: ${Math.max(a, b, c)}`;
}

// console.log(minMax(3, 5, 2));

// task 4
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// console.log(ucFirst("vasile"));

// task 5
function extractCurrencyValue(str) {
    return parseInt(str.slice(1));
}

// console.log(extractCurrencyValue("$120") === 120);

// task 6
function checkNumber() {
    let nr = prompt("Enter a number");
    if (isNaN(nr)) return "Error";
    else if (nr > 0) return 1;
    else if (nr < 0) return -1;
    else return 0;
}

// alert(checkNumber());

// task 7
function checkAge(age) {
    if (!(age >= 14 && age <= 90)) return true;
    else return false;
}

function checkAge2(age) {
    if (age < 14 || age > 90) return true;
    else return false;
}

// console.log(checkAge(12));
// console.log(checkAge2(12));

// task 8
function checkLogin() {
    let login = prompt("Enter your login");
    if (login === "root") {
        let password = prompt("Enter your password");
        if (password === "root") return "Привет!";
        else if (password === null) return "Ошибка Валидации";
        else return "Неправильный пароль";
    } else if (login === null) return "Ошибка Валидации";
    else return "Неправильный username";
}

// alert(checkLogin());

// task 9
function userInteraction() {
    let name = prompt("Как тебя зовут?");
    if (name) alert(`Привет, ${name}!`);
    else alert("Привет, незнакомец!");
    let knowsJS = confirm("Ты знаком с языком JavaScript?");
    if (knowsJS) alert("Ты молодец!");
    else alert("Можно начать изучение прямо сейчас");
}

// userInteraction();

// task 10
const dividers = (nr) => {
    for (let i = 1; i <= nr; i++) {
        if (nr % i === 0) console.log(i);
    }
};

dividers(10);
