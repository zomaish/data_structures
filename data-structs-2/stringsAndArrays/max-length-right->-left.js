function findMaxLength(arr) {
  let i = 0;
  let j=arr.length-1;

  while(i<j) {
     if (arr[j] > arr[i]) return j-i;
     if (arr[j-1] > arr[i] || arr[j] > arr[i+1]) return j-1-i;

    j -=1;
    i +=1;
  }

  return 0;
}


const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];
console.log(findMaxLength(arr))