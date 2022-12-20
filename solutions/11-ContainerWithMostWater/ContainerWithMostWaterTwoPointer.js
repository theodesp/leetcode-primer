/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  // Initialize left and right pointers
  let left = 0;
  let right = height.length - 1;

  // Initialize maximum water
  let maxWater = 0;

  // Iterate until left and right pointers meet
  while (left < right) {
    // Calculate water between left and right pointers
    let water = Math.min(height[left], height[right]) * (right - left);

    // Update maximum water if necessary
    maxWater = Math.max(maxWater, water);

    // Move pointer with shorter height towards center
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};
