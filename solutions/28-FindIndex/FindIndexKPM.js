function strStr(haystack, needle) {
  // Edge case: if the needle is empty, return 0
  if (needle.length === 0) {
    return 0;
  }

  // Create the prefix table for the needle
  const prefixTable = createPrefixTable(needle);

  // Initialize pointers for the haystack and needle
  let i = 0,
    j = 0;

  // Iterate through the haystack, looking for the needle
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      // If the characters match, move both pointers forward
      i++;
      j++;
    }

    if (j === needle.length) {
      // If the needle has been found, return the starting index
      return i - j;
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      // If the characters don't match and the haystack pointer is not at the end of the haystack,
      // set the needle pointer to the value in the prefix table
      j = prefixTable[j - 1];
    }
  }

  // If the needle is not found, return -1
  return -1;
}

// Helper function to create the prefix table for the needle
function createPrefixTable(needle) {
  // Initialize the prefix table with zeros
  const prefixTable = new Array(needle.length).fill(0);

  // Set the initial values for the prefix table
  let j = 0;
  for (let i = 1; i < needle.length; i++) {
    if (needle[i] === needle[j]) {
      // If the characters match, set the value in the prefix table to the previous value plus one
      prefixTable[i] = j + 1;
      j++;
    } else {
      // If the characters don't match, set the value in the prefix table to zero
      prefixTable[i] = 0;
      j = 0;
    }
  }

  return prefixTable;
}


console.debug(strStr("leetcode", "leeto"))