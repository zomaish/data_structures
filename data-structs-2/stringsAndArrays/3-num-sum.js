
const find3NumSum = (nums, k, n) => {
  nums.sort((a, b) => {
    if (a>b) return 1;
    if (a<b) return -1;
    return 0
  });

  console.log(nums)
  
  let diff = Number.MAX_SAFE_INTEGER;
  let res = [];
  for (let i=0; i<=nums.length-n; i++) {
    let start = i+1, end = nums.length-1, sum = 0;
    
    console.log('i', i)
    while(start < end) {
      sum = nums[i] + nums[start] + nums[end];

      if (Math.abs(sum-k) < diff) {
        res = [nums[i], nums[start], nums[end]];
        diff = Math.abs(sum-k);
      }

      if (sum > k) {
        end--;
      } else if(sum<k) {
        start ++
      } else {
        return [nums[i], nums[start], nums[end]];
      }
    }
  }
  return res;
}


const nums = [-1, 0, 1, 2, -1, -4];


console.log(find3NumSum(nums, 11, 3));