

function knapSack(arr, wt, w, n) {
  
  if (w === 0 || n === 0) return 0;
  
  if (v[n-1] > w)
    return knapSack(arr, wt, w, n-1);
  
  return Math.max((arr[n-1] + knapSack(arr, wt, w-wt[n-1], n-1)), knapSack(arr, wt, w, n-1))
}


function knapSackDP(arr, wt, w, n) {
  const dp = Array.apply(null, Array(w+1)).map(() => {
            return Array.apply(null, Array(n+1));
          });
  
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= w; j++) {
        if (i==0 || j==0)
      dp[i][j] = 0;
         else if (wt[i-1] > j)
           dp[i][j] = dp[i-1][j];
         else
           dp[i][j] = Math.max(arr[i-1] + dp[i-1][j-wt[i-1]],  dp[i-1][j]);
       }
   }

    return dp[n][w];
  
}

const arr = [1, 3, 4, 10];
const wt = [1, 2, 3, 6];
const w = 6;

console.log(knapSackDP(arr, wt, w, arr.length));
console.log(knapSack(arr, v, w, arr.length));

