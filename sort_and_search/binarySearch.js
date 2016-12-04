

function bsearch(arr, t) {
  let l = 0, r = arr.length -1, m;
  
  while(l<=r) {
    m = l + (r-l)/2 | 0;
    
    if (arr[m] === t) return m;
    
    if (arr[m] < t)
      l = m+1;
    else
      r = m-1;
  }
  
  return -1
}




console.log(bsearch([1,2,3,4,5,6,7,8,9], 4))