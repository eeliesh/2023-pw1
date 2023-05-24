// task 1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// task 2
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumSalaries(obj) {
    let sum = 0;
    for (let i in obj) {
        sum += obj[i];
    }
    return sum;
}

// console.log(sumSalaries(salaries));

// task 3
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};
// console.log(menu);

function multiplyNumeric(obj) {
    for (let i in obj) {
        if (typeof obj[i] === "number") {
            obj[i] *= 2;
        }
    }
}

multiplyNumeric(menu);
// console.log(menu);

// task 4
let user1 = {
    name: "User 1",
    age: 123,
};

let user2 = {};

for (let i in user1) {
    user2[i] = user1[i];
}

user2.name = "User 2";
user2.age = 321;

// console.log(user1);
// console.log(user2);

// task 5
let person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com",
    },
    address: "Moldova",
};

person.contacts.phone = "+37312345678";
delete person.address;
console.log(person);
