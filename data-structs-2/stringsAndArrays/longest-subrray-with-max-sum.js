

const findMaxSum = (arr) => {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let maxLen = 0;
  const indecies = [];
  let s = 0;
  let e = 0;
  for (let i=0; i<arr.length; i++) {
    currSum += arr[i];

    if (currSum < 0) {
      currSum = 0;
      s = e+1;
    }

    if (currSum >= maxSum) {
      maxSum = currSum
      maxLen = Math.max(maxLen, e-s)
      indecies[0] = s;
      indecies[1] = e;
    }
    e++;
  }
  return maxSum;
}

const arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(findMaxSumSubArray(arr))