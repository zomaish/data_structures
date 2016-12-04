let preIdx = 0;

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}


function buildTree(pre, min, max) {
  let key = pre[preIdx]
  if (preIdx>= pre.length) return null;

  let root = null;
  if (key > min && key < max) {
      root = new Node(key);
      ++preIdx;


      if (preIdx<pre.length) {
        root.left = buildTree(pre, min, key);
        root.rigth = buildTree(pre, key, max);
      }
  }

  return root;

}


function preorderT(node) {
 if (node === null) return;
   console.log(node.data);
  preorderT(node.left);
  preorderT(node.right)
}



const pre = [10, 5, 1, 7, 40, 50];

let root = buildTree(pre, Number.MIN_VALUE, Number.MAX_VALUE);
preorderT(root);
