const findSum = (arr, s) => {
  let sumSoFar = 0;
  let start = 0;
  for (let i=0; i<arr.length; i++) {
    sumSoFar +=arr[i];

    while (sumSoFar > s && start < i) {
      sumSoFar -= arr[start++];
    }
    if (sumSoFar === s) return [start, i];
  }
  return [];
}


const findSumRec = (arr, i, j, currSum, target) => {

  console.log('currSum', currSum, 'i', i, 'j', j)
  if (currSum === target) {
    if (i===j) return [];
    return [i, j-1];
  }
  if (j === arr.length) return [];

  if (currSum > target) {
    if (i === j) {
      return findSumRec(arr, i, j+1, currSum+arr[j], target);
    } else {
      return findSumRec(arr, i+1, j, currSum-arr[i], target);
    }
  }
  else if (currSum < target) return findSumRec(arr, i, j+1, currSum+arr[j], target)
}



// console.log(findSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13))

console.log(findSumRec([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 1, 1, 28))
