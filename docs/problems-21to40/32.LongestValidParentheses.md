---
tags:
  - Permutations
  - Hard
  - Strings
---

# 32. Longest Valid Parentheses

[TOC]

Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

**Example 1:**

```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

**Example 2:**

```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

**Example 3:**

```
Input: s = ""
Output: 0
```

**Constraints:**

```
* `0 <= s.length <= 3 * 104`
* `s[i]` is '(', or ')'.
```

## Problem Analysis

We can use a stack to keep track of the current parentheses balance status. For example we can check the top of the stack and the current char to see if it creates an invalid combination.

We can either check every possible substring for balanced parenthesis or we can be a bit smarter. If we create balanced parentheses then we pop the item from the stack and store the index if the stack is empty. Then we update the maxLength parameter. This way we can calculate the length of the largest valid parentheses.

## Solutions

### Brute Force

We consider every possible non-empty even length substring from the given string and check whether it's a valid string of parentheses or not. In order to check the validity, we use the Stack's Method.

Every time we encounter a ‘(’\text{‘(’}‘(’, we push it onto the stack. For every ‘)’\text{‘)’}‘)’ encountered, we pop a ‘(’\text{‘(’}‘(’ from the stack. If ‘(’\text{‘(’}‘(’ isn't available on the stack for popping at anytime or if stack contains some elements after processing complete substring, the substring of parentheses is invalid. In this way, we repeat the process for every possible substring and we keep on storing the length of the longest valid string found so far.

??? Show "Solution"
`js title="LongestValidParentheses.js"
    --8<-- "solutions/32-LongestValidParentheses/LongestValidParenthesesBrute.js"
    `

Time complexity : `O(n^3)`. Generating every possible substring from a string of length `n` requires .
Space complexity : Space complexity: `O(n)`. A stack of depth `n` will be required for the longest substring.

### Using a Stack

Instead of finding every possible string and checking its validity, we can make use of a stack while scanning the given string to:

1. Check if the string scanned so far is valid.
2. Find the length of the longest valid string.

In order to do so, we start by pushing −1-1−1 onto the stack. For every ‘(’\text{‘(’}‘(’ encountered, we push its index onto the stack.

For every ‘)’\text{‘)’}‘)’ encountered, we pop the topmost element. Then, the length of the currently encountered valid string of parentheses will be the difference between the current element's index and the top element of the stack.

If, while popping the element, the stack becomes empty, we will push the current element's index onto the stack. In this way, we can continue to calculate the length of the valid substrings and return the length of the longest valid string at the end.

??? Show "Solution"
`js title="LongestValidParentheses.js"
    --8<-- "solutions/31-NextPermutation/LongestValidParenthesesStack.js"
    `
Time complexity : `O(n)`. is the length of the given string.
Space complexity : `O(n)`. The size of stack can go up to `n`.

## Additional Thoughts

## Related Techniques

## References

- [leetcode](https://leetcode.com/problems/longest-valid-parentheses)
