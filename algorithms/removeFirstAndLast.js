/*
Given a string of characters, remove the first and last
characters of said string and return the result.

Example:
input str = "Hello"
output = "ell"
*/

let str = "Hello";

function removeFirstAndLast(str) {
  let len = str.length;

  return str.substr(1, len - 2);
}

console.log(removeFirstAndLast(str));
