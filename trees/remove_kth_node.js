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


function removeKth(root, k) {
  root =  removeKthRec(root, k, 1);
  console.log(root)
}

function removeKthRec(node, k, i) {
  
  if (!node) return node;

  node.left = removeKthRec(node.left, k, i + 1);
  node.right = removeKthRec(node.right, k, i + 1);
  
  if (!node.left && !node.right && i<k)
    return null;
  
  return node;
  
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(7);
root.right.right = new Node(6);
root.right.right.left = new Node(8);
removeKth(root, 4)
console.log(removeKth(root, 4));