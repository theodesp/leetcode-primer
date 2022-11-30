/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const chars = new Map();

  let start = 0,
    curr = 0;
  let max = 0;
  while (curr < s.length) {
    // Set or update the character seen so far
    if (chars.get(s[curr])) {
      chars.set(s[curr], chars.get(s[curr]) + 1);
    } else {
      chars.set(s[curr], 1);
    }

    // Traverse the hash table to find the next char with no duplicates
    while (chars.get(s[curr]) > 1) {                      // O(n)
        chars.set(s[start], chars.get(s[start]) - 1); // O(1)
        start += 1;
    }

    max = Math.max(max, curr - start + 1);
    curr += 1;
  }
  return max;
}


console.log(lengthOfLongestSubstring("abcabcbb"));