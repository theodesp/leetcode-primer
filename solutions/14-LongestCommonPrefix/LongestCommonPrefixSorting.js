/**
 * @param {string[]} strings
 * @return {string}
 */
function longestCommonPrefix(strings) {
  // If the array is empty or has only one element, return an empty string
  if (strings.length === 0) {
    return "";
  }

  // Sort the array of strings so that we can iterate through it in order
  strings.sort();

  // Get the first and last strings in the array
  const first = strings[0];
  const last = strings[strings.length - 1];

  // Initialize the longest common prefix to an empty string
  let longestPrefix = "";

  // Iterate through the characters in the first and last strings
  for (let i = 0; i < first.length; i++) {
    // If the characters at the current position are the same, add it to the prefix
    if (first[i] === last[i]) {
      longestPrefix += first[i];
    } else {
      // If the characters are different, return the prefix
      return longestPrefix;
    }
  }

  // If we reach the end of the loop, return the prefix
  return longestPrefix;
}
