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


function lca(root, n1, n2) {
  if (n1 > n2) {
    const temp = n1;
    n1 = n2;
    n2 = temp
  }
  
  return lcaRec(root, n1, n2);
}

function lcaRec(node, n1, n2) {
  if (!node) return null;
  
  if (n1 <= node.n && n2 >= node.n)
    return node;
  
  if (n2 > node.n)
    return lcaRec(node.right, n1, n2);
  else
    return lcaRec(node.left, n1, n2);
}


const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

let n1 = 10, n2 = 14;
let t = lca(root, n1, n2);
console.log("LCA of " + n1 + " and " + n2 + " is " + t.n);
  
n1 = 14;
n2 = 8;
t = lca(root, n1, n2);
console.log("LCA of " + n1 + " and " + n2 + " is " + t.n);
  
n1 = 10;
n2 = 22;
t = lca(root, n1, n2);
console.log("LCA of " + n1 + " and " + n2 + " is " + t.n);