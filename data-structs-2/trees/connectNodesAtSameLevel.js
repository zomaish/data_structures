class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = this.nextRight = null;
  }
}

const findPredecessor = (node) => { 
    let current = node;
    while(current.right && current.right !== node) current = current.right;
    return current;
  }


const connectNodesAtTheSameLevel = (tree) => {
  let tempRight;
  let parent = tree;
  const ptr = 'zz';
  parent.nextRight = ptr;

  while(parent) {
    tempRight = parent.right || {};

    if (!parent.left) {
      parent = parent.right;
    } else {
      parent.left.nextRight = parent.right || ptr;
      if (parent.left.right) {
        parent.left.right.nextRight = tempRight.left || ptr;
      }
      const predecessor = findPredecessor(parent.left);
      if (!predecessor.right) {
        predecessor.right = parent;
        parent = parent.left
      } else {
        predecessor.right = null;
        parent = parent.right;
      }
    }
  }
};


const tree = new Node('A');
tree.left = new Node('B');
tree.right = new Node('C');
tree.left.left = new Node('D');
tree.left.right = new Node('E');
tree.right.left = new Node('F');
tree.right.right = new Node('G');
tree.left.left.left = new Node('H');

connectNodesAtTheSameLevel(tree)