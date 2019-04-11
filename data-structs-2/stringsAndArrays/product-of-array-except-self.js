const multiply = (nums) => {
  const n = nums.length;
  const res = new Array(n);

  let left = 1 ,right=1;
  res[0] = 1;
  
  for (let i=1; i<n; i++) {
    res[i] = res[i-1]*nums[i-1];
  }

  for (let i=n-1; i>=0; i--) {
    res[i] *= right;
    right *= nums[i]
  }

  console.log(res);
}
 


const arr = [2,3,4,5];
multiply(arr);
