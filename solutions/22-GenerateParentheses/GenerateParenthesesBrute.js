/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const result = [];

  // Generate all possible combinations of n pairs of parentheses
  function generate(s, left, right) {
    // If the number of left and right parentheses is equal, the current combination is complete
    if (left === n && right === n) {
      result.push(s);
      return;
    }

    // Add a left parenthesis if we have not reached the maximum number
    if (left < n) {
      generate(s + "(", left + 1, right);
    }

    // Add a right parenthesis if we have not reached the maximum number
    if (right < n) {
      generate(s + ")", left, right + 1);
    }
  }

  // Start the recursive generation with an empty string and 0 left and right parentheses
  generate("", 0, 0);

  // Filter the result to only include well-formed parentheses
  return result.filter(isValidParenthesis);
}

function isValidParenthesis(s) {
  // Keep track of the balance of left and right parentheses
  let balance = 0;

  for (const c of s) {
    if (c === "(") {
      balance++;
    } else if (c === ")") {
      balance--;
    }
    // Return false if the balance becomes negative (i.e., there are more right parentheses than left)
    if (balance < 0) {
      return false;
    }
  }

  // Return true if the balance is 0 (i.e., there are the same number of left and right parentheses)
  return balance === 0;
}
