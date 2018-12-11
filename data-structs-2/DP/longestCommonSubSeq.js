


const longestCommonSubSeq = (s1, s2, i, j) => {
  if (i<=0 || j<=0) return 0;
  if (s1[i] === s2[j]) return 1 + longestCommonSubSeq(s1, s2, i-1, j-1);
  return Math.max(longestCommonSubSeq(s1, s2, i-1, j), longestCommonSubSeq(s1, s2, i, j-1));
};

const s1 = "AGGTAB";
const s2 = "GXTXAYB";

console.log(longestCommonSubSeq(s1, s2, s1.length, s2.length));

const lcssDP = (s1, s2) => {

  const dp = Array.apply(null, Array(s1.length+1)).map(() => {
    return Array.apply(null, Array(s2.length+1)).map(Number.prototype.valueOf, 0)
  });

  for (let i=1; i<=s1.length; i++) {
    for (let j=1; j<=s2.length; j++) {

     if (s1[i-1] === s2[j-1]) {
        dp[i][j] = 1+dp[i-1][j-1];
      } else {
        dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
      }
    }
  }

  console.log(dp)
  return dp[s1.length][s2.length]
};


console.log(lcssDP(s1, s2));
