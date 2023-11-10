const input = document.getElementById("num-input");
const button = document.getElementById("enter");
const answer = document.getElementById("answer");

function onlyNum(inputString) {
    return /^\d+$/.test(inputString);
}

button.addEventListener('click', function() { // 
    const numVal = input.value;

    answer.textContent = "";
    let arr = [];

    if (onlyNum(numVal) != true) {
        answer.textContent = "Must enter a whole number";
    } else if (numVal > 999) {
        answer.textContent = "Number must be under 1000";
    } else if (numVal < 1) {
        answer.textContent = "Number must be positive";
    } else {
        for (let i = 1; i <= numVal; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                arr.push("fizzbuzz");
            } else if (i % 3 === 0) {
                arr.push("fizz");
            } else if (i % 5 === 0) {
                arr.push("buzz");
            } else {
                arr.push(i);
            }
        }

        answer.textContent = arr.join(" ");
    }

    answer.classList.add("border");
});