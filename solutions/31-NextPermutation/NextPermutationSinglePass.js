/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
  // Start from right and find j such as nums[n-1] < n[j]
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let i = start, j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
