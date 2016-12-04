
function maxCoinDP(arr, n) {
  const dp = Array.apply(null, Array(n)).map(() => {
    return Array.apply(null, Array(n));
  });
  
  let x, y, z;
  
  for (let g = 0; g<n; g++) {
    for (let i=0, j=g; j<n; i++, j++) {
      x = ((i+2) <=j) ? dp[i+2][j] : 0;
      y = ((i+1) <=[j-1]) ? dp[i+1][j-1] : 0;
      z = (i<=(j-2)) ? dp[i][j-2] : 0;

      dp[i][j] = Math.max((arr[i] + Math.min(x,y)), (arr[j] + Math.min(y, z)))
    }
  }
  
  return dp[0][n-1];
}

function maxCoin( coin, start, end ) {
    if (start > end)
        return 0

    let a = coin[start] + Math.min(maxCoin(coin, start+2, end), maxCoin(coin, start+1, end-1))
    let b = coin[end] + Math.min(maxCoin(coin, start+1,end-1), maxCoin(coin, start, end-2))

    return Math.max(a,b)
}
console.log(maxCoin([8, 15, 3, 7], 0, 3))
console.log(maxCoinDP([8, 15, 3, 7], 4))