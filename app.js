const container = document.querySelector(".container");
const expression = document.querySelector("#display-expression");
const currentValue = document.querySelector("#display-current");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const evalBtn = document.querySelector("#equals");

let operands = [];

function add(a, b) {
    console.log("Hello from add")
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return new Error("Cannot divide with zero!");
}

function operate(operator, num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = "";
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            console.log("default");
    }
    return result;
}

numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", function () {
        currentValue.textContent += this.id;
    });
});

operatorBtns.forEach(operBtn => {
    operBtn.addEventListener("click", function () {
        if (!operands[0]) {
            operands[0] = currentValue.textContent;
        }
        expression.textContent = operands[0];
        currentValue.textContent = "";
        operands[1] = this.id;
        expression.textContent += this.id;
    });
});

evalBtn.addEventListener("click", function () {
    operands[2] = currentValue.textContent;
    expression.textContent += operands[2];
    console.log(operands);
    currentValue.textContent = operate(operands[1], operands[0], operands[2]);
    operands[0] = currentValue.textContent;
});

clearBtn.addEventListener("click", function () {
    operands = [];
    currentValue.textContent = "";
    expression.textContent = "";
});



