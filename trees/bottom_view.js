/**
Given a Binary Tree, we need to print the bottom view from left to right.
A node x is there in output if x is the bottommost node at its horizontal distance.
Horizontal distance of left child of a node x is equal to horizontal distance of x minus 1,
and that of right child is horizontal distance of x plus 1.
http://www.geeksforgeeks.org/bottom-view-binary-tree/
**/

class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
    this.hd = 0
  }

  isNode() {
    if (this instanceof Node) return "Node";
  }
}

function bottomView(root) {
  const q = [];
  let temp = root;
  temp.hd = 0;
  const map = {};

  while(temp) {

    if (temp.left) {
      temp.left.hd = temp.hd-1;
      q.push(temp.left);
    }

    if (temp.right) {
      temp.right.hd = temp.hd+1;
      q.push(temp.right);
    }

    map[temp.hd] = temp.n;

    temp = q.shift();
  }
  console.log(map);
}


const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

console.log(bottomView(root));
