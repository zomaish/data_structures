//https://leetcode.com/problems/find-peak-element/

const findPeakElement = (nums) => {
  return search(nums, 0, nums.length - 1);
}
const search = (nums, l, r) => {
  if (l == r)
      return l;
  const mid = parseInt((l + r) / 2);
  if (nums[mid] > nums[mid + 1])
      return search(nums, l, mid);
  return search(nums, mid + 1, r);
}

console.log(findPeakElement([1,6,3,4,5]))