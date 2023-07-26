/*
Given the root of a binary tree, return the level order 
traversal of its nodes' values. (i.e., from left to right, 
level by level).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

let root = [3, 9, 20, null, null, 15, 7];

var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));

    while (len--) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
};

console.log(levelOrder(root));
