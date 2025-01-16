// Breadth-First Search Traversal on a Tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null    
  }
}

function bfs(tree) {
  if(!tree) return; // if tree is empty, return nothing

  const queue = [tree]; // Initialize a queue with the root node

  while(queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue the front node
    console.log(currentNode); // view tree
  
    // Enqueue the left and right children if they exist
    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("BFS Traversal:");
bfs(root);