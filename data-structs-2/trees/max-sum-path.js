class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}

const calcSum = (arr) => {
  let sum = 0;
  for (let i=0; i<arr.length; i++) sum+=arr[i];

  return sum;
};

const clacSumPath = (node, path = [], res = {odd: 0, even: 0}) => {

  if (!node) {
    const sum = calcSum(path);
    if (sum%2 === 0) {
      if (sum>res.even) {
        res.even = sum;
      }
    } else if (sum >res.odd) {
      res.odd = sum
    }
    return;
  }

  path.push(node.v)
  clacSumPath(node.left, path, res);
  clacSumPath(node.right, path, res);
  path.pop();
};


const findMaxPathEvenSum = (root) => {
  const left = {odd: 0, even: 0};
  const right = {odd: 0, even: 0};
  clacSumPath(root.left, [], left);
  clacSumPath(root.right, [], right);
  
  let evenSum = 0, oddSum = 0;

  if ( (root.v + left.even + right.even) %2 === 0) {
    evenSum = root.v + left.even + right.even;
    oddSum = root.v +left.odd + right.odd;
  } else {
    oddSum = root.v + left.even + right.even;
    evenSum = root.v +left.odd + right.odd;
  }
  
  if (oddSum > evenSum) {
    return oddSum;
  }

  return evenSum;
};

const root = new Node(10);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(101);
root.right.right = new Node(13)

console.log(findMaxPathEvenSum(root));
