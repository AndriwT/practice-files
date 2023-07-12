/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, 
called the Fibonacci sequence, such that each number is the sum of 
the two preceding ones, starting from 0 and 1. That is:

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

Example:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/

let n = 4;

const fib = (n) => {
  let output = [0, 1];

  while (output.length <= n) {
    output.push(output[output.length - 1] + output[output.length - 2]);
  }
  return output[n];
};

console.log(fib(n));
