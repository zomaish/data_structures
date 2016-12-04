 
class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

class ListNode {
  constructor(v) {
    this.v = v;
    this.next = null;
  }

}

const listOfDepths = (node, lvl, h) => {
  const res = Array.apply(null, Array(h));
  listOfDepthsUtil(node, lvl, h, res);

  return res;
};

const listOfDepthsUtil = (node, lvl, h, res) => {

  if (!node || lvl >= h) return;

  if (!res[lvl])
    res[lvl] = new ListNode(node.v);
  else {
    let t = res[lvl];
    while (t.next) t = t.next
    t.next = new ListNode(node.v);
  }

  listOfDepthsUtil(node.left, lvl+1, h, res)
  listOfDepthsUtil(node.right, lvl+1, h, res)
};


const getHeight = (node) => {
  if(!node) return 0;

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}



 const tree = new Node('A');
tree.left = new Node('B');
tree.right = new Node('C');
tree.left.left = new Node('D');
tree.left.right = new Node('E');
tree.right.left = new Node('F');
tree.right.right = new Node('G');
tree.left.left.left = new Node('H');

console.log(listOfDepths(tree, 0, getHeight(tree)))