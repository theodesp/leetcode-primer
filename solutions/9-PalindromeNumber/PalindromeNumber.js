/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  // Handle negative numbers, which are not palindromes
  if (x < 0) {
    return false;
  }

  // Initialize reversed to 0 and store a copy of x
  let reversed = 0;
  let num = x;

  // Iterate over the digits of x, and add each digit to the right end of reversed
  while (num > 0) {
    // Get the rightmost digit of num
    let digit = num % 10;

    // Add the digit to the right end of reversed
    reversed = reversed * 10 + digit;

    // Remove the rightmost digit from num
    num = Math.floor(num / 10);
  }

  // Return whether x is equal to reversed
  return x === reversed;
}
