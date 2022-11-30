/**
 * @param {string} s
 * @return {number}
 */
 function lengthOfLongestSubstring(s) {
    const cache = new Map();
    let max = 0;
    // starting the initial point of window to index 0
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        // Checking if we have already seen the element or not
        if (cache.has(s[i])) {
            // Sliding window. If we have seen the number, move the start pointer
            // to position after the last occurrence.
            start = Math.max(start,  cache.get(s[i]) + 1);
        }
        // Updating the last seen value of the character
        cache.set(s[i], i);
        // Updating the max
        max = Math.max(max, i - start + 1)
    }
    return max;
 }