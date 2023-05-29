/*
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, 
and blue, respectively.

You must solve this problem without using the library's sort function.

Example:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

let nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let leftIdx = 0;
  let rightIdx = nums.length - 1;
  let temp;

  for (let i = 0; i <= rightIdx; ) {
    let num = nums[i];

    if (num === 0) {
      temp = num;
      nums[i] = nums[leftIdx];
      nums[leftIdx] = temp;
      i++;
      leftIdx++;
    } else if (num === 2) {
      temp = num;
      nums[i] = nums[rightIdx];
      nums[rightIdx] = temp;
      rightIdx--;
    } else {
      i++;
    }
  }
  return nums;
};

console.log(sortColors(nums));
