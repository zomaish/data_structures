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

  //get tree in ASC sorted order
  inorderTraversal(node) {
    if (!node) return;
    this.inorderTraversal(node.left);
    console.log(node.v);
    this.inorderTraversal(node.right);
  }

  //copy tree
  preOrderTraversal(node) {}
}




const bst = new BST();

bst.add(10);
bst.add(15);
bst.add(5);
bst.add(12);
bst.add(3);
bst.add(6);
bst.add(16);

bst.inorderTraversal(bst.root);
console.log('', bst)


