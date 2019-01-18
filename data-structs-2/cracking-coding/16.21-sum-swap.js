

const findPair = (a, b, i, j, diff) => {
  if (i>=a.length || j>=b.length) return false;
  const elDiff = a[i] - b[j];
  if (elDiff === diff) return [a[i], b[j]];
  if (elDiff > diff) return findPair(a, b, i, j+1, diff);
  return findPair(a, b, i+1, j, diff);
};

const findSwap = (a, b) => {
  if (!a.length || !b.length) throw new Exception('Invalid parameter passed to findSwap');

  let sumA = 0, sumB = 0;
  a.sort();
  b.sort();

  a.map((e) => sumA += e);
  b.map((e) => sumB += e);

  const diff = Math.max(sumA, sumB) - Math.min(sumA, sumB);

  if (diff === 0) return false;

  if (sumA > sumB) {
    return findPair(a, b, 0, 0, diff/2 | 0)
  }

  return findPair(b, a, 0, 0, diff/2 | 0)
};

const arr1 = [4,1,2,1,1,2];
const arr2 = [3,6,3,3];

console.log(findSwap(arr1, arr2));