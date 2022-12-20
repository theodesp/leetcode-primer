/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  // Initialize maximum water
  let maxWater = 0;

  // Iterate through all pairs of lines
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      // Calculate water between lines
      let water = Math.min(height[i], height[j]) * (j - i);

      // Update maximum water if necessary
      maxWater = Math.max(maxWater, water);
    }
  }

  return maxWater;
};
