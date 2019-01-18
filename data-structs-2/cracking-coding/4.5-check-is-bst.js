class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const isBst = (node, min, max) => {
  if (!node) return true;

  if (node.v<=min || node.v >= max)return false;

  if (!isBst(node.left, min, node.v) || !isBst(node.right, node.v, max)) {
    return false;
  }

  return true;
};

const root = new Node(20);
root.left = new Node(10);
root.left.left = new Node(8)
root.left.right = new Node(5)

console.log(isBst(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER));