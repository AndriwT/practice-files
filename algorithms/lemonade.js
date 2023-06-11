/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue
 to buy from you and order one at a time (in the order specified by bills). 
 Each customer will only buy one lemonade and pay with either a $5, $10, 
 or $20 bill. You must provide the correct change to each customer so that 
 the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, 
or false otherwise.

Example:
Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
*/

let bills = [5, 5, 5, 10, 20];

var lemonadeChange = function (bills) {
  let change = {
    5: 0,
    10: 0,
    20: 0,
  };

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      change[5] += 1;
    } else if (bills[i] === 10) {
      change[10] += 1;
      if (change[5] >= 1) {
        change[5] -= 1;
      } else return false;
    } else if (bills[i] === 20) {
      change[20] += 1;
      if (change[5] >= 1 && change[10] >= 1) {
        change[5] -= 1;
        change[10] -= 1;
      } else if (change[5] > 2) {
        change[5] -= 3;
      } else return false;
    }
  }
  return true;
};

console.log(lemonadeChange(bills));
