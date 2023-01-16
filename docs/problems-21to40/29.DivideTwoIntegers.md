---
tags:
  - Integers
  - Maths
  - Medium
---

# 29. Divide Two Integers

[TOC]

Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, `8.345` would be truncated to `8`, and `-2.7335` would be truncated to `-2`.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: `[−2^31, 2^31 − 1]`. For this problem, if the quotient is strictly greater than `2^31 - 1`, then return `2^31 - 1`, and if the quotient is strictly less than `-2^31`, then return `-2^31`.

**Example 1:**

```
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
```

**Example 2:**

```
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
```

**Constraints:**

```
* `-2^31 <= dividend, divisor <= 2^31 - 1`
* `divisor != 0`
```

## Problem Analysis

Division of two numbers a and b is also `a/b = q + r.

You can do division by repeatedly subtracting the divisor from the dividend and counting the no of iterations.

You can also do it by figuring out the maximum largest multiple of the divisor that is less than or equal to the dividend starting from 1, 2, 4, 8, 16, etc.

You can check the sign of both the dividend and divisor and propagate it to the result if are different.

## Solutions `

### Using maths

This algorithm works by repeatedly finding the largest multiple of the divisor that is less than or equal to the dividend and subtracting it from the dividend. It does this by using bit shifting to efficiently multiply the divisor by 2, 4, 8, etc. and keeping track of the corresponding multiples. This reduces the number of iterations required and makes the algorithm faster than the first solution.

??? Show "Solution"
`js title="DivideTwoIntegers.js"
--8<-- "solutions/29-DivideTwoIntegers/DivideTwoIntegers.js"

This algorithm still has a time complexity of `O(n)` where n is the number of bits in the dividend, so it may not be significantly faster for very large dividends.

## Additional Thoughts

## Related Techniques

## References

- [leetcode](https://leetcode.com/problems/divide-two-integers/)
