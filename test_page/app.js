document.body.style.backgroundColor = "#1d2a35";

let btn = document.querySelectorAll("button");

for (let i = 0; i < btn.length; i++) {
    btn[i].style.display = "block";
    btn[i].style.backgroundColor = "#0069ff";
    btn[i].style.padding = "15px";
    btn[i].style.borderRadius = "5px";
    btn[i].style.cursor = "pointer";
    btn[i].style.color = "#fff";
    btn[i].style.textTransform = "uppercase";
    btn[i].style.fontWeight = "bold";
    btn[i].style.margin = "20px auto";
    btn[i].style.outline = "none";
    btn[i].style.border = "none";
}

document.getElementById("clickBtn").addEventListener("click", function () {
    alert("You have just clicked me!");
});

document.getElementById("askMe").addEventListener("click", function () {
    let answer = prompt("What is your name?");
    alert("Hello " + answer);

    if (confirm("Do you like programming?")) alert("That's great!");
    else alert("I'm sorry to hear that! ;(");
});

const solveEq = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return [];
    }

    if (delta === 0) {
        return [-b / (2 * a)];
    }

    return [(-b - Math.sqrt(delta)) / (2 * a), (-b + Math.sqrt(delta)) / (2 * a)];
};

console.log(solveEq(1, 4, 4));
