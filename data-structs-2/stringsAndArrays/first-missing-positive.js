//https://leetcode.com/problems/first-missing-positive/solution/
const hasOne = (arr) => {
  for(let i=0; i<arr.length; i++) {
    if (arr[i] === 1) return true;
  }

  return false;
}
const firstMissingPositive = (arr) => {
  const n = arr.length;

  if(!hasOne(arr)) return 1;
  if (n === 1) return 2;

  for(let i=0; i<arr.length; i++) {
    if ((arr[i] <= 0) || (arr[i] > n))
        arr[i] = 1;
  }

  for(let i=0; i<n; i++) {
   
    const j = Math.abs(arr[i]);

    if (j === n) {
      console.log('in heea')
      arr[0] = - Math.abs(arr[0]);
    } else {
      arr[j] = - Math.abs(arr[j]);
    }
  }

  console.log("arr", arr)
  for(let i=1; i<arr.length; i++) {
    if (arr[i] > 0) return i;
  }

  if (arr[0]> 0) return n

  return n+1;
};

const arr = [1, 2, 4,3];
// const arr = [3,4,-1,1];
// const arr = [1,2]
// const arr = [2,1]

console.log(firstMissingPositive(arr));