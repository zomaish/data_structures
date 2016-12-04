
//Given an array of distinct elements, rearrange the elements of array in zig-zag fashion in O(n) time. 
//The converted array should be in form a < b > c < d > e < f.
//similar to bubble sort

function zigZag(arr) {

  const n = arr.length;
  let flag = true;
  let temp;
  
  for (let i=1;i<n; i++) {

    if (flag) {
      if (arr[i] < arr[i-1]) {
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    } else {
      if (arr[i] > arr[i-1]) {
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
    
    flag = !flag;
  }
  
  console.log(arr)

}




const arr = [4, 3, 7, 8, 6, 2, 1];
zigZag(arr);