/*
Given the root of an n-ary tree, return the preorder traversal of 
its nodes' values.

Nary-Tree input serialization is represented in their level order 
traversal. Each group of children is separated by the null value 
(See examples)

Example:
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
*/

let root = [1, null, 3, 2, 4, null, 5, 6];

var preorder = function (root, res = []) {
  if (!root) return [];
  res.push(root.val);
  for (let i = 0; i < root.children.length; i++) {
    preorder(root.children[i], res);
  }
  return res;
};

console.log(preorder(root));
