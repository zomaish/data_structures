/**
  Time complexity is Linear
  http://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array-set-3-worst-case-linear-time/
**/

function kthSmallest(arr, l, h, k) {

  const n = h-l+1;
  
  if(k>0 && k<=n) {

    let i;
    const CHUNK_SIZE = 5;
    const p = (n+(CHUNK_SIZE-1))/CHUNK_SIZE|0;

    const median = new Array(p);
    
    
    for (i=0; i<p; i++)
      median[i] = findMedian(arr.slice(i*CHUNK_SIZE+l, i*CHUNK_SIZE+l+CHUNK_SIZE));

    const medOfMedians = (i == 1)? median[i-1]: kthSmallest(median, 0, i-1, i/2);
    const pos = partition(arr, l, h, medOfMedians);

    if (pos-l === k-1) return arr[pos];
    
    if (pos-l > k-1)
      return kthSmallest(arr, l, pos-1, k);
    
    return kthSmallest(arr, pos + 1, h, k-1-pos+l);
  
  }

  return -1;
}


function findMedian(arr) {
  arr.sort((a, b) => {
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
  });
  
  console.log("OPOPO", arr)
  return arr[arr.length/2 | 0];
}

function partition(arr, l, h, k) {
  
  for(let m=l; m<=h; m++) {
    if (arr[m] === k) {
      arr[m] = arr[h];
      arr[h] = k;
      break;
    }
  }
  
  
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
//const arr = [2,5,13,26,8,15,16,17,6,14,18,3,24,25,1,21,2,4,7,11,12,19,20];
const arr = [12, 3, 5, 7, 4, 19, 26];
//kthSmallest(arr, 0, arr.length-1, arr.length-1)
console.log(">>>>", kthSmallest(arr, 0, arr.length-1, 1));