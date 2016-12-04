/**
  Time Complexity O(n Logn) on average
                  O(n^2) Worst case
  Space Complexity O(1)  //In-place

**/


function partition(arr, low, high) {
  const pivot = arr[high];
  let temp;
  let i = low - 1;

  for(let j=low; j<=high; j++) {
    
    if (arr[j] <= pivot) {
      i++;
      
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[i+1]
  arr[i+1] = arr[high];
  arr[high] = temp;

  return i;
}


function quickSort(arr, low, high) {
  if (low<high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi-1);
    quickSort(arr, pi+1, high);
  }
  return arr
}


const arr = [10, 7, 8, 9, 1, 5,100, -1];
console.log(quickSort(arr, 0, arr.length-1));
