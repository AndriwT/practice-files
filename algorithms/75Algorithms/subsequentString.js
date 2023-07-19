/*
Given two strings s and t, return true if s is a subsequence of t, 
or false otherwise.

A subsequence of a string is a new string that is formed from 
the original string by deleting some (can be none) of the 
characters without disturbing the relative positions of the 
remaining characters. (i.e., "ace" is a subsequence of "abcde" 
while "aec" is not).

Example:
Input: s = "abc", t = "ahbgdc"
Output: true
*/

let s = "abc",
  t = "ahbgdc";

var isSubsequence = function (s, t) {
  let tClean = "";
  let counter = 0;

  if (s === t) {
    return true;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[counter]) {
      tClean += t[i];
      counter++;
    }

    if (tClean === s) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence(s, t));
