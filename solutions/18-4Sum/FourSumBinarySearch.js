/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  // Initialize an empty array to store the quadruplets
  const quadruplets = new Set();

  // Sort the array to make it easier to find the quadruplets
  nums.sort((a, b) => a - b);

  // Use three nested loops to iterate over all possible combinations of a, b, and c
  for (let a = 0; a < nums.length - 3; a++) {
    for (let b = a + 1; b < nums.length - 2; b++) {
      for (let c = b + 1; c < nums.length - 1; c++) {
        // Find the value of d such that nums[a] + nums[b] + nums[c] + nums[d] is equal to the target
        let d = binarySearch(
          nums,
          c + 1,
          nums.length - 1,
          target - nums[a] - nums[b] - nums[c]
        );
        // If a value of d was found, add the quadruplet to the result array
        if (d !== -1) {
          quadruplets.add(JSON.stringify([nums[a], nums[b], nums[c], nums[d]]));
        }
      }
    }
  }

  // Return the array of quadruplets
  return Array.from(quadruplets).map((v) => JSON.parse(v));
};

// Binary search function
function binarySearch(array, left, right, target) {
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
