const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    },
  },
};

//     1
//   2.  3
// 4. 5. 6. 7

// BFS Breadth First Search
// function traverse(node, sum) {
//   const val = node.val;

//   if (node.right) {
//      return traverse(node.right, sum + val);
//   }
//   return val + sum;
// }

// DFS Depth First Search
function traverse(node) {
  let val = node.val;

  if (node.right) {
    let res = traverse(node.right);
    val += res;
  }

  if (node.left) {
    let res = traverse(node.left);
    val += res;
  }

  return val;
}

function main() {
  console.log(traverse(tree, 0));
}

main();

