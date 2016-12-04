//[6, 2, 5, 4, 5, 1, 6]

function getLargestRect(hist) {
  if (!hist || !hist.length) {
    return 0;
  }

  let i = 0;
  let s = [];
  let top;
  let largestHeight;
  let maxArea = 0;
  let leftBoundry = 0;

  while (i < hist.length) {
    if (!s.length || hist[s[s.length-1]] <= hist[i]) {
      s.push(i++);
    } else {
      top = s.pop();
      leftBoundry =  hist[top]*(!s.length ? i : i - (s[s.length-1]) -1);
      maxArea = Math.max(maxArea, leftBoundry);
    }
  }

  while(s.length) {
    top = s.pop();

    leftBoundry =  hist[top]*(!s.length ? i : i-s[s.length-1] -1);
    maxArea = Math.max(maxArea, leftBoundry);
  }

  return maxArea;

}

console.log(getLargestRect([6, 2, 5, 4, 5, 1, 6]))