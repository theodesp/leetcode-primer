function findTriplets(nums) {
  // Initialize an empty array to store the triplets
  const triplets = [];

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < nums.length; j++) {
      // Iterate through the remaining elements in the array
      for (let k = j + 1; k < nums.length; k++) {
        // If the three numbers sum to 0, add the triplet to the result array
        if (nums[i] + nums[j] + nums[k] === 0) {
          triplets.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return triplets;
}
