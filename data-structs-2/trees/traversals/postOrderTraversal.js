class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const postOrderTravesal = (node) => {
  if (!node) return;
  const s = [];
  s.push(node);
  let curr, prev;
  while(s.length) {
    curr = s[s.length-1];
    //are we going down
    if (!prev || prev.left === curr || prev.right === curr) {
      if (curr.left) s.push(curr.left);
      if (curr.right) s.push(curr.right);
    }
    //are we going up
    else if (curr.left === prev) {
      if (curr.right) s.push(curr.right);
    }
    else {
      console.log(s.pop());
    }
    prev = curr;
  }  
}

const tree = new Node(100);
tree.left = new Node(50);
tree.right = new Node(300);
tree.left.left = new Node(25);
tree.left.right = new Node(75);
tree.left.right.left = new Node(60);
tree.left.right.right = new Node(90);
tree.right.left = new Node(250);
tree.right.right = new Node(400);

postOrderTravesal(tree);
