document.body.style.backgroundColor = "#1d2a35";
document.querySelector("button").style.display = "block";

document.getElementById("clickBtn").addEventListener("click", function () {
    alert("You have just clicked me!");
});

document.getElementById("askMe").addEventListener("click", function () {
    let answer = prompt("What is your name?");
    alert("Hello " + answer);

    if (confirm("Do you like programming?")) alert("That's great!");
    else alert("I'm sorry to hear that! ;(");
});
