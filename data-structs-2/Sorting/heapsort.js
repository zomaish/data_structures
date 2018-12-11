const swap = (arr, p, i) => {
  const temp = arr[i];
  arr[i] =  arr[p]
  arr[p] = temp
};

const heapSort = (arr) => {
  const n = arr.length;
  const m = n/2 -1 |0;

  //build max heap
  for (let i=0; i<m; i++) {
    maxHeapify(arr, n, i);
  }

  for (let i=n-1; i>=0; i--) {
    swap(arr, i, 0)
    maxHeapify(arr, i-1, 0)
  }
};

const maxHeapify = (arr, n,i) => {
  let p = i;
  let l = i*2 + 1 |0;
  let r = i*2 + 2 |0;

  if (l<n && arr[p] < arr[l]) p = l
  if (r<n && arr[p] < arr[r]) p = r

  if (p !== i) {
    swap(arr, p, i);
    maxHeapify(arr, n, p);
  }
};

const arr = [5, 12, 11, 13, 6, 7];


heapSort(arr)
console.log(arr)