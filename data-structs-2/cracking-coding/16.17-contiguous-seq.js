


//solved using kadanes algorythm
const longestContiguousSeq = (arr) => {

  let max = arr[0];
  let tempSum = arr[0];
  const res = [0, 0]
  let left = 0;

  for (let i=1; i<arr.length; i++) {
    tempSum += arr[i];
    if (tempSum > max) {
      res[0] = left;
      res[1] = i;
      max = tempSum;
    } else {
      left = i;
      tempSum = arr[i];
    }
  }


  return res

};

const arr = [2, -8, 3, 5, -2, 4, -10, 5, -1, 5, -5];


console.log(longestContiguousSeq(arr));