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
