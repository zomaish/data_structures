

const findLargestHistogram = (arr) => {
  let i = 0;
  const n = arr.length;
  const stack = [];
  let temp = 0;
  let res = 0;

  while (i < n) {
    const len = stack.length;
    
    if (len === 0 || arr[stack[len-1]] <= arr[i]) {
      stack.push(i++);
    } else {
      const topIdx = stack.pop();
      temp = arr[topIdx] * (!stack.length ? i : i-1-stack[length-1]);
      res = Math.max(res, temp);
    }
  }

  while(stack.length) {
    const topIdx = stack.pop();
    temp = arr[topIdx] * (!stack.length ? i : i-1-stack[stack.length-1]);
    res = Math.max(res, temp);
  }

  return res;
}


const arr = [6, 3, 5, 4, 5, 3, 6];

findLargestHistogram(arr)