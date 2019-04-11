
/**
 * https://leetcode.com/problems/next-permutation/
 * To find the next permutation we need to find the strictly decreasing sequence since that is the seq that
 * exauhsted its options
 * the number before strictly decreasing sequence is the number to change
 * find the next greater value in the strictly decreasing sequence
 * swap
 * reverse strictly decreasing seq and return
 */


const getStrictlyDecreasingSeqStart = (perm) => {
  let s = 0;
  for (let i=1; i<perm.length; i++) {
    if (perm[i] > perm[i-1]) {
      s = i;
    }
  }

  return s;
}

const getNextgreaterElement = (perm, i) => {
  const e = perm[i];

  let n = Number.MAX_SAFE_INTEGER;
  let idx = -1;
  for (let j=i+1; j<perm.length; j++) {
    if (perm[j] > e) {
      if (perm[j]-e < n) {
        n = perm[j]-e;
        idx = j
      }
    } 
  }

  return idx;
}

const swap = (str, i, j) => {
  if (i===j || i>=str.length || j>=str.length) return str;

  if (i>j) {
    return swap(str, j, i);
  }

  let left = str.substring(0, i) + str[j];
  let middle = str.substring(i+1, j) + str[i];
  let right = str.substring(j+1) || "";

  return left+middle + right;
}

const reverse = (str, l, r) => {
  const arr = str.split("");
  while(l<r) {
    const t = arr[l];
    arr[l++] = arr[r]
    arr[r--] = t;
  }

  return arr.join('');
}

const findNextPermutation = (perm) => {
  const i = getStrictlyDecreasingSeqStart(perm);
  console.log('i--', i)
  const next = getNextgreaterElement(perm, i-1);
  console.log('next --', next)
  perm = swap(perm, i-1, next);
  return reverse(perm, i, perm.length-1);
};

console.log(findNextPermutation("6215430"));
