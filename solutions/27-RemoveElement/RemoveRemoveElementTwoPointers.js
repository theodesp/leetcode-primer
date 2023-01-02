/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  // Initialize a pointer to the current position in the array
  let i = 0;

  // Iterate through the array
  while (i < nums.length) {
    if (nums[i] === val) {
      // If the current element is the value to be removed, remove it by
      // replacing it with the last element in the array and decrementing the array length
      nums[i] = nums[nums.length - 1];
      nums.length--;
    } else {
      // If the current element is not the value to be removed, move on to the next element
      i++;
    }
  }

  // Return the number of elements remaining in the array
  return nums.length;
}
