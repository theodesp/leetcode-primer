function closestSum(nums, target) {
  // Sort the array
  nums.sort((a, b) => a - b);

  // Initialize the closest sum to the maximum possible value
  let closest = Number.MAX_VALUE;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Initialize pointers for the remaining two numbers
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // Calculate the sum of the three numbers
      const sum = nums[i] + nums[left] + nums[right];

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      // If the sum is greater than the target, move the right pointer inward
      if (sum > target) {
        right--;
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer inward
        left++;
      } else {
        // If the sum is equal to the target, return the sum
        return sum;
      }
    }
  }

  // Return the closest sum
  return closest;
}
