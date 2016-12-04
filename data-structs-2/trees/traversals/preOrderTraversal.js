class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(v) {
    this.root = this.addRec(this.root, v);
  }

  addRec(node, v) {
    if (!node) {
      return new Node(v);
    }

    if (node.v > v) {
      node.left = this.addRec(node.left, v);
    } else {
      node.right = this.addRec(node.right, v);
    }
    return node;
  }


  preOrderTraversalRec(node) {
    console.log(node.v);
    this.preOrderTraversalRec(node.left);
    this.preOrderTraversalRec(node.right);
  }

  preOrderTraversalIterative(node) {
    let current = node;
    const s = [];
    while(current) {
      console.log(current.v);
      if (current.right) s.push(current.right);
      current = current.left || s.pop();
    }
  }
  
}


// const bst = new BST();

// bst.add(10);
// bst.add(15);
// bst.add(5);
// bst.add(12);
// bst.add(3);
// bst.add(6);
// bst.add(16);

// bst.inorderTraversal(bst.root);


const bst = new Node(1);
bst.left = new Node(2)
bst.right = new Node(3)

bst.left.left = new Node(4)
bst.left.right = new Node(5)
bst.right.left = new Node(6)
bst.right.right = new Node(7)

bst.left.left.left = new Node(8)
bst.left.left.right = new Node(9)
bst.left.right.left = new Node(10)
bst.left.right.right = new Node(11)

bst.right.left.left = new Node(12)
bst.right.left.right = new Node(13)
bst.right.right.left = new Node(14)
bst.right.right.right = new Node(15)

const obj = new BST()
console.log('', obj.preOrderTraversalIterative(bst))

