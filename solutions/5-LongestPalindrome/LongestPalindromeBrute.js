function longestPalindrome(s) {
    // Store the length of the longest palindrome found so far
    let longest = 0;
    // Store the index of the start of the longest palindrome found so far
    let startIndex = 0;
  
    // Iterate through the input string
    for (let i = 0; i < s.length; i++) {
      // Check for palindromes of all possible lengths centered at index i
      for (let j = 0; i - j >= 0 && i + j < s.length; j++) {
        // If the characters at the left and right sides of the palindrome are the same...
        if (s[i - j] === s[i + j]) {
          // ...and the palindrome is longer than the current longest, update the longest and start index
          if (2 * j + 1 > longest) {
            longest = 2 * j + 1;
            startIndex = i - j;
          }
        } else {
          // If the characters at the left and right sides are different, stop checking this palindrome
          break;
        }
      }
    }
  
    // Return the longest palindromic substring
    return s.substring(startIndex, startIndex + longest);
  }