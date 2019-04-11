

const findSum3 = (arr, s) => {
  arr.sort((a, b) => {
    if (a>b) return 1;
    if (b>a) return -1;
    return 0
  });


  for (let i=0; i<arr.length; i++) {
    let l = i+1;
    let r = arr.length-1;

    while(l<r) {
      const sum = arr[i] + arr[l] + arr[r]
      if (sum === s) console.log('found', arr[i], ' ', arr[l], ' ', arr[r]);
      
      if (sum < s) l++
      else r--
    }
  }


}



// const arr = [1, 4, 45, 6, 10, 8];
// const sum = 22;

const arr = [-1,0,1,2,-1,-4, -3];
const sum = 0;

findSum3(arr, sum);