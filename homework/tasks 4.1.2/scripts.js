// task #1
document.body.style.backgroundColor = "red";

// task #2
setTimeout(() => {
    document.body.style.backgroundColor = "green";
}, 3000);

// task #3
// Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.

let btn = document.createElement("button");
btn.innerText = "Orange";
btn.onclick = () => {
    document.body.style.backgroundColor = "orange";
};

document.body.appendChild(btn);

// task #4
let ol = document.createElement("ol");
document.body.appendChild(ol);

let i = 0;
let interval = setInterval(
    () => {
        i++;
        let li = document.createElement("li");
        li.innerText = `Элемент ${i}`;
        if (i % 2 === 0) {
            li.style.backgroundColor = "green";
        } else {
            li.style.backgroundColor = "purple";
        }
        ol.appendChild(li);
        if (i === 20) {
            clearInterval(interval);
        }
    },

    2000
);
