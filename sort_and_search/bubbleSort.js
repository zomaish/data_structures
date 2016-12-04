function bubbleSort(arr) {
  
  if (!arr || !arr.length) return;

  const l = arr.length;
  let swapped = true;
  let temp;

  while(swapped) {
    swapped = false;
    for(let i=1; i<l; i++) {
      if (arr[i] < arr[i-1]) {
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
        swapped = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8,2,5,4,3,7,6,1]))