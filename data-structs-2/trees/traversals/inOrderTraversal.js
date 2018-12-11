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


  inorderTraversalRec(node) {
    if (!node) {
      return;
    }
    this.inorderTraversalRec(node.left);
    console.log(node.v);
    this.inorderTraversalRec(node.right);
  } 

  inorderTraversalIterative(node) {
    let temp;
    const s = [];
    this.addLeftToStack(node, s);
    while(s.length) {
      temp = s.pop();
      console.log(temp.v);
      if (temp.right) {
        this.addLeftToStack(temp.right, s);
      }
    }
  }

  addLeftToStack(node, s) {
    let temp = node;
    while(temp) {
      s.push(temp)
      temp = temp.left;
    }
  }

  inorderTraversalIterativeMorrisTraversal(node) {
    let current = node;

    while(current) {
      if (!current.left) {
        console.log(current.v)
        current = current.right;
      } else {
        const pred = this.findPredecessor(current);
        if (!pred.right) {
          pred.right = current;
          current = current.left;
        } else {
          pred.right = null;
          console.log(current.v);
          current = current.right;
        }
      }
    }
  }

  findPredecessor(node) {
    let current = node.left;
    while(current.right && current.right !== node) current = current.right;
    return current;
  }
}


// const bst = new Node(1);
// bst.left = new Node(2)
// bst.right = new Node(3)

// bst.left.left = new Node(4)
// bst.left.right = new Node(5)
// bst.right.left = new Node(6)
// bst.right.right = new Node(7)

// bst.left.left.left = new Node(8)
// bst.left.left.right = new Node(9)
// bst.left.right.left = new Node(10)
// bst.left.right.right = new Node(11)

// bst.right.left.left = new Node(12)
// bst.right.left.right = new Node(13)
// bst.right.right.left = new Node(14)
// bst.right.right.right = new Node(15)

const tree = new Node('A');
tree.left = new Node('B');
tree.right = new Node('C');
tree.left.left = new Node('D');
tree.left.right = new Node('E');
tree.right.left = new Node('F');
tree.right.right = new Node('G');
tree.left.left.left = new Node('H');

const obj = new BST()
console.log('', obj.inorderTraversalIterativeMorrisTraversal(tree))

