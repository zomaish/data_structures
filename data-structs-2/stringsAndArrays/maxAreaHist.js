
const findMaxArea = (hist) => {
  let i = 0;
  let n = hist.length;
  const stack = [];
  let tempArea = 0;
  let maxArea = 0;

  while(i<n) {
    let len = stack.length;
    if (!len || hist[i]>=hist[stack[len-1]]) {
      stack.push(i++);
    } else {
      const topIdx = stack.pop();
      tempArea = hist[topIdx] * (!stack.length ? i : i-1-stack[stack.length-1]);
      maxArea = Math.max(tempArea, maxArea);
    }
  }

  while(stack.length) {
    const topIdx = stack.pop();
      tempArea = hist[topIdx] * (!stack.length ? i : i-1-stack[stack.length-1]);
      maxArea = Math.max(tempArea, maxArea);
  }

  return maxArea;

};

// const hist = [6,3,4,2,4,5,5,5,5,6,7,3];
const hist = [1,8,6,2,5,4,8,3,7];
console.log(findMaxArea(hist));