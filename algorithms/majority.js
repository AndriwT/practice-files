/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example:
Input: nums = [3,2,3]
Output: 3
*/

let nums = [3, 2, 3];

var majorityElement = function (nums) {
  let hash = {};

  for (const num of nums) {
    hash[num] = hash[num] + 1 || 1;
  }

  for (const key in hash) {
    if (hash[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
};

console.log(majorityElement(nums));
