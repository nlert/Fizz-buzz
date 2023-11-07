const input = document.getElementById("num-input"); // input
const button = document.getElementById("enter"); // button
const answer = document.getElementById("answer"); // p

function onlyNum(inputString) { // Test if input is a number
    return /^\d+$/.test(inputString);
}

button.addEventListener('click', function() { // 
    const numVal = input.value; // Content added to input

    answer.textContent = ""; // Clear answer content
    let arr = []; // Array will contain fizz buzzes to display

    if (onlyNum(numVal) != true) { // Check if input is a number
        answer.textContent = "Must enter a whole number";
    } else if (numVal > 999) { // Check if number is < 1000
        answer.textContent = "Number must be under 1000";
    } else if (numVal < 1) { // Check if number is positive
        answer.textContent = "Number must be positive";
    } else {
        for (let i = 1; i <= numVal; i++) {
            if (i % 3 === 0 && i % 5 === 0) { // Is num divisible by 3 and 5
                arr.push(" fizz buzz");
            } else if (i % 3 === 0) { // Is num divisible by 3
                arr.push(" fizz");
            } else if (i % 5 === 0) { // Is num divisible by 5
                arr.push(" buzz");
            } else { // Add the number to the array
                arr.push(" " + i);
            }
        }

        answer.textContent = arr; // Display the answer
    }

    answer.classList.add("border");
});