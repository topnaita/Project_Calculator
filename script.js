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
function operate(numbOne, operator, numbTwo) {
  return operator(numbOne, numbTwo);
}

/* Create a new function "operate" that takes an operator 
 and two numbers and then calls one of the above 
 functions on the numbers.*/

console.log(operate(5, multi, 2));
/* Create the functions that update one of your number variables when the calculator’s
 digit buttons are clicked. Your calculator’s display should also update
 to reflect the value of that number variable.*/

// Calculator Logic

const numBtn = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const calDisplay = document.getElementById("display");
const addBtn = document.querySelector(".add");
const equalBtn = document.querySelector(".equal");

// numBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     firstValue += button.id;
//     calDisplay.value = firstValue;
//   });
// });

// clearBtn.addEventListener("click", () => (calDisplay.value = ""));

// addBtn.addEventListener("click", () => (varOperator = add));

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

clearBtn.addEventListener("click", () => {
  firstValue = "";
  secondValue = "";
  varOperator = "";
  calDisplay.value = "";
});

addBtn.addEventListener("click", () => {
  varOperator = add;
});

equalBtn.addEventListener("click", () => {
  if (firstValue !== "" && secondValue !== "" && varOperator) {
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(secondValue);
    result = operate(num1, varOperator, num2);
    calDisplay.value = result;
    // Reset for next calculation
    firstValue = result.toString();
    secondValue = "";
    varOperator = "";
  }
});

// equalBtn.addEventListener("click", () => operate(firstValue, varOperator, 10));

/*Make the calculator work! You’ll need to store the first and second numbers input 
by the user and then operate() on them when the user presses the = button, 
according to the operator that was selected between the numbers.

You should already have the code that can populate the display, 
so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. 
You need to figure out how to store all the values and 
call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.*/
