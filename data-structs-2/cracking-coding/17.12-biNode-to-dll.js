
class BiNode {
  constructor(v) {
    this.v = v;
    this.node1 = this.node2 = null;
  }
}

const concat = (x, y) => {
  // console.log('concat x', x.v, 'y', y.v)
  x.node2 = y;
  y.node1 = x;
}

const convertToDll = (root) => {
  if(!root) return null;

  const p1 = convertToDll(root.node1);
  const p3 = convertToDll(root.node2);


  // console.log('p1', p1?p1.v: null, 'p3', p3?p3.v:null, 'root', root.v)


  if (!p1 && !p3) {
    root.node1 = root.node2 = root;
    return root;
  }

  const prev = p3 ? p3.node1 : null;

  if (p1) {
    concat(p1.node1, root)
  } else {
    concat(p3.node1, root);
  }

  if (p3) {
    console.log('concating ', root.v, p3.v)
    concat(root, p3)
  } else {
    concat(root, p1)
  }

  if (p1 && p3) {
    concat(prev, p1)
  }

  // console.log('returning', p1?p1.v : root.v)
  return p1 || root;
}

const root = new BiNode(4);
root.node1 = new BiNode(2);
root.node1.node2 = new BiNode(3);
root.node1.node1 = new BiNode(1);
root.node1.node1.node1 = new BiNode(0);

root.node2 = new BiNode(5);
root.node2.node2 = new BiNode(6);

// convertToDll(root)
console.log(convertToDll(root))


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


// const root = new Node("A");
// root.left = new Node("B");
// root.right = new Node("C");
// root.left.left = new Node("D");
// root.left.right = new Node("E");
// root.right.left = new Node("F");
// root.right.right = new Node("G");

// const dll = biNodeToDll(root);

// // D <-> B <-> E <-> A <-> F <-> C <-> G
// console.log(head);