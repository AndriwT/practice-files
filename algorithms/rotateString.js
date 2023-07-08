/*
Given two strings s and goal, return true if and only 
if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s 
to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.

Example:
Input: s = "abcde", goal = "cdeab"
Output: true
*/

let s = "abcde",
  goal = "cdeab";

var rotateString = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  return (s + s).indexOf(goal) !== -1;
};

console.log(rotateString(s, goal));
