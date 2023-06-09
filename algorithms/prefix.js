/*
Write a function to find the longest common prefix string 
amongst an array of strings.

If there is no common prefix, return an empty string "".

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

let strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(strs));
