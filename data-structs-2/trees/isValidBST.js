class Node {
  constructor (v) {
    this.left = this.right = null;
    this.v = v;
  }
}

const getHeight = (node) => {
  if (!node) return 0;
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

const isValidBst = (root) => {
  if (!root) return true;
  
  const heightLeft = getHeight(root.left);
  const heightRight = getHeight(root.right);

  if (root.left.v > root.v) { return false}
  if (root.right.v < root.v) { return false}
  
  if(Math.abs(heightLeft-heightRight) >1 || !isValidBst(root.left) || !isValidBst(root.right)) {
    return false;
  }

  return true;
};



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
bst.right.right.left = new Node(114)
bst.right.right.right = new Node(15)

console.log(isValidBst(bst))
