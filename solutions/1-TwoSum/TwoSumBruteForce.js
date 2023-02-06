/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // First loop goes for each first element
  for (let i = 0; i < nums.length; i++) {       // O(n)
    // Second loop goes for each second element of the rest of array. Make sure we don't start with the same i.
    for (let j = i + 1; j < nums.length; j++) { // O(n)
      // Check if adding those elements equal to the target
      if (nums[i] + nums[j] === target) {       // O(1)
        return [i, j];
      }
    }
  }

  // Return an empty array as we haven't found any elements that add up to the target element
  return [];
}