const visor = document.getElementById("result");
const clear = document.getElementById("clear");
const numbers = document.getElementsByClassName("numbers");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const equalsButton = document.getElementById("equals");

let firstNum;
let secondNum;
let operationToDo = "";
let result;

clear.addEventListener("click", clearEverything);
Array.from(numbers).forEach(function (number) {
  number.addEventListener("click", addToVisor);
});
divideButton.addEventListener("click", operationSelect);
multiplyButton.addEventListener("click", operationSelect);
addButton.addEventListener("click", operationSelect);
subtractButton.addEventListener("click", operationSelect);
equalsButton.addEventListener("click", doOperation);

function addToVisor() {
  if (result != undefined) {
    clearEverything();
  }
  var numberToAdd = this.innerHTML;
  visor.insertAdjacentHTML("beforeend", numberToAdd);
}

function operationSelect() {
  if (result != undefined) {
    result = undefined;
  }
  firstNum = parseInt(visor.innerHTML);

  switch (this.innerHTML) {
    case "×":
      operationToDo = "multiply";
      break;
    case "+":
      operationToDo = "add";
      break;
    case "-":
      operationToDo = "subtract";
      break;
    case "÷":
      operationToDo = "divide";
      break;
    default:
      break;
  }

  clearVisor();
}

function doOperation() {
  if (result != undefined) {
    return;
  }
  secondNum = parseInt(visor.innerHTML);
  clearVisor();
  result = operate(operationToDo, firstNum, secondNum);
  visor.innerHTML = result;
}

function clearVisor() {
  visor.innerHTML = "";
}

function clearEverything() {
  firstNum = undefined;
  secondNum = undefined;
  operationToDo = "";
  result = undefined;
  clearVisor();
}

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
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
  }
}
