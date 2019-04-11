


const maxSlidingWindow = (arr, k) => {
  if (k === 1 || k === 0 || !arr.length) return arr;

  const len = arr.length;
  const res = new Array(len-k);

  let j=0;
  const q = [];

  for (let i=0; i<k; i++) {
    while (q.length && arr[i] > arr[q[q.length-1]]) q.pop();
    q.push(i)
  }
  
  res[j++] = arr[q[0]];

  for (let m=k; m<arr.length; m++) {
    while (q[0] <= (m-k)) q.shift();

    while(q.length && arr[q[q.length-1]] <arr[m]) q.pop();
    q.push(m)

    res[j++] = arr[q[0]];
  }

  return res;
};


// const array = [1,3,-1,-3,5,3,6,7], k = 3;

const array = [9,6,11,8,10,5,14,13,93,14], k =4

// const array = [7,2,4], k = 2

// const array = [1,3,1,2,0,5], k = 3

console.log(maxSlidingWindow(array, k))

