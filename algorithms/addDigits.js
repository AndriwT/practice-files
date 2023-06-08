/*
Given an integer num, repeatedly add all its digits 
until the result has only one digit, and return it.

Example:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
*/

let num = 38;

var addDigits = function (num) {
  let sum = 0;
  while (num >= 10) {
    sum += num % 10;
    num = Math.floor(num / 10);
    if (num < 10) {
      num += sum;
      sum = 0;
    }
  }
  return num;
};

console.log(addDigits(num));
