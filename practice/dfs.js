// Depth-First Search Traversal on a Tree using recursion
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function dfsPreOrder(node) {
  if(!node) return;
  console.log(node.value);
  dfsPreOrder(node.left);
  dfsPreOrder(node.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("DFS in Tree (Pre-order traversal):");
dfsPreOrder(root);