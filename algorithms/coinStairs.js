/* 
You have n coins and you want to build a staircase with these coins. 
The staircase consists of k rows where the ith row has exactly i coins. 
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the 
staircase you will build.

Example:
Input: n = 5;
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
*/

let n = 5;

var arrangeCoins = function (n) {
  let k = 0;
  let i = 1;

  while (n > 0) {
    n -= i;
    i++;
    k++;
  }

  if (n === 0) {
    return k;
  } else {
    return --k;
  }
};

console.log(arrangeCoins(n));
