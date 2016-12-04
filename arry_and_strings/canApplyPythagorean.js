function canApplyPythagorean(arr) {
 
  arr = arr.map((e) => {
    return e*e;
  }).sort((a, b) => {
    if (a>b) return 1;
    if (a<b) return -1;
    return 0;
  });
  
  for (let i = arr.length - 1; i>1; i--) {
    let l = 0;
    let r = i-1;
    
  while (l<r) {
      if ((arr[l] + arr[r]) === arr[i]) return true;
      
      ((arr[l] + arr[r]) > arr[i]) ? r-- : l++;
    }
  }
  return false; 
}



const arr1 = [3, 1, 4, 6, 5];
console.log(canApplyPythagorean(arr1));

const arr2 = [10, 4, 6, 12, 5];
console.log(canApplyPythagorean(arr2));