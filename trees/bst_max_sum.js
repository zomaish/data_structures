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
  
  maxUtil(node, res) {
    let nodeSum = 0;
    let maxTop = 0;
    if (node === null) return 0;
    
    const l = this.maxUtil(node.left, res);
    const r = this.maxUtil(node.right, res);
    
    nodeSum = Math.max(Math.max(l, r) + node.n, node.n);
    maxTop = Math.max(nodeSum, l+r+node.n);
    res.data = Math.max(res.data, maxTop);

  return nodeSum
  }
  
  maxSumPath(root) {
    let res = {data: 0};
    this.maxUtil(root, res);
    return res.data;
  }
}

const tree = new BST();
tree.root = new Node(10);
tree.root.left = new Node(2);
tree.root.right = new Node(10);
tree.root.left.left = new Node(20);
tree.root.left.right = new Node(1);
tree.root.right.right = new Node(-25);
tree.root.right.right.left = new Node(3);
tree.root.right.right.right = new Node(4);
 
console.log(tree.maxSumPath(tree.root));
