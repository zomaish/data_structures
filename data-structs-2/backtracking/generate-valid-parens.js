const generateUtil = (res, l, r, idx) => {
  if (l<0 || r<l) return;

  if (l===0 && r===0) {
      console.log(res.join(''))
      return;
  }

  res[idx] = '(';
  generateUtil(res, l-1, r, idx+1)

  res[idx] = ')';
  generateUtil(res, l, r-1, idx+1)
}
const generateAllValidParens = (n) => {
  const arr = [];
  generateUtil(arr, n, n, 0)
}

generateAllValidParens(3);