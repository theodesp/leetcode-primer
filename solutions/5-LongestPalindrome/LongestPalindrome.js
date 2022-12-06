function longestPalindrome(s) {
    // Store the length of the longest palindrome found so far
    let longest = 0;
    // Store the index of the start of the longest palindrome found so far
    let startIndex = 0;
  
    // Iterate through the input string
    for (let i = 0; i < s.length; i++) {
      // Check for palindromes with an odd length centered at index i
      let len1 = expandAroundCenter(s, i, i);
      // Check for palindromes with an even length centered at index i
      let len2 = expandAroundCenter(s, i, i + 1);
      // Use the longer of the two palindromes
      let len = Math.max(len1, len2);
      // If this palindrome is longer than the current longest, update the longest and start index
      if (len > longest) {
        longest = len;
        startIndex = i - Math.floor((len - 1) / 2);
      }
    }
  
    // Return the longest palindromic substring
    return s.substring(startIndex, startIndex + longest);
  }
  
  function expandAroundCenter(s, left, right) {
    // While the left and right indices are within the bounds of the string
    // and the characters at the left and right indices are the same...
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // ...move the left and right indices inward
      left--;
      right++;
    }
    // Return the length of the palindrome
    return right - left - 1;
  }