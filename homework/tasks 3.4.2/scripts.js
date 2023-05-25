// // task 1
// let arr = [1, 2, 3, 4, 5];

// // for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // while
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// // do ... while
// i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length);

// // for in
// for (let i in arr) {
//     console.log(arr[i]);
// }

// // for of
// for (let i of arr) {
//     console.log(i);
// }

// // forEach
// arr.forEach(function (item) {
//     console.log(item);
// });

// // map
// arr.map(function (item) {
//     console.log(item);
// });

// task 2
let arr2 = [1, 5, 0, -5, 30, 100, -500, 0, 100, 55];

// 1
function lessThan5(arr) {
    let result = [];
    for (let i of arr) {
        if (i < 5) result.push(i);
    }
    return result;
}

// 2
function minMaxPos(arr) {
    let min = arr[0];
    let max = arr[0];
    let minPos = 0;
    let maxPos = 0;
    for (let i in arr) {
        if (arr[i] < min) {
            min = arr[i];
            minPos = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxPos = i;
        }
    }
    return [minPos, maxPos];
}

// 3
function sortDesc(arr) {
    let sorted = arr;
    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[i] < sorted[j]) {
                let temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }
    }
    return sorted;
}

// 4
function greaterThanAvg(arr) {
    let avg = 0;
    for (let i of arr) {
        avg += i;
    }
    avg /= arr.length;
    let result = [];
    for (let i of arr) {
        if (i > avg) result.push(i);
    }
    return result;
}

// console.log(lessThan5(arr2));
// console.log(minMaxPos(arr2));
// console.log(sortDesc(arr2));
// console.log(greaterThanAvg(arr2));

// task 3
// let styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[Math.floor(styles.length / 2)] = "Классика";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// task 4
function sumInputNumbers() {
    let arr = [];
    while (true) {
        let input = prompt("Введите число", "");
        if (input === "" || input === null || !isFinite(input)) break;
        arr.push(+input);
    }
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

// console.log(sumInputNumbers());

// task 5
function convert(fn, array) {
    let result = [];
    for (let i of array) {
        result.push(fn(i));
    }
    return result;
}

function square(x) {
    return x * x;
}

console.log(convert(square, [1, 2, 3, 4]));
console.log(convert(square, []));
let arr = [1, 2, 3];
console.log(convert(square, arr));
console.log(arr);

// task 7
function extract(start, end) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.slice(start, end + 1);
}

console.log(extract(2, 4));
