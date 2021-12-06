

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
        case '%' :
            return a % b;
        default:
           return 'error'
    }
}
let leftValue,
    rightValue,
    selectedOperator,
    secondOperator,
    canDelete = true;
    clearDisplay = false;

function inputNumber() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            const display = document.querySelector('.display');
            if(display.textContent.length > 8 || display.textContent == 'error') {
                display.textContent  = 'error'
                return;
            }
            display.textContent +=number.textContent;
            if(clearDisplay) display.textContent = '' + number.textContent;
            clearDisplay = false; 
            canDelete = true;
        })
    })
}

//when operator clicked; save the value on display and clear the display
function clickOperator () {
    const display = document.querySelector('.display');
    const operators = document.querySelectorAll('.operator');

    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            if (!display.textContent || display.textContent == '') {
                clearDisplay = true;
                return;
            }
            storeValues();
            storeSecondOperator(operator);
            toggleHighlight(operator);
            calculateValues();
            blinkDisplay();
            clearDisplay = true;
        })
    })

}

function clickEqual () {
    const equalSign = document.querySelector('.equal');

    equalSign.addEventListener('click', () => {
        if (!display.textContent || display.textContent == '') {
            clearDisplay = true;
            return;
        }
        storeValues();
        equalCalculateValues();
        unhighlightOperators();
        clearDisplay = true;
    })
}

function storeValues() {
    const display = document.querySelector('.display');
    if (display.textContent || display.textContent == 0 ){
        if (selectedOperator) {
            rightValue = parseFloat(display.textContent);
        }else{
            leftValue = parseFloat(display.textContent);  
        }
    }

}

function calculateValues() {
    if (leftValue == 0 || leftValue && rightValue == 0 || rightValue) {
        let result;
        if (selectedOperator == '÷' && rightValue == 0) {
            display.textContent = 'error';
            return;
        }
        result = operate(selectedOperator, leftValue, rightValue);
        leftValue = result;
    }
    if (secondOperator) {
        selectedOperator = secondOperator;
        secondOperator = null;
    }
    display.textContent = leftValue;
    canDelete = false;
}

function equalCalculateValues() {
    if (leftValue == 0 || leftValue && rightValue == 0 || rightValue) {
        let result;
        if (selectedOperator == '÷' && rightValue == 0) {
            display.textContent = 'error';
            return;
        }
        result = roundDecimal(operate(selectedOperator, leftValue, rightValue));
        leftValue = result;
        selectedOperator = null;
        rightValue = null;
        display.textContent = leftValue
    }
}
//check if operator was clicked for the second time or not
function storeSecondOperator(operator) {
    if(display.textContent){
        if (selectedOperator) {
            secondOperator = operator.textContent;
        }else{
            selectedOperator = operator.textContent;
        }
    }

}

//if left value is there and operator is clicked, next time input entered, display clears

function blinkDisplay() {
    display.classList.add('blink')
}

//highlight the chosen operator

function toggleHighlight(operator){
    unhighlightOperators();
    highlightSelectedOperator(operator);
}

function unhighlightOperators() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.classList.remove('highlightChoice')
    })
}

function highlightSelectedOperator (operator) {
    operator.classList.add('highlightChoice')
}

function clearAll() {
    leftValue = null,
    rightValue = null,
    selectedOperator = null,
    secondOperator = null,
    clearDisplay = false;
    display.textContent = ''
    unhighlightOperators();
}

function roundDecimal(a) {
    return Math.round(a * 1000) / 1000;
}

function deleteLast() {
    if (canDelete) {
    display.textContent = display.textContent.slice(0,-1);
 }
}


 window.addEventListener('load', () => {
    inputNumber();
    clickOperator();
    clickEqual();
    hoverEffect();
 })

 


const backspace = document.querySelector('.delete')
backspace.addEventListener('click', deleteLast)


const AC = document.querySelector('.ac')
AC.addEventListener('click', clearAll )

const display = document.querySelector('.display');
display.addEventListener('transitionend', () => {
    display.classList.remove('blink');
})
function hoverEffect() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            buttons.forEach((button) => {
                button.style.filter = 'brightness(1.0)'
            })
            button.style.filter = 'brightness(1.2)'
        })
    })
}