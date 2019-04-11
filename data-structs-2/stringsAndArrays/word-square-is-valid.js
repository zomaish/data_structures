const isValidWordSqr = (mtrx) => {

  if (!mtrx.length) return false;
  const len = mtrx[0].length;

  if (mtrx.some((e) => e.length !== len)) {
    return false;
  }

  for (let r=0; r<mtrx.length; r++) {
    for (let c=0; c<len; c++) {
      if (mtrx[r][c] !== mtrx[c][r]) {
        return false;
      }
    }
  }

  return true
};

const words = [
  "abcd",
  "bnrt",
  "crmy",
  "dtye"
];


console.log(isValidWordSqr(words))
