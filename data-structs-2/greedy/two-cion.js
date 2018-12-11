

const printCoinsUtil = (arr, n, idx, res) => {
  if (idx >= n) return;
  const val = arr[idx];

  if (idx%2 === 0) {
    res[0] += val;
  } else {
    res[1] += val
  }

  return printCoinsUtil(arr, n, idx+1, res);
}
const printCoins = (arr, n) => {
  const res1 = [0, 0];

  printCoinsUtil(arr, n, 0, res1)

  console.log(res1)
  return res1[0] > res1[1]
}



const arr1 = [8, 15, 3, 7];
const n = arr1.length; 
printCoins(arr1, n); 