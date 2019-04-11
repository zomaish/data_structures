const longestNonDecreasingSeq = (seq) => {
  const dp = Array.apply(null, Array(seq.length)).map(Number.prototype.valueOf, 1);
  for (let j=1; j<seq.length; j++) {
    for (let i=0; i<j; i++) {
      if (seq[j] >=seq[i]) {
        dp[j] = Math.max(dp[i]+1, dp[j]);
      }
    }
  }

  console.log('dp', dp)
  return Math.max.apply(null, dp)
};





const seq = [-1,3,4,5,2,2,2,2,2,2]
console.log(longestNonDecreasingSeq(seq));