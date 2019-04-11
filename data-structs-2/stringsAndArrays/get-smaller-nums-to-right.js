//https://leetcode.com/problems/count-of-smaller-numbers-after-self/




class TreeNode {
  constructor(v, count) {
    this.v = v;
    this.count = count;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(v, res, i) {
    this.root = this.addUtil(this.root, v, 0, res, i);
  }

  addUtil(node, v, count, res, i) {
    if(!node) {
      res[i] = count
      return new TreeNode(v, count);
    }

    if (v<node.v) {
      node.left = this.addUtil(node.left, v, count, res, i)
    } else {
      node.right = this.addUtil(node.right, v, count+1, res, i)
    }

    return node;
  }
}


const getSmallerThanToTheRight = (arr) => {

  const lastIdx = arr.length-1;
  const res = Array(arr.length);

  const tree = new BST();

  for(let i=lastIdx; i>=0; i--) {
    tree.add(arr[i], res, i)
  }

  console.log('res', res)
}


const getSmallerToRight = (arr) => {
  const res = Array.apply(null, Array(arr.length)).map(Number.prototype.valueOf, 0);
  for (let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[i]) {
        res[i] +=1
      }
    }
  }
  console.log(res)
}

getSmallerToRightBst([5,2,6,1])
