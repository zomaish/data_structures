class Node {
  constructor(v) {
    this.v = v;
    this.left = this.right = null;
  }
}


const preOrderToBstRec = (arr) => {
  const idx = {
    idx: 0
  };

  return preOrderToBstRecUtil(arr, arr[0], idx, Number.MIN_VALUE, Number.MAX_VALUE);
};

const preOrderToBstRecUtil = (arr, v, idx, min, max) => {
  if (idx.idx >= arr.length) return null;

  let root = null;

  if (v>min && v<max) {
    root = new Node(v);
    idx.idx += 1;

    if (idx.idx < arr.length) {
      root.left = preOrderToBstRecUtil(arr, arr[idx.idx], idx, min, v)
      root.right = preOrderToBstRecUtil(arr, arr[idx.idx], idx, v, max);
    }
  }

  return root;
};


const preOrderToBstItr = (arr) => {
  const s = [];
  const root = new Node(arr[0]);
  s.push(root);

  for (let i=1; i<arr.length; i++) {
    let temp = null;

  //  console.log(arr[i],' > ', s[s.length-1].v);
    
    while(s.length && arr[i] > s[s.length-1].v) {
      temp = s.pop();

      // console.log('popping', temp)
      // console.log(s.map((e) => e.v))
    }
    if (!temp) {
      temp = s[s.length-1]
      temp.left = new Node(arr[i]);
      s.push(temp.left);
    } else {
      temp.right = new Node(arr[i])
      s.push(temp.right)
    }
  }
  return root
};


const arr = [10,5,1,7,40,50];
// preOrderToBstItr(arr)
console.log(preOrderToBstRec(arr))


