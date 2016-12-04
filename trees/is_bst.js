class Node {
  constructor(d) {
    this.d = d;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insertIterative(d) {
  let current = this.root;
    let parent = this.root;
    
    while(current) {
      if (current.d>=d) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    
    if (!this.root) {
      this.root = new Node(d);
    } else if (parent.d >= d) {
      parent.left = new Node(d)
    } else {
      parent.right = new Node(d);
    } 
  }
  
  arrayToTree(arr) {
    for (let i=0; i<arr.length; i++)
      this.insertIterative(arr[i]);
  }
  
  isBst(node) {
    const min = Number.MIN_VALUE;
    const max = Number.MAX_VALUE;
    return this.isBstUtil(node, min, max);
  }
  
  isBstUtil(node, min, max) {
    if (!node) return true;

    if (node.d < min || node.d>max) {
      return false;
    }
    
    return (this.isBstUtil(node.left, min, node.d-1) && 
            this.isBstUtil(node.right, node.d +1, max));
  }
  
  
  
}


const bst = new BST();
const root = new Node(4);
  root.left        = new Node(2);
  root.right       = new Node(5);
  root.left.left  = new Node(1);
  root.left.right = new Node(0); 

console.log(bst.isBst(root));