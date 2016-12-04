/**
Top view of a binary tree is the set of nodes visible when the tree is viewed from the top.
 Given a binary tree, print the top view of it. The output nodes can be printed in any order. Expected time complexity is O(n)

A node x is there in output if x is the topmost node at its horizontal distance.
Horizontal distance of left child of a node x is equal to horizontal distance of x minus 1,
and that of right child is horizontal distance of x plus 1.

http://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/
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

function topView(root) {
  let temp = root;
  temp.hd = 0;
  let q = [];
  let map = {};

  while(temp) {

    if (temp.left) {
      temp.left.hd = temp.hd -1;
      q.push(temp.left);
    }

    if (temp.right) {
      temp.right.hd = temp.hd + 1;
      q.push(temp.right);
    }

    if (!map.hasOwnProperty(temp.hd)) {
      map[temp.hd] = temp.n
    }

    temp = q.shift();
  }

  console.log(map);

}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.left.right.right = new Node(5);
root.left.right.right.right = new Node(6);

console.log(topView(root));
