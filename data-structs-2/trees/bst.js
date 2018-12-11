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

  remove(v) {
    this.root = this.removeRec(this.root, v);
  }


  removeRec(node, v) {
    let rightTemp = null;
    let leftTemp = null;
    let minNode = null;

    if (node.v === v) {
      rightTemp = node.right;
      leftTemp = node.left;
      minNode = this.getMinNode(node)
      this.removeLeaf(node, minNode.v);

      minNode.left = leftTemp;
      minNode.right = rightTemp;
      return minNode;
    }

    if (node.v > v) {
      node.left = this.removeRec(node.left, v);
    } else {
      node.right = this.removeRec(node.right, v)
    }

    return node;
  }

  removeLeaf(node, v) {
    if (!node) return node;

    if (node.v > v) node.left = this.removeLeaf(node.left, v)
    else if (node.v < v) node.right = this.removeLeaf(node.right, v);

    return null;
  }

  getMinNode(node) {
    if (!node) return node;

    if (node.right) return this.findMinNode(node.right)
    return node.left;

  }

  findMinNode(node) {
    if (!node || !node.left) {
      return node;
    }

    return this.findMinNode(node.left);
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

bst.remove(10)
console.log('', bst)