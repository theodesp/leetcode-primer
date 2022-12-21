function findTriplets(nums) {
  // Sort the array
  nums.sort((a, b) => a - b);

  // Initialize an empty array to store the triplets
  const triplets = [];

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // If the current number is greater than 0, we can stop searching since the remaining numbers will also be positive
    if (nums[i] > 0) {
      break;
    }

    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Initialize pointers for the remaining two numbers
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      // Calculate the sum of the three numbers
      const sum = nums[i] + nums[left] + nums[right];

      // If the sum is 0, add the triplet to the result array
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);

        // Move the left and right pointers inward, skipping duplicates
        do {
          left++;
        } while (left < right && nums[left] === nums[left - 1]);
        do {
          right--;
        } while (left < right && nums[right] === nums[right + 1]);
      } else if (sum < 0) {
        // If the sum is negative, move the left pointer inward
        left++;
      } else {
        // If the sum is positive, move the right pointer inward
        right--;
      }
    }
  }

  return triplets;
}
