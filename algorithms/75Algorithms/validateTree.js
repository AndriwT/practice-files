/*
Given the root of a binary tree, determine if it is a valid binary 
search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than 
the node's key.
Both the left and right subtrees must also be binary search trees.
 
Example:
Input: root = [2,1,3]
Output: true
*/

let root = [2, 1, 3];

var isValidBST = function (root) {
  function recurse(root, min, max) {
    if (root === null) return true;

    if (root.val >= max || root.val <= min) {
      return false;
    }
    return (
      recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
    );
  }
  return recurse(root, -Infinity, Infinity);
};

console.log(isValidBST(root));
