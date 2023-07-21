/*
Given the head of a singly linked list, return the middle node 
of the linked list.

If there are two middle nodes, return the second middle node.

Example:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

let head = [1, 2, 3, 4, 5];

const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow?.next;
    fast = fast?.next?.next;
  }
  return slow;
};

console.log(middleNode(head));
