
class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
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




const hasSumUtil = (l, r, t, min, max) => {
  if (!l || !r) return false;

  if (l.v>r.v) return false


  if (min.v + max.v < t) {
    if (hasSumUtil(l.left, r, t, min, max)) {
      return true
    }

    min = l;

    if (min!==max && min.v + max.v === t) {
      console.log("found", min.v, max.v)
      return true;
    } else if (min.v + max.v > t) {
      hasSumUtil(l, r, t, min, max);
    }

    return hasSumUtil(l.right, r, t, min, max);
  } else {
    if (hasSumUtil(l, r.right, t, min, max)) {
      return true;
    }

    max = r;
    if (min!==max && min.v + max.v === t) {
      console.log("found", min.v, max.v)
      return true;
    } else if (min.v + max.v < t) {
      hasSumUtil(l, r, t, min, max);
    }

    return hasSumUtil(l, r.left, t, min, max);
  }
}



const hasSum = (n, t) => {
  const min = findMin(n);
  const max = findMax(n);

  return hasSumUtil(n, n, t, min, max);
};


const tree = new Node(15);
tree.left = new Node(10)
tree.right = new Node(21)
tree.left.left = new Node(8)
tree.left.right = new Node(12)
tree.right.left = new Node(16)
tree.right.right = new Node(25)