/*
Given a string s, reverse the order of characters in 
each word within a sentence while still preserving 
whitespace and initial word order.

Example:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

let s = "Let's take LeetCode contest";

var reverseWords = function (s) {
  let newStrArr = s.split(" ");

  let reverseWords = newStrArr.map((word) => word.split("").reverse().join(""));

  return reverseWords.join(" ");
};

console.log(reverseWords(s));
