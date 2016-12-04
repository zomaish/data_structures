class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
  }

  isNode() {
    if (this instanceof Node) return "Node";
  }
}

function levelOrderTraversal(root) {
  let q = [];
  let temp = root;

  while(temp) {
    console.log(temp.n);
    if(temp.left)
      q.push(temp.left);

    if (temp.right)
      q.push(temp.right)

    temp = q.shift();
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(levelOrderTraversal(root))
