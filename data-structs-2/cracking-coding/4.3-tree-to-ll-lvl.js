
class LinkedList {
  constructor() {
    this.head = null;
  }
}


class BSTNode {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const createBalancedTree = (arr, l, r) => {
  if (l>r) return null;

  const mid = (r+l)/2 |0;
  console.log('mid', mid, r, l)
  const node = new BSTNode(arr[mid]);
  node.left = createBalancedTree(arr, l, mid-1);
  node.right = createBalancedTree(arr, mid+1, r);

  return node;
};

const getTreeHeight = (node) => {
  if (!node) return 0;
  return (1 + Math.max(getTreeHeight(node.left), getTreeHeight(node.right)));
};

const createLinkedListsFromTreeUtil = (node, lvl, res) => {
  if (!node) return;

  createLinkedListsFromTreeUtil(node.left, lvl+1, res)
  createLinkedListsFromTreeUtil(node.right, lvl+1, res)

  node.left = null;
  node.right = null;

  const prev = res[lvl] || null;
  node.right = prev;
  res[lvl] = node;
};

const createLinkedListsFromTree = (node) => {
  const height = getTreeHeight(node);

  const res = Array.apply(null, Array(height));
  createLinkedListsFromTreeUtil(node, 0, res);

  console.log('ll ======> ', JSON.stringify(res));
  
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const tree = createBalancedTree(arr, 0, arr.length-1);
// console.log('tree', tree)
createLinkedListsFromTree(tree);

