const getRotationIndex = (nums, l, r) => {
  if (l>=r || r>=nums.length) return -1;

  const m = parseInt((r+l)/2);
  if (nums[m-1] < nums[m] && nums[m+1] < nums[m]) {
    return m;
  }

  const resL = getRotationIndex(nums, l, m);
  if ( resL !== -1) {
    return resL
  }

  const resR = getRotationIndex(nums, m+1, r);
  if (resR !== -1) {
    return resR
  }
  
  return -1;
};

const findIndexUtil = (nums, target, l, r) => {
  if (l>r) {
    return -1;
  }
  const m = parseInt((r+l)/2);
  if (nums[m] === target) return m;

  if (nums[m] >target) {
    return findIndexUtil(nums, l, m)
  }
  return findIndexUtil(nums, m+1, l);
}

const findIndex = (nums, target) => {
  const rotationIndex = getRotationIndex(nums, 0, nums.length-1);

  console.log('rotationIndex', rotationIndex)
  if (target > nums[0]) {
    return findIndexUtil(nums, target, 0, rotationIndex);
  }

  return findIndexUtil(nums, target, rotationIndex+1, nums.length-1)
}

const nums = [3,4,5,6,7,0,1,2], target = 5;
console.log(findIndex(nums, target));


