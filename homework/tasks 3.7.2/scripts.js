/* Task #1 - converting Array to JSON
Task #2 - converting Object to JSON
Task #3 - converting JSON to Array
Task #4 - converting JSON to Object
Task #6 - parsing JSON */

// task #1
/* Convert the following JavaScript array to JSON and display the result in the console.
const names= [“james”, “jake”];*/
const names = ["james", "jake"];
let namesJSON = JSON.stringify(names);
// console.log(namesJSON);

// task #2
/* Convert the following JavaScript object to JSON and display the result in the console.
const power={voltage: 250,current: 12} */
const power = { voltage: 250, current: 12 };
let powerJSON = JSON.stringify(power);
// console.log(powerJSON);

// task 3
/* Convert the following JSON to JavaScript Array and display the result in the console.
[“james”, “jake”] */
let namesArr = JSON.parse(namesJSON);
// console.log(namesArr);

// task #4
/* Convert the following JSON to JavaScript object and display the result in the console.
{“name”: “Ion Creanga”, “age”: 123} */

const personJSON = '{"name": "Ion Creanga", "age": 123}';
let personObj = JSON.parse(personJSON);
// console.log(personObj);

// task #6
/* Используя структуру из предыдущей задачи, создайте массив сотрудников и напишите следующий функционал:
вывод в странице всех сотрудников
вывод в отдельный HTML блок общей информации о ЗП сотрудников
средняя ЗП по всем сотрудникам
минимальная ЗП
максимальная ЗП
сумма всех ЗП  */

const employees = [
    {
        name: "Ion Creanga",
        age: 123,
        salary: 1000,
    },
    {
        name: "Mihai Eminescu",
        age: 123,
        salary: 2000,
    },
    {
        name: "Mihai Volontir",
        age: 123,
        salary: 3000,
    },
];
console.log(employees);

function displayEmployees() {
    let employeesDiv = document.getElementById("employees");
    let employeesHTML = "";
    for (let i = 0; i < employees.length; i++) {
        employeesHTML += `<div class="employee">
                            <p>Name: ${employees[i].name}</p>
                            <p>Age: ${employees[i].age}</p>
                            <p>Salary: ${employees[i].salary}</p>
                        </div>`;
    }
    employeesDiv.innerHTML = employeesHTML;
}

function displaySalaryInfo() {
    let salaryInfoDiv = document.getElementById("salaryInfo");
    let salaryInfoHTML = "";
    let minSalary = employees[0].salary;
    let maxSalary = employees[0].salary;
    let sumSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary < minSalary) {
            minSalary = employees[i].salary;
        }
        if (employees[i].salary > maxSalary) {
            maxSalary = employees[i].salary;
        }
        sumSalary += employees[i].salary;
    }
    let avgSalary = sumSalary / employees.length;
    salaryInfoHTML += `<p>Average salary: ${avgSalary}</p>
                        <p>Minimum salary: ${minSalary}</p>
                        <p>Maximum salary: ${maxSalary}</p>
                        <p>Sum of salaries: ${sumSalary}</p>`;
    salaryInfoDiv.innerHTML = salaryInfoHTML;
}

displayEmployees();
displaySalaryInfo();
