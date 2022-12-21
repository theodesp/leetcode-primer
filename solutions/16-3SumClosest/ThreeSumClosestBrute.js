/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    // Initialize the closest sum to the maximum possible value
  let closest = Number.MAX_VALUE;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < nums.length; j++) {
      // Iterate through the remaining elements in the array
      for (let k = j + 1; k < nums.length; k++) {
        // Calculate the sum of the three numbers
        const sum = nums[i] + nums[j] + nums[k];

        // Update the closest sum if the current sum is closer to the target
        if (Math.abs(sum - target) < Math.abs(closest - target)) {
          closest = sum;
        }
      }
    }
  }

  // Return the closest sum
  return closest;
};

