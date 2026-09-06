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

const add = function (num1, operator, num2) {
  const sum = num1 + num2;
  return sum;
};
const subtract = function (num1, num2, operator) {
  const subs = num1 - num2;
  return subs;
};

const multi = function (num1, num2, operator) {
  const multi = num1 * num2;
  return multi;
};

const div = function (num1, num2, operator) {
  const division = num1 / num2;
  return division;
};

/* Create a new function "operate" that takes an operator 
 and two numbers and then calls one of the above 
 functions on the numbers.*/

function operate(operator, numbOne, numbTwo) {
  return operator(numbOne, numbTwo);
}

// console.log(operate(multi, 10, 20));

/* Create the functions that update one of your number variables when the calculator’s
 digit buttons are clicked. Your calculator’s display should also update
 to reflect the value of that number variable.*/

//  Num variables ----
const btns = document.querySelectorAll("button");
const container = document.querySelector(".container");
const calDisplay = document.querySelector(".display");
const operatorSUM = document.querySelector(".oprSum");
const operatorResult = document.querySelector(".itemResult");

btns.forEach((button) => {
  button.addEventListener(
    "click",
    () => (button.id, (calDisplay.textContent = `${button.id}`)),
  );
});

// btn2.addEventListener(
//   "click",
//   () => ((two = 2), (calDisplay.textContent = `${two}`)),
// );

// operatorSUM.addEventListener("click", add(e));

// operatorResult.addEventListener(
//   "click",
//   () => (
//     operate(operatorSUM, btn1, btn2),
//     (calDisplay.textContent = `${operate}`)
//   ),
// );

// operatorResult.addEventListener("click",()=>)

/*Make the calculator work! You’ll need to store the first and second numbers input 
by the user and then operate() on them when the user presses the = button, 
according to the operator that was selected between the numbers.

You should already have the code that can populate the display, 
so once operate has been called, update the display with the result of the operation.
This is the hardest part of the project. 
You need to figure out how to store all the values and 
call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.*/
