/**
he worst case time complexity of this method is O(n2), but it works in O(n) on average.
**/

function kthSmallest(arr, l, h, k) {

  console.log(l, h, k)
  if(k>0 && k<=h-l+1) {
    
    const pos = partition(arr, l, h);
    if (pos-l === k-1) return arr[pos];
    
    if (pos-l > k-1)
      return kthSmallest(arr, l, pos-1, k)
    
    return kthSmallest(arr, pos + 1, h, k-1-pos+l)
  }

  return -1;
}

function partition(arr, l, h) {
  
  const k = arr[h];
  
  let i = l-1; 
  let temp;
  
  for(let j=l; j<=h; j++) {
    if (arr[j] <= k) {
      ++i;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  
  return i;
}
const arr = [2,5,13,26,8,15,16,17,6,14,18,3,24,25,1,21,2,4,7,11,12,19,20];
console.log(">>>>", kthSmallest(arr, 0, arr.length-1, arr.length-1));
  