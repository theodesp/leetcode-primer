---
tags:
  - Searching
  - Medium
  - Arrays
---

# 34. Find First and Last Position of Element in Sorted Array

[TOC]

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return `[-1, -1]`.

You must write an algorithm with $O(log n)$ runtime complexity.

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]
```

**Constraints:**

```
* `1 <= nums.length <= 5000`
* `-10^4 <= nums[i] <= 10^4`
* All values of nums are unique
* nums is an ascending array that is possibly rotated
* `-10^4 <= target <= 10^4`
```

## Problem Analysis

The straightforward solution is to use linear search but that would be $O(n)$.

Since the array is sorted initially we can use binary search with a slight modification when we check if we found the target element in the array.

## Solutions

### With Binary Search

This function uses a binary search algorithm to find the target in the given array. It starts by initializing two pointers, left and right, to the first and last indices of the array, respectively. In each iteration, it finds the middle index of the current subarray and compares the element at that index with the target. If they match, the function updates the start and end variables to the current index and then uses two while loops to find the leftmost and rightmost occurrences of the target by checking the elements immediately before and after the current index. Finally, it returns the range [start, end]. If the target is not found in the array, the function returns [-1, -1].

??? Show "Solution"
`js title="SearchRangeArray.js"
    --8<-- "solutions/34-SearchRangeArray/SearchRangeArrayBinarySearch.js"
    `

The time complexity of this function is $O(log n + k)$ where k is the number of elements equal to the target. The main loop does a log n search, and each while loop does a linear search on at most k elements.

The space complexity is $O(1)$ because the function uses only a constant amount of extra memory to store the left, right, start and end pointers, regardless of the size of the input array.

## Additional Thoughts

## Related Techniques

## References

- [leetcode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
