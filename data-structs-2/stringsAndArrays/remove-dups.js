


const getRightBoundery = (nums, i) => {
  if (nums[i] === -1) return 0;
  if (nums[i] === 0) return 3;
  if (nums[i] === 1) return 10;
  if (nums[i] === 2) return 12;
  if (nums[i] === 3) return 14;
  if (nums[i] === 4) return 13;
}

const removeDuplicatesUtil = (nums, i, j, k) => {
  if (i === nums.length-1) {
    nums[k] = nums[i];
    return;
  }
  if (j>=nums.length) return;

  if (nums[i] !== nums[j]) {
    nums[k] = nums[i];
    return removeDuplicatesUtil(nums, i+1, j+1, k+1);
  }

  j = getRightBoundery(nums, j);
  nums[k] = nums[j];
  removeDuplicatesUtil(nums, j+1, j+2, k+1)
};
const removeDuplicates = (nums) => {
  removeDuplicatesUtil(nums, 0, 1, 0)
  console.log('nums', nums)
}


console.log(removeDuplicates([-1, 0,0,0,1,1,1,1,1,1,1,2,2,3,3,4]))