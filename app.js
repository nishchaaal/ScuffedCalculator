//Variables
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const allClear = document.querySelector(".all-clear");
const deleteButton = document.querySelector(".delete");
const equalsTo = document.querySelector(".equalsto");
const input = document.querySelector(".input");
let firstOperand = "";
let secondOperand = "";
let task = "";

const whichOperation = () => {
  switch (task) {
    case "+":
      input.innerHTML = parseFloat(firstOperand) + parseFloat(secondOperand);
      firstOperand = input.innerHTML;
      break;
    case "-":
      input.innerHTML = parseFloat(firstOperand) - parseFloat(secondOperand);
      firstOperand = input.innerHTML;
      break;
    case "x":
      input.innerHTML = parseFloat(firstOperand) * parseFloat(secondOperand);
      firstOperand = input.innerHTML;
      break;
    case "/":
      input.innerHTML = parseFloat(firstOperand) / parseFloat(secondOperand);
      firstOperand = input.innerHTML;
      break;
    default:
      console.log("invalid task");
  }
};

equalsTo.addEventListener("click", whichOperation);

allClear.addEventListener("click", () => {
  input.innerHTML = "";
  firstOperand = "";
  secondOperand = "";
});

deleteButton.addEventListener("click", () => {
  input.innerHTML = input.innerHTML.slice(0, -1);
  secondOperand = input.innerHTML;
});

number.forEach((numb) => {
  numb.addEventListener("click", (e) => {
    if (input.innerHTML.length > 16) {
      return;
    } else if (!(input.innerHTML.includes(".") && e.target.innerHTML === ".")) {
      secondOperand += e.target.innerHTML;
      input.innerHTML = secondOperand;
    } else {
      return;
    }
  });
});

operator.forEach((operate) => {
  operate.addEventListener("click", (e) => {
    if (firstOperand === "") {
      task = e.target.innerHTML;
      firstOperand = secondOperand;
      secondOperand = "";
    } else {
      whichOperation();
      task = e.target.innerHTML;
      secondOperand = "";
    }
  });
});
