/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    // Keeping track of the last seen differences using a hash table.
    const cache = new Map();
    // Only one loop needed for
    for (let i = 0; i < nums.length; i += 1) {    // O(n)
      // Check the cache for the arr[j] while skipping duplicate entries
      if (nums[i] != target / 2 && cache.has(nums[i])) {   // O(1)
        return [cache.get(nums[i]), i];
      } else {
        // Add their difference (target-nums[i]) to the cache for later
        cache.set(target - nums[i], i);           // O(1)
      }
    }
    // Return an empty array as we haven't found any elements that add up to the target element
    return [];
  }

  console.log(twoSum([1,1,1,2,3,3,4], 6));
  