/*
Write a function that reverses a string. 
The input string is given as an array of characters s.

You must do this by modifying the input array in-place 
with O(1) extra memory.

Example:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

let s = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    right--;
    left++;
  }
  return s;
};

console.log(reverseString(s));
