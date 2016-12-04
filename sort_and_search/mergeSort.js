/**
  Time Complexity O(n logn)
  Space Complexity O(n)


Usage:
1- sort Linked list
2- count inversions in array
3- External sorting 
**/

function mergeSort(arr, l, r) {
  const temp = new Array(arr.length);
  return _mergeSort(arr, temp, l, r)
}

function _mergeSort(arr, temp, l, r) {
  if (r>l) {
    const m = (r+l)/2 |0;

    _mergeSort(arr, temp, l, m);
    _mergeSort(arr, temp, m+1, r);

    return merge(arr, temp, l, m+1, r);
  }
}

function merge(arr, temp, l, m, r) {
   let i=l, j=m, k=l;
  
   console.log(l, m, r)
   while(i<=(m-1) && j<=r) {
     temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
   }

   while(i<= (m-1)) {
     temp[k++] = arr[i++];
   }

   while(j<=r) {
     temp[k++] = arr[j++];
   }

   for (i=l; i <= r; i++)
    if (temp[i]!== null)
      arr[i] = temp[i];

   console.log(temp)
   return temp;
}


console.log(mergeSort([1, 5, 2, 7, 3, 9, 4, 6, 8, 1], 0, 9));


/** IterativeMerveSor
/**
 * Sorts an array in ascending natural order using
 * merge sort.
 * @param {Array} items The array to sort.
 * @return {Array} The sorted array.
 */
function mergeSortIterative(arr) {

  const l = arr.length;
  const split = new Array(l);
  
  for (let i=0; i<l; i++) {
    split[i] = [arr[i]];
  }
  
   for (let lim=l; lim > 1; lim = (lim+1) >> 1)){
        for (let j=0,k=0; k < lim; j++, k+=2){
          console.log(split, j, k, lim);
          split[j] = mergeIterative(split[k], split[k+1], []);
        }
     
    }
  return split[0];
}
function mergeIterative(a1, a2, arr) {
  let i=0, j=0, k=0, n1=a1.length, n2 = a2.length;

  while(i<n1 && j < n2)
    arr[k++] = a1[i] <= a2[j] ? a1[i++] : a2[j++];

  while(i < n1)
    arr[k++] = a1[i++];

  while(j < n2)
    arr[k++] = a2[j++];

  return arr;
}
console.log(mergeSortIterative([2,3,1,6,4,5]));