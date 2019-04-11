const magicIndex = (arr, l, r) => {
  if (l<=r) {

    const m = parseInt((r+l+1)/2);

    if (arr[m] > m || (m>0 && arr[m] === m && arr[m-1] === m-1)) {
      return magicIndex(arr, l, m-1);
    } else if (arr[m] < m) {
      return magicIndex(arr, m+1, r);
    } else {
      return m
    }
  }

  return -1;
}


const arr = [1,4,5,6,7,9,1000,1111];

console.log(magicIndex(arr, 0, arr.length-1))