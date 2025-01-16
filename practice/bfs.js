// BFS on a tree, looking for a target

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfs(tree, target) {
  if(!tree) return false;

  const queue = [tree];

  while(queue.length > 0) {
    const currentNode = queue.shift();

    if(currentNode.value === target) {
      console.log(`Found ${currentNode.value}`);
      return true;
    }
    
    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }

  console.log("Target not found");
  return false;

}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

bfs(root, 7);