/*
Your calculator is going to contain functions for all of the basic math operators you typically 
find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
add
subtract
multiply
divide

A calculator operation will consist of a number, an operator, and another number. 
For example, 3 + 5. Create three variables, one for each part of the operation. 
You’ll use these variables to update your display later.
*/

let firstValue = "";
let secondValue = "";
let varOperator = "";
let result = "";

const add = function (num1, num2) {
  return num1 + num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};

const multi = function (num1, num2) {
  return num1 * num2;
};

const div = function (num1, num2) {
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
};

const percent = function (num1, num2) {
  return (num1 * num2) / 100;
};
const plusMinus = function (num1, num2) {
  return num1 * -1;
};

function operate(numbOne, operator, numbTwo) {
  return operator(numbOne, numbTwo);
}

/* Create a new function "operate" that takes an operator 
 and two numbers and then calls one of the above 
 functions on the numbers.*/

// console.log(operate(5, multi, 2));
/* Create the functions that update one of your number variables when the calculator’s
 digit buttons are clicked. Your calculator’s display should also update
 to reflect the value of that number variable.*/

// Logic Calculator

const numBtn = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const calDisplay = document.getElementById("display");
const addBtn = document.querySelector(".add");
const equalBtn = document.querySelector(".equal");
const subtractBtn = document.querySelector(".subtract");
const backBtn = document.querySelector(".backspace");
const multiply = document.querySelector(".multiply");
const divBtn = document.querySelector(".div");
const percentBnt = document.querySelector(".percent");
const plusMinusBtn = document.querySelector(".plusMinus");
// equalBtn.addEventListener("click", () => operate(firstValue, varOperator, 10));

/*Make the calculator work! You’ll need to store the first and second numbers input 
by the user and then operate() on them when the user presses the = button, 
according to the operator that was selected between the numbers.

You should already have the code that can populate the display, 
so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. 
You need to figure out how to store all the values and 
call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.*/
numBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (varOperator === "") {
      firstValue += button.id;
      calDisplay.value = firstValue;
    } else {
      secondValue += button.id;
      calDisplay.value = secondValue;
    }
  });
});

function selectOperator(operator) {
  if (firstValue !== "" && secondValue !== "") {
    result = operate(
      parseFloat(firstValue),
      varOperator,
      parseFloat(secondValue),
    );
    // Reset first value
    firstValue = result.toString();
    secondValue = "";
    calDisplay.value = firstValue;
  }

  varOperator = operator;
}

//Group of btn methods

addBtn.addEventListener("click", () => {
  selectOperator(add);
});

subtractBtn.addEventListener("click", () => {
  selectOperator(subtract);
});

multiply.addEventListener("click", () => {
  selectOperator(multi);
});

percentBnt.addEventListener("click", () => {
  selectOperator(percent);
});
divBtn.addEventListener("click", () => {
  selectOperator(div);
});
plusMinusBtn.addEventListener("click", () => {
  selectOperator(plusMinus);
});

// end btn

equalBtn.addEventListener("click", () => {
  if (firstValue !== "" && secondValue !== "" && varOperator) {
    result = operate(
      parseFloat(firstValue),
      varOperator,
      parseFloat(secondValue),
    );

    calDisplay.value = result;

    firstValue = result.toString();
    secondValue = "";
    varOperator = "";
  }
});

clearBtn.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  varOperator = "";
  calDisplay.value = "";
});

backBtn.addEventListener("click", () => {
  if (varOperator === "") {
    firstValue = firstValue.slice(0, -1);
    calDisplay.value = firstValue;
  } else {
    secondValue = secondValue.slice(0, -1);
    calDisplay.value = secondValue;
  }
});

// DONE!!!!! 100% no AI, guys. This project was really challenging, but every minute was worth it.
