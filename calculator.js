function add(number1, number2) {
    return number1 + number2;
}

document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero!";
    }
    return num1 / num2;
}

// Helper function to get input values and validate them
function getInputValues() {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    return { num1, num2 };
}

// Update result in the UI
function updateResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Add event listeners for each operation
document.getElementById('add').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = add(num1, num2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = subtract(num1, num2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = multiply(num1, num2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { num1, num2 } = getInputValues();
    const result = divide(num1, num2);
    updateResult(result);
});
