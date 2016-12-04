/**Longest Increasing Subsequence Size (N log N)
end element of smaller list is smaller than end elements of larger lists
**/

function floorIndex(arr, l, r, k) {
  let m;
  
  while(r-l > 1) {
    m = l + (r-l)/2 |0;
    if (arr[m]>=k)
      r=m;
    else
      l=m;
  }
  
  return r;
}

function longestSubSec(arr, n) {
  const lis = new Array(n);
  lis[0] = arr[0];
  let len = 1;
  for (let i=1; i<n; i++) {
    if (arr[i] < lis[0])
      lis[0] = arr[i];
    else if(lis[len-1] < arr[i])
      lis[len++] = arr[i];
    else
      lis[floorIndex(lis, 0, len-1, arr[i])] = arr[i];
    
    console.log("lis", lis)
  }
  
  return len;
}


function LISDP(arr) {
  const lis =  Array.apply(null, Array(arr.length)).map(Number.prototype.valueOf, 0);
  lis[0] = 1;
  
  for (let i=1; i<arr.length; i++)
    for (let j=0; j<i; j++) 
      if(arr[i]>arr[j] && lis[i] < lis[j] +1)
        lis[i] = lis[j]+1;
  
  let max = Number.MIN_VALUE;
  
  for (let i=0; i<lis.length; i++)
    if (max < lis[i])
      max = lis[i]
  
  console.log("LIS is", max);
}

const arr = [2, 5, 3, 7, 11, 8, 10, 13, 6];
console.log(LISDP(arr, arr.length));


//L[i] = Math.max(L[j] | j<i, D[j]<D[i]) + D[i]