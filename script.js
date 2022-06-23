const visor = document.getElementById("result");
const clear = document.getElementById("clear");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const equalsButton = document.getElementById("equals");

let firstNum = 0;
let secondNum = 0;
let operationToDo = "";

clear.addEventListener("click", clearEverything);
zero.addEventListener("click", addToVisor);
one.addEventListener("click", addToVisor);
two.addEventListener("click", addToVisor);
three.addEventListener("click", addToVisor);
four.addEventListener("click", addToVisor);
five.addEventListener("click", addToVisor);
six.addEventListener("click", addToVisor);
seven.addEventListener("click", addToVisor);
eight.addEventListener("click", addToVisor);
nine.addEventListener("click", addToVisor);
divideButton.addEventListener("click", operationSelect);
multiplyButton.addEventListener("click", operationSelect);
addButton.addEventListener("click", operationSelect);
subtractButton.addEventListener("click", operationSelect);
equalsButton.addEventListener("click", doOperation);

function addToVisor() {
  var numberToAdd = this.innerHTML;
  visor.insertAdjacentHTML("beforeend", numberToAdd);
}

function operationSelect() {
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
  secondNum = parseInt(visor.innerHTML);
  clearVisor();
  visor.innerHTML = operate(operationToDo, firstNum, secondNum);
}

function clearVisor() {
  visor.innerHTML = "";
}

function clearEverything() {
  firstNum = 0;
  secondNum = 0;
  operationToDo = "";
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
