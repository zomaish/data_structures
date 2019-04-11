const hasAllOnes = (mtrx, r, c, s) => {
  for (let i=r; i<r+s; i++) {
    for (let j=c; j<c+s; j++) {
      if (mtrx[i][j] === 0) return false
    }
  }
  return true;
}

const isBlackSqr = (mtrx, size) => {
  for (let i=0; i<=mtrx.length-size; i++) {
    for (let j=0; j<=mtrx.length-size; j++) {
      if (hasAllOnes(mtrx, i, j, size)) {
        return true
      }
    }
  }

  return false;
};

const maxBlackSquare = (mtrx) => {
  for (let i=mtrx.length; i>=0; i--) {
    if (isBlackSqr(mtrx, i)) return i
  }

  return -1;
};

const allneighborsAreOnes = (mtrx, r, c) => mtrx[r-1][c-1] === 1 && mtrx[r-1][c] === 1 && mtrx[r][c-1] === 1;

const maxBlackSub = (mtrx) => {

  const rows = mtrx.length;
  const cols = mtrx[0].length;
  let mxSize = 0;

  const dp = Array.apply(null, Array(rows)).map(() => Array.apply(null, Array(cols)));

  for (let i=0; i<rows; i++) dp[i][0] = mtrx[i][0]
  for (let i=0; i<cols; i++) dp[0][i] = mtrx[0][i];

  for (let r=1; r<rows; r++) {
    for (let c=1; c<cols; c++) {
      if (mtrx[r][c] === 1 && allneighborsAreOnes(mtrx, r, c)) {
        dp[r][c] = dp[r-1][c-1] + 1;
        mxSize = Math.max(dp[r][c], mxSize);
      } else {
        dp[r][c] = mtrx[r][c];
      }
    }
  }

  return mxSize;
}


const mtrx = [
  [0, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
];

console.log(maxBlackSub(mtrx));

const mtrx = [
  [0, 1, 0],
  [1, 1, 0],
  [1, 1, 0]
];

console.log('sss', maxBlackSquare(mtrx));
