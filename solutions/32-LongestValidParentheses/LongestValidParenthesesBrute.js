function longestValidParentheses(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j += 2) {
      if (isValid(s.substring(i, j))) {
        maxLength = Math.max(maxLength, j - i);
      }
    }
  }

  return maxLength;
}

function isValid(sub) {
  let stack = [];

  for (let i = 0; i < sub.length; i++) {
    if (sub[i] === "(") {
      stack.push(sub[i]);
    } else if (stack.length !== 0 && stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
}
