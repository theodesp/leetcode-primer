/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
  // Edge case: if the needle is empty, return 0
  if (needle.length === 0) {
    return 0;
  }

  // Iterate through the haystack, looking for the needle
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      // If the current character in the haystack matches the first character in the needle,
      // check if the rest of the haystack starting at this position matches the needle
      let j = 0;
      while (j < needle.length && haystack[i + j] === needle[j]) {
        j++;
      }
      if (j === needle.length) {
        // If the haystack and needle match, return the starting index
        return i;
      }
    }
  }

  // If the needle is not found, return -1
  return -1;
}
