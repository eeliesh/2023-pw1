// task 5
let decrementBtn = document.getElementById("decrement");
let incrementBtn = document.getElementById("increment");
let counter = document.getElementById("counter");

let value = 0;
counter.value = value;

counter.onkeydown = (e) => {
    e.preventDefault();
};

function checkCounterValue() {
    if (value === 0) {
        decrementBtn.disabled = true;
    } else if (value === 9) {
        incrementBtn.disabled = true;
    } else {
        decrementBtn.disabled = false;
        incrementBtn.disabled = false;
    }
}

checkCounterValue();

decrementBtn.onclick = () => {
    value--;
    counter.value = value;
    checkCounterValue();
};

incrementBtn.onclick = () => {
    value++;
    counter.value = value;
    checkCounterValue();
};

// task 6
let table = document.querySelector("#chessTable");
let tableHTML = "";
for (let i = 0; i < 8; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            tableHTML += "<td style='background-color: white;'></td>";
        } else {
            tableHTML += "<td style='background-color: black;'></td>";
        }
    }
    tableHTML += "</tr>";
}
table.innerHTML = tableHTML;

// task 10
let field = document.getElementById("field");
let ball = document.getElementById("ball");

field.style.backgroundColor = "green";
ball.style.backgroundColor = "red";

field.style.width = "600px";
field.style.height = "400px";

ball.style.width = "50px";
ball.style.height = "50px";
ball.style.borderRadius = "50%";

field.style.display = "flex";
field.style.justifyContent = "center";
field.style.alignItems = "center";

// task 15
let input = document.getElementById("myInput");
input.onblur = () => {
    if (isNaN(input.value)) {
        input.value = "";
    }
};

// task 16
let input2 = document.getElementById("myInput2");
input2.onkeydown = (e) => {
    if (e.key === "Backspace") {
        return;
    }
    if (isNaN(input2.value + e.key)) {
        e.preventDefault();
    }
};

// task 20
let usersTable = document.getElementById("usersTable");
let users = [{ name: "Пользователь" }, { name: "Админ" }];

function renderTable() {
    let tableHTML = "";
    for (let i = 0; i < users.length; i++) {
        tableHTML += "<tr>";
        tableHTML += `<td>${users[i].name}</td>`;
        tableHTML += `<td><button data-index="${i}">x</button></td>`;
        tableHTML += "</tr>";
    }
    usersTable.innerHTML = tableHTML;
}

renderTable();

usersTable.onclick = (e) => {
    if (e.target.tagName === "BUTTON") {
        let index = e.target.dataset.index;
        users.splice(index, 1);
        renderTable();
    }
};

let userName = document.getElementById("userName");
let addUserBtn = document.getElementById("addUser");

addUserBtn.onclick = () => {
    users.push({ name: userName.value });
    renderTable();
};
