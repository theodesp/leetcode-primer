/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  // Define lookup table for Roman numerals
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  // Initialize result string
  let result = "";

  // Iterate through values in lookup table, starting with the largest
  for (let value of Object.keys(numerals).sort((a, b) => b - a)) {
    // Add Roman numeral to result while num is greater than or equal to value
    while (num >= value) {
      result += numerals[value];
      num -= value;
    }
  }

  return result;
};
