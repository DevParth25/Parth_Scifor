let currentValue = ''; // To store the current value
let previousValue = ''; // To store the previous value
let operator = ''; // To store the selected operator

// Add numbers or decimal point to the display
function addToDisplay(value) {
    const display = document.getElementById("calc-display");
    if (currentValue === '' && value === '.') currentValue = '0';
    currentValue += value;
    display.value = currentValue;
}

// Add an operator and store the current value
function addOperator(op) {
    if (currentValue === '') return;
    operator = op;
    previousValue = currentValue;
    currentValue = '';
    document.getElementById("calc-display").value = operator;
}

// Clear the display and reset values
function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    document.getElementById("calc-display").value = '0';
}

// Delete the last character
function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    document.getElementById("calc-display").value = currentValue || '0';
}

// Perform the calculation using a switch statement
function calculateResult() {
    const display = document.getElementById("calc-display");
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = 'Error';
    }

    display.value = result;
    previousValue = result.toString();
    currentValue = '';
    operator = '';
}

// Enable keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key)) {
        addToDisplay(key);
    } else if (key === '.') {
        addToDisplay('.');
    } else if (['+', '-', '*', '/'].includes(key)) {
        addOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
