

class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

let head = null;
let tail = null;
const biNodeToDll = (node) => {

  if (!node) return;

  biNodeToDll(node.left);
  const tempRight = node.right;

  console.log('val is', node.v)

  if (!head) {
    head = tail = node;
  } else {
    tail.left = node;  
    node.right = tail;
    tail = tail.left;
  }

  biNodeToDll(tempRight);
};


const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.left = new Node("F");
root.right.right = new Node("G");

const dll = biNodeToDll(root);

// D <-> B <-> E <-> A <-> F <-> C <-> G
console.log(head);