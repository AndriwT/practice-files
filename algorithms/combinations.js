/*
Given two integers n and k, return all possible combinations 
of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., 
[1,2] and [2,1] are considered to be the same combination.
*/

let n = 4;
let k = 2;

var combine = function (n, k) {
  let output = [];

  const walk = (current, start) => {
    if (current.length === k) {
      output.push(current);
      return;
    }
    if (current.length > k) {
      return;
    }
    for (let i = start; i <= n; i++) {
      walk(current.concat(i), i + 1);
    }
  };

  walk([], 1);
  return output;
};

console.log(combine(n, k));
