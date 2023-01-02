function strStr(haystack, needle) {
  // Edge case: if the needle is empty, return 0
  if (needle.length === 0) {
    return 0;
  }

  // Create the bad character and good suffix tables for the needle
  const badCharTable = createBadCharTable(needle);
  const goodSuffixTable = createGoodSuffixTable(needle);

  // Initialize the starting position and the offset
  let i = 0,
    j = needle.length - 1;

  while (i <= haystack.length - needle.length) {
    // Compare the characters of the haystack and the needle, starting at the rightmost position
    while (j >= 0 && haystack[i + j] === needle[j]) {
      j--;
    }

    if (j === -1) {
      // If the characters match and the needle pointer is at the leftmost position,
      // return the starting index of the needle
      return i;
    } else {
      // If the characters don't match or the needle pointer is not at the leftmost position,
      // calculate the offset using the bad character and good suffix tables
      i += Math.max(
        goodSuffixTable[j],
        badCharTable[haystack[i + j]] - needle.length + j + 1
      );
      j = needle.length - 1;
    }
  }

  // If the needle is not found, return -1
  return -1;
}

// Helper function to create the bad character table for the needle
function createBadCharTable(needle) {
  // Initialize the bad character table with zeros
  const badCharTable = new Array(256).fill(0);

  // Set the values in the bad character table
  for (let i = 0; i < needle.length - 1; i++) {
    badCharTable[needle.charCodeAt(i)] = needle.length - i - 1;
  }

  return badCharTable;
}

// Helper function to create the good suffix table for the needle
function createGoodSuffixTable(needle) {
  // Initialize the good suffix table with zeros
  const goodSuffixTable = new Array(needle.length).fill(0);

  // Set the values in the good suffix table
  let j = 0;
  for (let i = needle.length - 1; i >= 0; i--) {
    if (isPrefix(needle, i + 1)) {
      goodSuffixTable[i] = j + 1;
    }
    j++;
  }

  for (let i = 0; i < needle.length - 1; i++) {
    const len = borderLength(needle, i);
    goodSuffixTable[needle.length - 1 - len] = len;
  }

  return goodSuffixTable;
}

// Helper function to check if a string is a prefix of another string
function isPrefix(string, prefixLength) {
  for (let i = prefixLength; i < string.length; i++) {
    if (string[i] !== string[i - prefixLength]) {
      return false;
    }
  }
  return true;
}

// Helper function to calculate the border length of a string
function borderLength(string, prefixLength) {
  let borderLength = 0;
  for (let i = prefixLength; i < string.length; i++) {
    if (string[i] === string[borderLength]) {
      borderLength++;
    } else {
      break;
    }
  }
  return borderLength;
}
