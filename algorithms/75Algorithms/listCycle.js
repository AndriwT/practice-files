/*
Given the head of a linked list, return the node where the cycle begins. 
If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the 
list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's 
next pointer is connected to (0-indexed). It is -1 if there is no cycle. 
Note that pos is not passed as a parameter.

Do not modify the linked list.

Example:
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, 
where tail connects to the second node. 

3 -> *2 -> 0 -> -4 -> *
*/

let head = [3, 2, 0, -4];

var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;
  let restart = head;

  while (fast?.next) {
    slow = slow?.next;
    fast = fast?.next?.next;

    if (fast === slow) {
      break;
    }
  }

  if (fast !== slow) {
    return null;
  }

  while (restart !== slow) {
    slow = slow.next;
    restart = restart.next;
  }

  return slow;
};

console.log(detectCycle(head));
