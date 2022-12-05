/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  // Read in and ignore any leading whitespace
  let i = 0;
  while (i < s.length && s[i] === " ") {
    i++;
  }

  // Check if the next character is '-' or '+'. Read this character in if it is either.
  // Assume the result is positive if neither is present.
  let sign = 1;
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    if (s[i] === "-") {
      sign = -1;
    }
    i++;
  }

  // Read in the next characters until the next non-digit character or the end of the input is reached
  let num = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    num = num * 10 + (s[i] - "0");
    i++;
  }

  // Change the sign as necessary (from step 2)
  num *= sign;

  // Clamp the integer if it is out of the 32-bit signed integer range
  const MIN_32_BIT_INT = -Math.pow(2, 31);
  const MAX_32_BIT_INT = Math.pow(2, 31) - 1;
  num = Math.max(num, MIN_32_BIT_INT);
  num = Math.min(num, MAX_32_BIT_INT);

  // Return the integer as the final result
  return num;
};
