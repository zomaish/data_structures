
const calcMaxOnes = (mtrx) => {
  const numRows = mtrx.length;
  const numCols = mtrx[0].length;
  const dp = Array.apply(null, Array(numRows)).map(() => Array.apply(null, Array(numCols)));

  for (let i=0; i<numRows; i++) {
    dp[i][0] = mtrx[i][0];
  }

  for (let j=1; j<numCols; j++) {
    dp[0][j] = mtrx[0][j];
  }

  let max = 0;
  for (let i=1; i<numRows; i++) {
    for (let j=1; j<numCols; j++) {

      if (mtrx[i][j] === 0){
        dp[i][j] = 0;
      } else {
        const min = Math.min.apply(null, [
          dp[i-1][j-1],
          dp[i][j-1],
          dp[i-1][j]
        ]);
        dp[i][j] = min+1;

        max = Math.max(max, dp[i][j]);
      }
    }
  }

  console.log(dp, max)

}



const mtrx = [
  [1, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1],
];

console.log(calcMaxOnes(mtrx));