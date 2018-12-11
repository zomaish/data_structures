
const calcMaxRev = (arr, n) => {

  if (n === 0) return 0;

  let s = Number.MIN_VALUE;

  for (let i=0; i<n; i++) {
    s = Math.max(s, arr[i] + calcMaxRev(arr, n-i-1))
  }

  return s
};

const arr = [1, 5, 8, 9, 10, 17, 17, 20];
console.log(calcMaxRev(arr, arr.length, 0));

const calcMaxRevDP = (arr) => {
 
  const n = arr.length;
  const dp = new Array(n+1);

  dp[0] = 0;

  for (let i=1; i<=n; i++) {
    let s = Number.MIN_VALUE;

    for (let j=0; j<i; j++) {
      s = Math.max(s, arr[j] + dp[i-j-1]);
      dp[i] = s
    }
  }

  return dp[n];
}

console.log(calcMaxRevDP(arr));
