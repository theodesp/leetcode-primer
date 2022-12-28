function validParenthesis(s) {
  // Use a stack to store the open brackets
  const stack = [];

  // Map of open brackets to corresponding close brackets
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Iterate through the string
  for (const c of s) {
    // If the character is an open bracket, push it onto the stack
    if (c in bracketMap) {
      stack.push(c);
    } else {
      // If the character is a close bracket, check if it is
      // the corresponding close bracket for the open bracket
      // at the top of the stack
      const lastOpenBracket = stack.pop();
      if (bracketMap[lastOpenBracket] !== c) {
        return false;
      }
    }
  }

  // Return true if the stack is empty (all open brackets have
  // been closed), and false otherwise
  return stack.length === 0;
}
