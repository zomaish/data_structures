
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

function isFullTree(node) {
  //root
  if (!node)
    return true;

  //leafs
  if (!node.left && !node.right)
    return true;
  
  if(node.left && node.right)
    return (isFullTree(node.left) && isFullTree(node.right));
  
  return false;
}


const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
 
root.left.right = new Node(40);
root.left.left = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
 
root.left.left.left = new Node(80);
root.left.left.right = new Node(90);
root.left.right.left = new Node(80);
root.left.right.right = new Node(90);
root.right.left.left = new Node(80);
root.right.left.right = new Node(90);
root.right.right.left = new Node(80);
root.right.right.right = new Node(90);

console.log(isFullTree(root))