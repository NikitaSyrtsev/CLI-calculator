"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter the first number:\n");
    var operator = (0, readline_sync_1.question)("Enter the operator:\n");
    var secondStr = (0, readline_sync_1.question)("Enter the second number:\n");
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('Invalid input');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    return !isNaN(maybeNum);
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
    }
}
main();
