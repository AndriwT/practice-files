/*
Given a non-empty array of integers nums, 
every element appears twice except for one. 
Find that single one.

You must implement a solution with a linear runtime 
complexity and use only constant extra space.

Example:
Input: nums = [4,1,2,1,2]
Output: 4
*/

let nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {
  let sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      return sortedNums[i];
    } else {
      i++;
    }
  }
};

console.log(singleNumber(nums));
