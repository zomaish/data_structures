
function isSubset(arr, n, sum) {
  if (sum === 0) return true;
  
  if (n===0 && sum !== 0) return false;
  
  if (arr[n-1] > sum)
    return isSunbset(arr, n-1, sum);
  
  return isSubset(arr, n-1, sum) || isSubset(arr, n-1, sum-arr[n-1])
}


function isSubsetDP(arr, n, sum) {
  const dp = Array.apply(null, Array(sum+1)).map(() => {
    return Array.apply(null, Array(n+1)).map(Boolean.prototype.valueOf, false);
  });

  for (let k = 0; k <= n; k++)
    dp[0][k] = true;
  

  for (let i=1; i<=sum; i++)
    for (let j=1; j<=n; j++) {
      
      dp[i][j] = dp[i][j-1];
      
      if (i>=arr[j-1]) {
        dp[i][j] = dp[i][j-1] || dp[i-arr[j-1]][j-1]
      }
    }
  
  return dp[sum][n]
}


const set = [3, 34, 4, 12, 5, 2];
const sum = 9;

  if (isSubsetSum(set, set.length, sum) == true)
     console.log("Found a subset with given sum");
  else
    console.log("No subset with given sum");

  if (isSubsetSumDP(set, set.length, sum) == true)
     console.log("Found a subset with given sum");
  else
    console.log("No subset with given sum");

