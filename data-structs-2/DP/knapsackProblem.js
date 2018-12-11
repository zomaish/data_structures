
const val = [60, 100, 120];
const wt = [10, 20, 30];
const  W = 50;

const knapSackRec = (w, n) => {
  // console.log(w)
  if (w <=0 || n<0) return 0;

  // if (wt[n] > w)
  //   return knapSackRec(w, n-1);

  // return Math.max(
  //   val[n] + knapSackRec(w - wt[n], n-1),
  //   knapSackRec(w, n-1)
  // );


  let s = Number.MIN_VALUE;
  for (let i=0; i<=n; i++) {
    s = Math.max(
        val[i] + knapSackRec(w-wt[i], n-1),
        knapSackRec(w, n-1)
    );
  }

  return s;
}

// console.log(knapSackRec(W, val.length -1));



const knapSackDP = (W) => {
  const n = val.length;
  const dp = Array.apply(null, Array(n+1)).map(() => Array.apply(null, Array(n+1)));

  for (let i=0; i<=n; i++) {
    for (let w=0; w<=W; w++) {

      if (i===0 || w === 0) {
        dp[i][w] = 0;
      } else if (w >= wt[i-1]) {
        dp[i][w] = Math.max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w])
      } else {
        dp[i][w] = dp[i-1][w]
      }
    }
  }

  console.log(dp)
  return dp[n][W];

}

console.log(knapSackDP(W, val.length -1));
