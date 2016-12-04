//http://www.geeksforgeeks.org/counting-inversions/

/**
Suppose we know the number of inversions in the left half and right half of the array 
(let be inv1 and inv2), what kinds of inversions are not accounted for in Inv1 + Inv2? 
The answer is – the inversions we have to count during the merge step. Therefore, to get number of inversions, 
we need to add number of inversions in left subarray, right subarray and merge().

In merge process, let i is used for indexing left sub-array and j for right sub-array. 
At any step in merge(), if a[i] is greater than a[j], then there are (mid – i) inversions. 
because left and right subarrays are sorted, so all the remaining elements in left-subarray 
(a[i+1], a[i+2] … a[mid]) will be greater than a[j]
**/

function mergeSort(arr, l, r) {
  const temp = new Array(r);
  const ic = {val: 0};
   _mergeSort(arr, temp, ic, l, r-1)
  return ic.val;
}

function _mergeSort(arr, temp, ic,  l, r) {

 if (r>l) {
   const m = (r+l)/2 |0;

   _mergeSort(arr, temp,ic, l, m);
   _mergeSort(arr, temp, ic, m+1, r);

   return merge(arr, temp, ic, l, m+1, r);
  }
}

function merge(arr, temp, ic, l, m, r) {
 let i=l, j=m, k=l;

 console.log(l, m, r)
 while(i<= (m-1) && j<=r) {
   if (arr[i] <= arr[j])
     temp[k++] = arr[i++];
   else {
     temp[k++] = arr[j++];
     ic.val = ic.val + (m - i); //count inversions that happen between first half and second half 
   }
 }

 while(i<= (m-1)) {
   temp[k++] = arr[i++];
 }

 while(j<=r) {
   temp[k++] = arr[j++];
 }

 for (i=l; i <= r; i++)
    arr[i] = temp[i];

 //console.log(temp)
 return temp;
}

console.log(mergeSort([1, 20, 6, 4, 5], 0, 5));