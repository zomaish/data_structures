const sumOf = (arr) => {
  if (arr.length === 0) return 0;
  const res = arr.reduce((acc, e) => acc +=e)
  return res;
}
 
const printAllNumbersMakeSumUtil = (i, sum, temp, res) => {
  if (i >= sum) return;

  const s = sumOf(temp);
  if (s>sum) return;

  if (s === sum) {
    res.push([...temp]);
    return;
  }

  for (let j=i; j<=sum; j++) {
    temp.push(j);
    printAllNumbersMakeSumUtil(j, sum, temp, res);
    temp.pop();
  }
}

const printAllNumbersMakeSum = (sum) => {
  if (sum === 0) return [0];
  const res = [[0, sum]];

  printAllNumbersMakeSumUtil(1, sum, [], res);

  console.log(res);
};


printAllNumbersMakeSum(8);
