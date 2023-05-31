/*
Given an array nums of distinct integers, return all the possible 
permutations. You can return the answer in any order.

Example:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

let nums = [1, 2, 3];

var permute = function (nums) {
  let output = [];

  const permutation = (arr, val = []) => {
    if (arr.length === 0) {
      output.push(val);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutation(curr.slice(), val.concat(next));
      }
    }
  };
  permutation(nums);

  return output;
};

console.log(permute(nums));
