/*
A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.

Given a string s, return true if it is a palindrome, 
or false otherwise.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let copyS = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  let newS = s.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  let newS2 = newS.split("").reverse().join("");

  copyS = copyS.split(" ").join("");
  newS2 = newS2.split(" ").join("");

  if (copyS === newS2) {
    return true;
  } else return false;
};

console.log(isPalindrome(s));
