

function findKthSmallest(a, b, k) {
  let ks;
  
  const aL = a.length;
  const bL = b.length;
  
  if ((aL + bL) < k) return -1;
  if (!aL) return b[k-1];
  if (!bL) return a[k-1];

  while (k && a.length && b.length) {
    if(a[0] < b[0])
      ks = a.shift();
    else
      ks = b.shift();

    --k;
  }
  
  if (k>0)
    return a.length ? a[k-1] : b[k-1]
  
  return ks;
}

const b = [1,2,3,4];
const a = [1,7,8];

console.log(findKthSmallest(a,b,4));