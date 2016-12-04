
let preIdx = 0;

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

function search(arr, key) {
    for(let i = 0; i<arr.length; i++)
      if (arr[i] === key)
        return i;

    return -1;
}

function buildTree(inarr, pre, l, r) {

    if (l>r) return null;

    let idx = search(inarr, pre[preIdx++]);

    if (idx === -1) return null;

    let root = new Node(inarr[idx]);

    if(l==r) return root;

    root.left = buildTree(inarr, pre, l, idx-1);
    root.right = buildTree(inarr, pre, idx+1, r);

    return root;
}

function inorderT(node) {
 if (node === null) return;
  inorderT(node.left);
  console.log(node.data);
  inorderT(node.right)
}

const inarr = ['D', 'B', 'E', 'A', 'F', 'C'];
const pre = ['A', 'B', 'D', 'E', 'C', 'F'];

let root = buildTree(inarr, pre, 0, inarr.length-1)
inorderT(root)
