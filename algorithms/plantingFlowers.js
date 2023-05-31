/* 
You have a long flowerbed in which some of the plots are planted, 
and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, 
where 0 means empty and 1 means not empty, and an integer n, 
return true if n new flowers can be planted in the flowerbed 
without violating the no-adjacent-flowers rule and false otherwise.

Example:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    count += 1;
  }

  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    count += 1;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      count += 1;
    }
  }

  return count === n;
};

console.log(canPlaceFlowers(flowerbed, n));