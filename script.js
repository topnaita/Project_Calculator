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
  return (operator = num1 + num2);
};
const subtract = function (num1, operator, num2) {
  return (num1, operator, num2);
};

const multi = function (num1, operator, num2) {
  return (num1, operator, num2);
};

const div = function (num1, operator, num2) {
  return (num1, operator, num2);
};

console.log(add(5 + 5));

/* Create a new function "operate" that takes an operator 
 and two numbers and then calls one of the above 
 functions on the numbers.*/

function operate(num1, operator, num2) {
  const addNum = add(num1, num2, operator);
  return num1;
}
