/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  // Edge case: if words is empty, return an empty array
  if (words.length === 0) {
    return [];
  }

  const result = [];
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;

  // Iterate through the string
  for (let i = 0; i < s.length - totalLength + 1; i++) {
    // Check if the current substring is a concatenated substring
    if (isConcatenated(s.slice(i, i + totalLength), words)) {
      result.push(i);
    }
  }

  return result;
}

function isConcatenated(s, words) {
  // Create a copy of words
  const wordsCopy = [...words];

  // Iterate through the string
  for (let i = 0; i < s.length; i += words[0].length) {
    // Extract the current word
    const word = s.slice(i, i + words[0].length);

    // Check if the word is in the list of words
    const index = wordsCopy.indexOf(word);
    if (index === -1) {
      return false;
    }

    // Remove the word from the list
    wordsCopy.splice(index, 1);
  }

  return true;
}
