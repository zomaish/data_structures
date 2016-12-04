
function interpolationSort(arr) {
let lo = 0;
let hi = arr.length-1;
const x = 42
while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
  
  console.log(((hi-lo) / (arr[hi]-arr[lo])), (x - arr[lo]))
       let pos = lo + (((hi-lo) / (arr[hi]-arr[lo]))*(x - arr[lo])) |0;
 
   console.log("pos", pos);
  
        if (arr[pos] == x) {
            return pos;
        }
 
        if (arr[pos] < x)
            lo = pos + 1;
        else
            hi = pos - 1;
    }
}

const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23,24, 33, 35, 42, 47];
console.log(interpolationSort(arr))