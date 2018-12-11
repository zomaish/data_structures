class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null
  }
}



const findMin = (node) => {
  let temp = node;

  while(temp.left) {
    temp = temp.left;
  }

  return temp
}
const findMax = (node) => {
  let temp = node;

  while(temp.right) {
    temp = temp.right;
  }

  return temp
}


const findSum = (l, r, sum, x, y) => {
  if (!l || !r) return false;

  if (x.v + y.v < sum) {
    if (findSum(l.left, r, sum, x, y)) {
      return true;
    }

    x = l;

    if (x !== y && x.v + y.v === sum) {
      console.log('found ', x.v, y.v);
      return true;
    }

    return findSum(l.right, r, sum, x, y);
  } else {

    if (findSum(l, r.right, sum, x, y)) {
      return true;
    }

    y = r;

    if (x !== y && x.v + y.v === sum) {
      console.log('found ', x.v, y.v);
      return true;
    }

    return findSum(l, r.left, sum, x, y);
  }

}

const tree = new Node(15);
tree.left = new Node(10)
tree.right = new Node(20)
tree.left.left = new Node(8)
tree.left.right = new Node(12)
tree.right.left = new Node(16)
tree.right.right = new Node(25)

const min = findMin(tree)
const max = findMax(tree)

findSum(tree, tree, 33, min, max)