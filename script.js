const visor = document.getElementById("result");
const clear = document.getElementById("clear");
const numbers = document.getElementsByClassName("numbers");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const equalsButton = document.getElementById("equals");
const operations = document.querySelectorAll("button.operation");

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
  if (operationToDo == "") {
    visor.insertAdjacentHTML("beforeend", numberToAdd);
    firstNum = parseInt(visor.innerHTML);
  } else {
    if (secondNum == undefined) {
      clearVisor();
    }
    visor.insertAdjacentHTML("beforeend", numberToAdd);
    secondNum = parseInt(visor.innerHTML);
  }
}

function operationSelect() {
  this.classList.add("operation-active");
  if (result != undefined) {
    result = undefined;
  }
  if (operationToDo == "") {
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
  }

  clearVisor();

  if (firstNum != undefined && secondNum != undefined) {
    doOperation();
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
  }
}

function doOperation() {
  Array.from(operations).forEach((operation) =>
    operation.classList.remove("operation-active")
  );

  if (result != undefined) {
    return;
  }
  if (firstNum == undefined || secondNum == undefined) {
    return;
  }
  clearVisor();
  result =
    Math.round(operate(operationToDo, firstNum, secondNum) * 1000) / 1000;
  visor.innerHTML = result;
  firstNum = result;
  secondNum = undefined;
  operationToDo = "";
  result = undefined;
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
