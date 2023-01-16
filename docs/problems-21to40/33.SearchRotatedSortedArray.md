---
tags:
  - Searching
  - Medium
  - Arrays
---

# 33. Search in Rotated Sorted Array

[TOC]

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index `k (1 <= k < nums.length)` such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**

```
Input: nums = [1], target = 0
Output: -1
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

Since the array is sorted initially we can use binary search with a slight modification when we check if the number is smaller or larger than the middle point.

## Solutions

### With Binary Search

This function uses a binary search algorithm to find the target in the given rotated array. It starts by initializing two pointers, left and right, to the first and last indices of the array, respectively. In each iteration, it finds the middle index of the current subarray and compares the element at that index with the target. If they match, it returns the index. Otherwise, it determines which half of the array the target is likely to be in based on the relative order of the left and middle elements, and updates the pointers accordingly. If the target is not found in the array, the function returns -1.

??? Show "Solution"
`js title="SearchRotatedSortedArray.js"
    --8<-- "solutions/33-SearchRotatedSortedArray/SearchRotatedSortedArrayBinarySearch.js"
    `

The time complexity of this function is $O(log n)$ and the space complexity is $O(1)$.

The reason why this function has $O(log n)$ time complexity is because it uses a binary search algorithm. In each iteration, the function eliminates half of the remaining elements by updating the left and right pointers. Since the function does a constant amount of work per iteration, the number of iterations required to find the target is logarithmic in the size of the array.

The space complexity is $O(1)$ because the function uses only a constant amount of extra memory to store the left, right, and mid pointers, regardless of the size of the input array.

## Additional Thoughts

## Related Techniques

## References

- [leetcode](https://leetcode.com/problems/search-in-rotated-sorted-array/)
