// Get the HTML element with the and assign it to the constant
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// Initialize a variable count to keep track of the counter's value, starting at 0
let count = 0;

// Define the function to be executed when the increase button is clicked
increaseBtn.onclick = function() {
    count++; // Increment the count by 1
    countLabel.textContent = count; // Update the text content of countLabel to reflect the new count
}

// Define the function to be executed when the --decrease button is clicked
decreaseBtn.onclick = function() {
    count--; // Decrement the count by 1
    countLabel.textContent = count; // Update the text content of countLabel to reflect the new count
}

// Define the function to be executed when the reset button is clicked
resetBtn.onclick = function() {
    count = 0; // Reset the count to 0
    countLabel.textContent = count; // Update the text content of countLabel to reflect the new count
}
