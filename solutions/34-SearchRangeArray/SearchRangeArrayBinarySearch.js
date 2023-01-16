/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = -1;
  let end = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      start = mid;
      end = mid;
      while (start >= 0 && nums[start] === target) {
        start--;
      }
      while (end <= nums.length - 1 && nums[end] === target) {
        end++;
      }
      return [start + 1, end - 1];
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
}
