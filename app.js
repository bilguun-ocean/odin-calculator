

/*Create a new function operate that takes an operator 
and 2 numbers and then calls one of the above functions on the numbers.
*/

function operate (operator, a, b) {
    switch(operator){
        case '+' :
           return a + b;
        case '-' :
           return a - b;
        case 'x' :
           return a * b;
        case '÷' :
           return a / b;
        default:
           return 'error'
    }
}
let leftValue = 0,
    rightValue = 0,
    selectedOperator,
    secondOperator;

function inputNumber() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            const display = document.querySelector('.input');
            display.textContent +=number.textContent; 
        })
    })
}

//when operator clicked; save the value on display and clear the display
function clickOperator () {
    const display = document.querySelector('.input');
    const operators = document.querySelectorAll('.operator');

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            storeValues();
            storeSecondOperator(operator);
            display.textContent = '';
            calculateValues();
            test4();
        })
    })

}

function clickEqual () {
    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        storeValues();
        test3();
    })
}

function storeValues() {

    const display = document.querySelector('.input');
    if (selectedOperator) {
        rightValue = parseInt(display.textContent);
    }else{
        leftValue = parseInt(display.textContent);  
        display.classList.add('blink')
    }
}

function calculateValues() {
    if (leftValue && rightValue) {
        let result;
        result = operate(selectedOperator, leftValue, rightValue);
        console.log(result)
        leftValue = result;
    }
    if (secondOperator) {
        selectedOperator = secondOperator;
        secondOperator = '';
    }
}

function test3() {
    if (leftValue && rightValue) {
        let result;
        result = operate(selectedOperator, leftValue, rightValue);
        console.log(result)
        leftValue = result;
        selectedOperator = '';
        rightValue = '';
    }
}
//check if operator was clicked for the second time or not
function storeSecondOperator(operator) {
    if (selectedOperator) {
        secondOperator = operator.textContent;
    }else{
        selectedOperator = operator.textContent;
    }
}

//if left value is there and operator is clicked, next time input entered, display clears

function test4() {
    display.classList.add('blink')
}


 const display = document.querySelector('.input');
 display.addEventListener('transitionend', () => {
 display.classList.remove('blink');
 })