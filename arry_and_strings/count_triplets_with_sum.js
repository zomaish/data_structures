function countTriplets(arr, sum) {
  const n = arr.length;
  
  arr.sort((a,b) => {
    if (a > b) return 1;
    if(a<b) return -1;
    return 0;
  });
  
  console.log(arr)
  //1,3,4,5,7
  let temp = 0, c=0;
  
  for (let l = 0; l<n-2; l++) {
    let r=n-1, m = l+1;
    
    console.log("lmr", l, m , r)
    while (m<r) {
      temp = arr[l] + arr[m] + arr[r];

      if (temp >=sum) {
        r--;
      } else {
        c+= r-m; // all elements between match the criteria
        m++;
      }
    
    }
  }
console.log("ans", c)

}


const arr = [5, 1, 3, 4, 7];
const sum = 12;
countTriplets(arr, sum);