/*
You are given an array prices where prices[i] is the price of a given 
stock on the ith day.

You want to maximize your profit by choosing a single 
day to buy one stock and choosing a different day in the 
future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 
is not allowed because you must buy before you sell.
*/

let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let low = prices[0];
  let lowIndex = 0;
  let bestPrice = prices[0];
  let maxProfits = [];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > bestPrice && i > lowIndex) {
      bestPrice = prices[i];
    }
    if (prices[i] < low) {
      maxProfits.push(bestPrice - low);
      low = prices[i];
      lowIndex = i;
      bestPrice = prices[i];
    }
  }
  maxProfits.push(bestPrice - low);
  maxProfits.sort((a, b) => b - a);

  console.log(maxProfits[0]);
};

maxProfit(prices);
