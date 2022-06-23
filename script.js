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

clear.addEventListener("click", clearVisor);
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

function addToVisor() {
  var numberToAdd = document.createTextNode(this.innerHTML);
  visor.appendChild(numberToAdd);
}

function clearVisor() {
  visor.innerHTML = "";
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
