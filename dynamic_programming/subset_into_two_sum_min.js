
function findMinSumDiff(arr) {

  const n = arr.length-1;
  let totalSum = 0;
  
  for(let i = 0; i <= n; i++)
    totalSum += arr[i];
  console.log("totalSum", totalSum)

  return findMinSumDiffRec(arr, n, totalSum, 0);
}

function findMinSumDiffRec(arr, n, totalSum, currSum) {
  
  if (n === 0) 
    return Math.abs((totalSum-currSum) - currSum);
  
  const x = findMinSumDiffRec(arr, n-1, totalSum, (currSum + arr[n]));
  const y = findMinSumDiffRec(arr, n-1, totalSum, currSum);

  console.log(x, y)
  return Math.min(x, y)
}



//http://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/

function differenceSumMin(arr) {
  let totalSum = 0;
  
  for (let i=0; i<arr.length; i++)
    totalSum += arr[i];
  
  console.log(totalSum)
  
  return findMidDiff(arr, arr.length, totalSum, 0)
}

const arr = [3, 1, 4, 2, 2, 1];
console.log("res", differenceSumMin(arr))


function findMinSumDiff(arr, n) {
  let sum = 0;
  
  for(let i=0; i<n; i++)
    sum += arr[i];
  
  const dp = Array.apply(null, Array(n+1)).map(() => {
    return Array.apply(null, Array(sum+1)).map(Boolean.prototype.valueOf, false);
  });
  
  for (let i=n; i>=0; i--)
    dp[i][0] = true;
  
  for (let row = 1; row <=n; row++)
    for (let col = 1; col<=sum; col++) {
      dp[row][col] = dp[row-1][col];
      if (arr[row-1] <= col)
        dp[row][col] = dp[row-1][col] || dp[row-1][col-arr[row-1]];
    }

  for (let j=sum/2|0; j>=0; j--) {
    if (dp[n][j] === true) {
      return sum -2*j;
    }
  }
}

const arr = [3, 4, 8, 11];
console.log(">>>", findMinSumDiff(arr, arr.length));
