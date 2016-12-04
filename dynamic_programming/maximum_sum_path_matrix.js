
function longestPathForCell(arr, i, j, dp) {
  
  //console.log(arr, i, j, dp);
  const n = arr.length;
  if (i<0 || j<0 || i>=n || j>=n) return 0;
  
  // If this subproblem is already solved
  if (dp[i][j] != -1)
    return dp[i][j];

  //i, j+1
  if(j<n-1 && (arr[i][(j+1)] - arr[i][j]) === 1)
    return dp[i][j] = 1 + longestPathForCell(arr, i, j+1, dp);

  //i, j-1
  if(j>0 && (arr[i][(j-1)] - arr[i][j]) === 1)
    return dp[i][j] = 1 + longestPathForCell(arr, i, j-1, dp);
  
    //i+1, j
  if(i<n-1 && (arr[(i+1)][j] - arr[i][j]) === 1)
    return dp[i][j] = 1 + longestPathForCell(arr, i+1, j, dp);
  
    //i-1, j
  if(i>0 && (arr[(i-1)][j] - arr[i][j]) === 1){
    return dp[i][j] = 1 + longestPathForCell(arr, i-1, j, dp);
  }
  
   return dp[i][j] = 1;
}


function longestPath(arr) {
  const n = arr.length;
  let dp = Array.apply(null, Array(n)).map(() => {
    return Array.apply(null, Array(n)).map(Number.prototype.valueOf, -1);
  });
  
  let result = 1;
  
  for (let i=0; i<n; i++)
    for (let j=0; j<n; j++) {
      if (dp[i][i] == -1)
        longestPathForCell(arr, i, j, dp);
        result = Math.max(result, dp[i][j])
    }
  
  return result
}

const a0 = [1, 2, 9];
const a1 = [5, 3, 8];
const a2 = [4, 6, 7];

const arr = new Array(3);
arr[0] = a0;
arr[1] = a1;
arr[2] = a2;

console.log(longestPath(arr));


      
