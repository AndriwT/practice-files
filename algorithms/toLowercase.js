/*
Given a string s, return the string after replacing 
every uppercase letter with the same lowercase letter.

Example:
Input: s = "Hello"
Output: "hello"
*/
let s = "Hello";

var toLowerCase = function (s) {
  let strArray = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (strArray[i].charCodeAt(0) >= 65 && strArray[i].charCodeAt(0) <= 90) {
      strArray[i] = String.fromCharCode(strArray[i].charCodeAt(0) + 32);
    }
  }
  return strArray.join("");
};

console.log(toLowerCase(s));
