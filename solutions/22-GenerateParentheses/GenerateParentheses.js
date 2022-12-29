function generateParenthesis(n) {
  const result = [];

  // Recursive function to generate all combinations of well-formed parentheses
  function generate(s, left, right) {
    // If the number of left and right parentheses are equal, the current combination is complete
    if (left === n && right === n) {
      result.push(s);
      return;
    }

    // Add a left parenthesis if we have not reached the maximum number
    if (left < n) {
      generate(s + "(", left + 1, right);
    }

    // Add a right parenthesis if it is safe to do so (i.e., there are more left parentheses than right)
    if (right < left) {
      generate(s + ")", left, right + 1);
    }
  }

  // Start the recursive generation with an empty string and 0 left and right parentheses
  generate("", 0, 0);

  return result;
}
