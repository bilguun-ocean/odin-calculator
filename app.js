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
        case 'x' :
           return multiplyNumbers(a, b);
        case '÷' :
           return divideNumbers(a, b);
        default:
           return 'error'
    }
}
let leftValue = 0,
    rightValue = 0,
    selectedOperator,
    equalClicked;

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
            test();
            selectedOperator = operator.textContent;
            display.textContent = '';
            test2();
        })
    })

}

function clickEqual () {
    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        test();
        test2();
    })
}

function test() {

    const display = document.querySelector('.input');
    if (selectedOperator || equalClicked) {
        rightValue = parseInt(display.textContent);
    }else{
        leftValue = parseInt(display.textContent);
    }
}

function test2() {
    if (leftValue && rightValue) {
        let result;
        result = operate(selectedOperator, leftValue, rightValue);
        console.log(result)
        leftValue = result;
    }
}

function test3() {
    if (leftValue && rightValue) {
        let result;
        result = operate(selectedOperator, leftValue, rightValue);
        console.log(result)
        leftValue = result;
    }
}