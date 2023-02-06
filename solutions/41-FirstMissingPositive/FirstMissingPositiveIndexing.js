function firstMissingPositive(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    // separate the positive numbers from the negative numbers
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
      swap(nums, i, nums[i] - 1);
    }
  }

  // find the first missing positive number
  for (let i = 0; i < n; i++) 
    if (nums[i] != i + 1) 
        return i + 1;
  return n + 1;
}

function swap(arr, i1, i2) {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  }


console.log(firstMissingPositive([-2,2,1,5,4]))