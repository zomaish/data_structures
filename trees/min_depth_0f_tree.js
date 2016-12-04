class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
  }
}

function minDepth(root) {
  if (root === null)
    return 0;
  if (root.left === null && root.right)
    return 1;
  
  if (!root.left)
    return 1+ minDepth(root.right);
  if (!root.right)
      return 1+ minDepth(root.left);
  
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

const root        = new Node(1);
    root.left        = new Node(2);
    root.right       = new Node(3);
    root.left.left  = new Node(4);
    root.left.right = new Node(5);
root.left.right.left = new Node(5);
root.right.left = new Node(5);

console.log(minDepth(root));