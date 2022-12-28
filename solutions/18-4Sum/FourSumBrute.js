function findQuadruplets(nums, target) {
  // Initialize a Set to store the quadruplets
  const quadruplets = new Set();

  // Sort the array to make it easier to find the quadruplets
  nums.sort((a, b) => a - b);

  // Use four nested loops to iterate over all possible combinations of a, b, c, and d
  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      for (let c = b + 1; c < nums.length - 1; c++) {
        for (let d = c + 1; d < nums.length; d++) {
          // If the sum of nums[a], nums[b], nums[c], and nums[d] is equal to the target, add the quadruplet to the result Set
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            quadruplets.add([nums[a], nums[b], nums[c], nums[d]]);
          }
        }
      }
    }
  }

  // Convert the Set to an array and return it
  return Array.from(quadruplets);
}

console.log(findQuadruplets([2,2,2,2,2], 8));
