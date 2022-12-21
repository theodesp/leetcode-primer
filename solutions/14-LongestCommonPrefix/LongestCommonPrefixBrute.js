function longestCommonPrefix(strings) {
  // If the array is empty or has only one element, return an empty string
  if (strings.length === 0) {
    return "";
  }

  // Initialize the longest common prefix to an empty string
  let longestPrefix = "";

  // Iterate through the characters in the first string
  for (let i = 0; i < strings[0].length; i++) {
    // Set the current character to compare
    const c = strings[0][i];

    // Iterate through the remaining strings in the array
    for (let j = 1; j < strings.length; j++) {
      // If the current character is not the same in any of the other strings, return the prefix
      if (strings[j][i] !== c) {
        return longestPrefix;
      }
    }

    // If all the characters are the same, add the current character to the prefix
    longestPrefix += c;
  }

  // Return the prefix
  return longestPrefix;
}
