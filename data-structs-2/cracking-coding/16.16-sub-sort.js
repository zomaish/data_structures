const findBreakingIndex = (arr) => {
  for(let i=1; i<arr.length; i++) {
    if (arr[i] < arr[i-1]) return i;
  }

  return -1;
}


const findLeftIndex = (arr, l, r, brkngIdx) => {
  if (l>r) return -1;
  const e = arr[brkngIdx];

  let m = (l+r)/2 | 0;
  if (arr[m] <= e) {
    return findLeftIndex(arr, m+1, r, brkngIdx)
  } else {
    if (m === 0) return 0;
    if (arr[m-1] > e) return findLeftIndex(arr, l, m-1, brkngIdx);

    return m;
  }
}


const findRightIndex = (arr, brkngIdx) => {
  const lastIdx = arr.length-1
  const idx = brkngIdx === 0 ? 0 : brkngIdx-1;

  const e = arr[idx];

  
  for (let i=lastIdx; i>=1; i--) {
    if (arr[i] < e) return i;
  }

  return -1
};

const subSort = (arr) => {
  if (arr.length === 1) return [];

  const breakingIdx = findBreakingIndex(arr);

  console.log(breakingIdx);
  if (breakingIdx >= 0 && breakingIdx < arr.length) {
    const leftIdx = findLeftIndex(arr, 0, breakingIdx, breakingIdx);
    const rightIdx = findRightIndex(arr, breakingIdx);
    return [leftIdx, rightIdx];
  }

  return [];
};

const arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];

console.log(subSort(arr));