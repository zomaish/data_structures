const arr = [1,2,4,7,10,11,7,7,7,10,10,10,11,11,16,18,19];

const INVALID_INDEX = -1;

const findStartingDecrimentIndex = (arr) => {
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < arr[i-1]) return i-1;
  }
  return i;
}

const findStartingIncrementingIndexAfterDec = (arr, left) => {
  for (let i = arr.length-1; i>left; i--) {
    if (arr[i] < arr[i-1] || arr[i] <arr[left]) return i;
  }
  return arr.length
}

const getleftIdx = (arr, left, lIdx) => {
  for (let i=left; i>=0; i--) {
    if (arr[i] <= arr[lIdx]) return i;
  }

  return 0;
};

const getRightIdx = (arr, right, rIdx) => {
  for (let i=arr.length-1; i>=right; i--) {
    if (arr[i]<arr[rIdx]) return i
  }

  return arr.length
};

const findSmallestRange = (arr) => {
  const left = findStartingDecrimentIndex(arr, 0, arr.length-1);
  if (left === arr.length) return INVALID_INDEX;

  const right = findStartingIncrementingIndexAfterDec(arr, left, arr.length-1);


  console.log('left', left, 'right', right)
  let lIdx = left;
  let rIdx = right;
  
  for (let i=left+1; i<right; i++) {
    if (arr[i] >= arr[rIdx]) rIdx = i;
    if (arr[i] < arr[lIdx]) lIdx = i;
  }

  console.log('lIdx', lIdx, 'rIdx', rIdx)
  const l = getleftIdx(arr,left, lIdx)
  const r = getRightIdx(arr, right, rIdx);

  return [l, r]
}

console.log(findSmallestRange(arr))