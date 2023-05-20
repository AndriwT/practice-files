/*
Given an array of integers temperatures represents 
the daily temperatures, return an array answer such that 
answer[i] is the number of days you have to wait after 
the ith day to get a warmer temperature. 
If there is no future day for which this is possible, 
keep answer[i] == 0 instead.

Example:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
*/

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

var dailyTemperatures = function (temperatures) {
  let output = [];

  let len = temperatures.length;

  for (let i = 0; i < len; i++) {
    let counter = 0;
    for (let j = i + 1; j < len; j++) {
      if (temperatures[i] > temperatures[j]) {
        counter += 1;
      }
      if (temperatures[i] < temperatures[j]) {
        counter += 1;
        break;
      }
    }
    output.push(counter);
    counter = 0;
  }
  return output;
};

console.log(dailyTemperatures(temperatures));

// CURRENTLY NOT WORKING, NEEDS TO FIX
