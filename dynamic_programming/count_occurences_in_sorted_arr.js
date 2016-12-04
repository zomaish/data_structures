function ceil(arr, l, r, k) {
  let m;
  
  while(r-l>1) {
    m = l + (r-l)/2 | 0;
    
    if(arr[m]<=k)
      l=m;
    else
      r=m;
  }
  
  return l;
}

function floor(arr, l, r, k) {
  let m;
  
  while(r-l>1) {
    m = l + (r-l)/2 | 0;
    
    if(arr[m]>=k)
      r=m;
    else
      l=m;
  }
  
  return r;
}

function countOccur(arr, k) {
  const l = floor(arr, -1, arr.length, k);
  const r = ceil(arr, -1, arr.length, k);
  
  return (arr[l] === k && arr[r] === k) ? r-l+1 : 0;
}


console.log(countOccur([1,2,2,2,2,3,3,3,4,4,5,6,7,8], 2));