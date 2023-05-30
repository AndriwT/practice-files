/*
Given two non-negative integers num1 and num2 represented as strings, 
return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert 
the inputs to integer directly.

Example:
Input: num1 = "2", num2 = "3"
Output: "6"
*/

let num1 = "2";
let num2 = "3";

var multiply = function (num1, num2) {
  const result = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i > -1; i--) {
    for (let j = num2.length - 1; j > -1; j--) {
      const product = num1[i] * num2[j];
      let index =
        num1.length +
        num2.length -
        1 -
        (num2.length - 1 - j + num1.length - 1 - i);

      result[index] += product;
      if (result[index] > 9) {
        result[index - 1] += Math.floor(result[index] / 10);
        result[index] %= 10;
      }
    }
  }
  while (result[0] === 0) {
    result.shift();
  }
  return result.length === 0 ? "0" : result.join("");
};

console.log(multiply(num1, num2));
