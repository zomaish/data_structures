const editDistance = (s1, s2, n, m) => {
  if (n === 0) return m;
  if (m === 0) return n;

  if (s1[n] === s2[m]) return editDistance(s1, s2, n-1, m-1);

  return 1 + Math.min.apply(null, [
    editDistance(s1, s2, n-1, m-1),
    editDistance(s1, s2, n-1, m),
    editDistance(s1, s2, n, m-1)
  ]);
};

const s1 = "sunday"; 
const s2 = "saturday";

//console.log(editDistance(s1, s2, s1.length-1, s2.length-1));

const editDistanceDP = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;

  const dp = Array.apply(null, Array(n+1)).map(() => {
    return Array.apply(null, Array(m+1))
  });

  for (let i=0; i<=n; i++) {
    for (let j=0; j<=m; j++) {
      if (i === 0) 
        dp[i][j] = j;
      else if (j === 0)
        dp[i][j] = i;
      else if(s1[i-1] === s2[j-1]) {
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = 1 + Math.min.apply(null, [
          dp[i-1][j-1],
          dp[i-1][j],
          dp[i][j-1]
        ]);
      }
    }
  }

  console.log(dp )
  return dp[n][m]
}

console.log(editDistanceDP(s1, s2))