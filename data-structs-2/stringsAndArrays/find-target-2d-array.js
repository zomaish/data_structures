const searchHorizontally = (mtrx, start, t) => {
  let lo = start
  let high = mtrx.length;

  while(lo<=high) {
    let m = parseInt((high+lo)/2);
    if (mtrx[start][m] === t) {
      return true;
    } else if (mtrx[start][m] > t) {
        high = m-1;
    } else {
      lo = m+1;
    }
  }
  return false;
};

const searchVertically = (mtrx, start, t) => {
  let lo = start;
  let high = mtrx[0].length;

  while(lo<=high) {
    let mid = parseInt((lo+high)/2);

    if (mtrx[mid][start] === t) {
      return true;
    } else if (mtrx[mid][start] > t) {
      high = mid-1
    } else {
      lo = mid+1;
    }
  }
  return false;
};

const findTargetIn = (mtrx, t) => {
  const shorterDimension = Math.min(mtrx.length, mtrx[0].length);
  for (let i=0; i<shorterDimension; i++) {
    const foundHorizontally = searchHorizontally(mtrx, i, t);
    const foundVertically = searchVertically(mtrx, i, t);
    
    if (foundHorizontally || foundVertically) return true
  }

  return false;
}

const mtrx = [
  [1,  7,  12, 19, 25],
  [2,  8,  14, 20, 26],
  [3,  9,  15, 21, 27],
  [5, 10, 16, 22, 28],
  [6, 11, 17, 23, 30]
];

findTargetIn(mtrx, 5);
