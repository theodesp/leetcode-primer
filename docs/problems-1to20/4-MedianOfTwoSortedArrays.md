---
tags:
  - Arrays
  - Searching
  - Math
  - Hard
---

# 4. Median of Two Sorted Arrays

[TOC]

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.
 
**Example 1:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

**Example 2:**
```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

**Constraints:**

* `nums1.length == m`
* `nums2.length == n`
* `0 <= m <= 1000`
* `0 <= n <= 1000`
* `1 <= m + n <= 2000`
* `-106 <= nums1[i], nums2[i] <= 106`

## Problem Analysis

The problem can be sorted in two ways. Either the fast and easy one by sorting an merging or the most efficient one with using logic and Divide and Conquer.

Since the two arrays are sorted the combined array will have the size `m+n`. This number could be even or odd. If odd then the median will be the middle element of the array. If even it would be the average of the two central numbers.

If the two arrays are not overlapping then one is on the left and one on the right. This means that we can just find the median by just calculating the middle index of `m+n`. This

If the two arrays overlap then they will have a region in which the numbers are both in the merged array. This part will contain `k` numbers of the first array and `l` numbers of the second array.

Now within those parts lies the median number and the Divide and Conquer technique analyses the solution.

## Solutions

### Using Sorting

The straightforward way to find the median of two arrays is to take both arrays merge them together, sort them and find the middle element.

The following program shows how to implement this approach:

??? Show "Solution using Brute Force"
    ```js title="MedianOfTwoSortedArrays.js"
    --8<-- "solutions/4-MedianOfTwoSortedArrays/MedianOfTwoSortedArraysBrute.js"
    ```

The time complexity of the algorithm is $O(klogk)+c$ where `k=m+n`.

### Using Divide and Conquer

The following program shows how to implement this approach:

??? Show "Solution using Brute Force"
    ```js title="MedianOfTwoSortedArrays.js"
    --8<-- "solutions/4-MedianOfTwoSortedArrays/MedianOfTwoSortedArraysBrute.js"
    ```

This approach has a time complexity of $O(log(m + n))+c$, since it uses a binary search to find the split point where the two arrays are evenly balanced. The space complexity is $O(1)$, since it does not create any additional data structures.

## Additional Thoughts

## Related Techniques

## References

* [leetcode](https://leetcode.com/problems/median-of-two-sorted-arrays/)



