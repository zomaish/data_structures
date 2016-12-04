
class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}


const constructBstFromPreOrder = (arr) => {
  
  const root = constructBstFromPreOrderUtil(arr, 0, Number.MIN_VALUE, Number.MAX_VALUE)
  console.log(root)
};

const constructBstFromPreOrderUtil = (arr, currIdx, min, max) => {

  if (currIdx >= arr.length) {
    return null;
  }

  const val = arr[currIdx++]
  if (val>min && val<max) {
    const node = new Node(val);

    if (currIdx < arr.length) {
      
      node.left = constructBstFromPreOrderUtil(arr, currIdx, min, val);
      node.right = constructBstFromPreOrderUtil(arr, currIdx, val, max);
    }
  }

  return node;


}


const arr = [10, 5, 1, 7, 40, 50];

constructBstFromPreOrder(arr);