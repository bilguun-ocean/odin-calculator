function addNumbers (a, b) {
    return a + b;
}

function subNumbers (a, b) {
    return a - b;
}

function multiplyNumbers (a, b) {
    return a * b;
}

function divideNumbers (a, b) {
    return a / b;
}

/*Create a new function operate that takes an operator 
and 2 numbers and then calls one of the above functions on the numbers.
*/

function operate (operator, a, b) {
    switch(operator){
        case '+' :
           return addNumbers(a ,b);
        case '-' :
           return subNumbers(a, b);
        case '*' :
           return multiplyNumbers(a, b);
        case '/' :
           return divideNumbers(a, b);
        default:
           return 'Did you enter a valid operator ?'
    }
}
let firstValue;
let selectedOperator;

function updateDisplay() {
    const display = document.querySelector('.input');
    const buttons = document.querySelectorAll('.number')

    buttons.forEach((number) => {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
        })
    })
}

function selectOperator() {
    const operators = document.querySelectorAll('.operator');
    const display = document.querySelector('.input');

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            selectedOperator = operator.textContent;
            firstValue = parseInt(display.textContent);
        })
    })
}

function updateOutput() {
    const input = document.querySelector('.input');
    const output = document.querySelector('.output');
    output.textContent = `${firstValue} ${selectedOperator}`

    input.textContent = ''
}

function calculateValue() {

}