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

  height(root) {
    if (!root) return 0;
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }
}

const bst = new BST();

bst.add(10);
bst.add(15);
bst.add(5);
bst.add(12);
bst.add(3);
bst.add(6);
bst.add(16);
bst.add(17);

console.log(bst.height(bst.root))