/*
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with 
those letters.

Letters are case sensitive, for example, "Aa" is not considered a 
palindrome here.

Example:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", 
whose length is 7.
*/

let s = "abccccdd";

var longestPalindrome = function (s) {
  let output = 0;
  let map = new Map();

  for (let char of s) {
    let n = 0;
    if (map.has(char)) {
      n = map.get(char);
      if (n % 2) output += 2;
    }
    map.set(char, n + 1);
  }
  return s.length > output ? output + 1 : output;
};

console.log(longestPalindrome(s));
