/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    // Edge case: if the array is empty, there is nothing to do
    if (nums.length === 0) {
      return 0;
    }
  
    // Initialize a pointer to the current unique element
    let unique = 0;
  
    // Iterate through the array, looking for unique elements
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[unique]) {
        // If the current element is unique, update the unique element pointer
        // and copy the current element to the unique element position
        unique++;
        nums[unique] = nums[i];
      }
    }
  
    // Return the number of unique elements in the array
    return unique + 1;
  }