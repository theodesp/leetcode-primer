function reverseInt(x) {
  // Handle the special case of 0
  if (x === 0) {
    return 0;
  }

  // Extract the sign of the input number
  let sign = 1;
  if (x < 0) {
    sign = -1;
    x *= -1;
  }

  // Reverse the digits of the number
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Check if the reversed number is within the signed 32-bit integer range
  const MIN_32_BIT_INT = -Math.pow(2, 31);
  const MAX_32_BIT_INT = Math.pow(2, 31) - 1;
  if (reversed < MIN_32_BIT_INT || reversed > MAX_32_BIT_INT) {
    return 0;
  }

  // Restore the original sign and return the reversed number
  return sign * reversed;
}
