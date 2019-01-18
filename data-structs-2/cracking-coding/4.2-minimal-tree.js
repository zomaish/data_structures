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



const arr = [1,2,3,4,5,6,7,8,9,10];
const tree = createBalancedTree(arr, 0, arr.length-1);

console.log(JSON.stringify(tree))