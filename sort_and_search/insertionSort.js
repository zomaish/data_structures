function insertionSort(arr) {
  if (!arr || !arr.length) return arr;

  for (let i=1; i<arr.length; i++) {
    let j = i-1;
    let k = arr[i];
    
    while(j>=0 && arr[j]>k) {
      arr[j+1] = arr[j];
      --j;
    }
    arr[j+1] = k;
  }
  return arr;
} 

console.log(insertionSort([8,2,5,4,3,7,6,1]))