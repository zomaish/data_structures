const find = (arr, k, l, r) => {
  
  if (l>r) return;
  
  const m = (r+l/2 | 0);

  if (arr[m] === k) return m;
  if (arr[m] > k) 
    return find(arr, k, l, m-1)
  else 
    return find(arr, k, m+1, r);
}



const arr = [1,2,3,4,5,6,7,8,9];

console.log(find(arr, 7, 0, arr.length-1))