

function closestSum(arr, x) {

  let l=0;
  let h=arr.length-1;
  let diff = x;
  let temp;
  
  const res = {
    a: 0,
    b: 0
  };
  
  while(l<h) {
    temp = Math.abs(arr[l] + arr[h] - x)  
  
    if (temp < diff) {
      res.a = arr[l];
      res.b = arr[h];
      diff = temp;
    }
    
    if (arr[l] + arr[h] > x)
      h--;
    else l++;
  }
  
  return res;

}

console.log(closestSum([10, 22, 28, 29, 30, 40], 54));