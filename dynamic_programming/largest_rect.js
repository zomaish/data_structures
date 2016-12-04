//[6, 2, 5, 4, 5, 1, 6]

function getLargestRect(hist) {
  if (!hist.length) return;
  let s = [];
  let maxArea = 0;
  let i = 0;
  let top;
  let leftB = 0;
  
  while(i<hist.length) {
    if (s.length === 0 || hist[s[s.length-1]] <= hist[i]) {
      s.push(i++);
    } else {
      top = s.pop();
      leftB = hist[top] * (!s.length ? i : i-1 - s[s.length-1])
      maxArea = Math.max(maxArea, leftB);
    }
  }
  
  while(s.length) {
    top = s.pop();
    leftB = hist[top]*(!s.length ? i: i-1-s[s.length-1])
    maxArea = Math.max(maxArea, leftB);
  }
  
  console.log(maxArea);
  
}

getLargestRect([6, 2, 5, 4, 5, 1, 6])