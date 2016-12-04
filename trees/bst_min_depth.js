class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
  }
  
  isNode() {
    if (this instanceof Node) return "Node";
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  minDepthBST(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;

    if (root.left === null) return this.minDepthBST(root.right) + 1;
    if (root.right === null) return this.minDepthBST(root.left) + 1;

    return Math.min(this.minDepthBST(root.left), this.minDepthBST(root.right)) + 1;
  }
}

const tree = new BST();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.left.right.left = new Node(9)
tree.root.right.right = new Node(13);
 
console.log( tree.minDepthBST(tree.root));
