// Access DOM elements to be used
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const clearButton = document.getElementById('clear');
let number = counter.innerHTML;

// Declare handlers to be used for the buttons
const handleIncrement = () => {
    number++;
    counter.innerHTML = number;
    };

const handleDecrement = () => {
    number--;
    counter.innerHTML = number;
    };

const handleClear = () => {
    number = 0;
    counter.innerHTML = number;
}

// Add event listeners to the buttons
incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);
clearButton.addEventListener('click', handleClear);