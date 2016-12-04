//http://www.geeksforgeeks.org/length-largest-subarray-contiguous-elements-set-1/
/**
  an aray is considered contiguous if and only if max-min === posMax-posMin

*/

function longestContiguousN(arr, n) {

  let min, max, maxLen = 1;
 
  for (let i=0; i<n-1; i++) {
     min = arr[i]; max = arr[i];
    
    for(let j = i+1; j<n; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      
      console.log(max, min, i, j)
      if ((max-min) === (j-i)) {
        maxLen = Math.max(maxLen, max-min+1);
      }
    }  
  }
  
  console.log(maxLen)
}


const arr = [10, 12, 11];

//3
longestContiguousN(arr, arr.length);