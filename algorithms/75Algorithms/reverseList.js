/*
Given the head of a singly linked list, reverse the list, 
and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

let head = [1, 2, 3, 4, 5];

var reverseList = function (head) {
  let prev = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
};

console.log(reverseList(head));
