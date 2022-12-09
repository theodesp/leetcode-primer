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


function trim(s, ch) {
  // Let lo is the point to the left side of the string and hi the point to the right side
  let lo = 0, hi = s.length - 1;
  // Skip matching characters from left side of the string
  while (lo < s.length - 1 && s[lo] === ch){
    lo++;
  }
  // Skip matching characters from right side of the string
  while (hi > 0 && s[hi] === ch){
    hi--;
  }
  // Check if the string is empty if the pointers reach the end of the string
  if (lo == s.length || hi === -1) {
    return '';
  }
  // return the trimmed string based on indices of the two pointers
  return s.substr(lo, lo + hi - 1);
}

console.log(trim("     hello world !   ", ' '))
console.log(trim("", ' '))
console.log(trim("    ", ' '))
console.log(trim("Hello     ", ' '))
console.log(trim("     world", ' '))

console.log(trim("     world ", ' '))
console.log(trim(" Hello    ", ' '))