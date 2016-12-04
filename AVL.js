class AvlNode {
  constructor(n) {
    this.height = 0;
    this.left = null;
    this.right = null;
    this.n = n;
  }
}


class AVLTree {
  constructor() {
    this.root = null;
  }

  heightOf(node) {
    if (!node) return -1;
    return node.height;
  }

  updateHeightFor(node) {
    node.height = Math.max(this.heightOf(node.left), this.heightOf(node.right)) +1;
  }

  insert(node, n) {
    if (!node) {
      return new AvlNode(n);
    }
    
    if (node.n >= n) node.left = this.insert(node.left, n);
    else node.right = this.insert(node.right, n);
  
    return this.rebalanceTreeFrom(node);
  }

  rotateRight(parent) {
    //need to check for nodes left and right

    let node = parent.left;
    let parentLeft = node.right;

    parent.left = parentLeft;
    node.right = parent;

    this.updateHeightFor(parent);
    this.updateHeightFor(node);
    return node;
  }

  rotateLeft(parent) {
    //need to check for nodes left and right

    let node = parent.right;
    let parentRight = node.left;

    node.left = parent;
    parent.right = parentRight;

    this.updateHeightFor(parent);
    this.updateHeightFor(node);
  }


  rebalanceTreeFrom(node) {
    this.updateHeightFor(node);
    
    const leftHeight = this.heightOf(node.left);
    const rightHeight = this.heightOf(node.right);
    
    //left heavy
    if (leftHeight >= 2 + rightHeight) {
      if (this.heightOf(node.left.left) >= this.heightOf(node.left.right)) {
        console.log("rr>>", node);
        return this.rotateRight(node);
      } else {
    node.left = this.rotateLeft(node.left);
        console.log("rr <<", node);
        return this.rotateRight(node);
      }
    } else if (rightHeight >= 2 + leftHeight) {
      if (this.heightOf(node.right.right) >= this.heightOf(node.right.left)) {
        return this.rotateLeft(node);
      } else {
        console.log("rr ||", node.right);
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      }
    }
    
    return node;
  }
}


const avl = new AVLTree();
avl.root = avl.insert(avl.root, 11);
avl.root = avl.insert(avl.root, 1);
avl.insert(avl.root, 12);
avl.insert(avl.root, 0);
avl.insert(avl.root, 9);
avl.insert(avl.root, 10);
avl.insert(avl.root, 3);
avl.insert(avl.root, 2);
avl.insert(avl.root, 5);
avl.insert(avl.root, 4);
avl.insert(avl.root, 6);
avl.insert(avl.root, 8);

console.log(avl.root)




