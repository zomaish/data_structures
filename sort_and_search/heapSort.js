//Time Complexity O(n log n)


function heapSort(arr) {
  const n = arr.length;
  const m = (n/2 -1) | 0;
  
  for (let i=m; i>=0; i--) 
    maxHeapify(arr, n, i);
  
  for (let j=n-1; j>=0; j--) {
    let swap = arr[0];
    arr[0] = arr[j];
    arr[j] = swap;
    
    maxHeapify(arr, j, 0)
  }
  
  return arr
}


function maxHeapify(arr, n, i) {
  let p = i;
  const l = 2*i + 1;
  const r = 2*i + 2;
  let swap;
  
  if (l<n && arr[l]>arr[p])
    p = l;
  
  if (r<n && arr[r]>arr[p])
    p = r;
  
  if (p !== i) {
    swap = arr[i];
    arr[i] = arr[p];
    arr[p] = swap;
    
    maxHeapify(arr, n, p);
  }
}

console.log(heapSort([3, 5, 9, 6, 8, 20, 10, 12, 18, 9]));





