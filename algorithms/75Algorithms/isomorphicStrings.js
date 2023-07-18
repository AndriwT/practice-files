/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be 
replaced to get t.

All occurrences of a character must be replaced with another 
character while preserving the order of characters. 
No two characters may map to the same character, 
but a character may map to itself.

Example:
Input: s = "egg", t = "add"
Output: true
*/

let s = "egg",
  t = "add";

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sHashMap = {};
  let tHashMap = {};

  let count = 0;
  while (count <= s.length - 1) {
    if (sHashMap[s[count]] !== tHashMap[t[count]]) {
      return false;
    }
    sHashMap[s[count]] = count + 1;
    tHashMap[t[count]] = count + 1;
    count++;
  }
  return true;
};

console.log(isIsomorphic(s, t));
