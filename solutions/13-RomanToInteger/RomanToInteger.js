/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (roman) {
  // Create a map of Roman numeral values
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize the result to 0
  let result = 0;

  // Iterate through the characters in the Roman numeral string
  for (let i = 0; i < roman.length; i++) {
    // Get the value of the current character
    const value = map[roman[i]];

    // If the next character has a greater value, subtract the current value
    if (i + 1 < roman.length && map[roman[i + 1]] > value) {
      result -= value;
    } else {
      // Otherwise, add the current value
      result += value;
    }
  }

  return result;
};


console.log(romanToInt('IV'));