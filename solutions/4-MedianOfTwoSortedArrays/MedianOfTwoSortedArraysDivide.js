function medianOfTwoSortedArrays(nums1, nums2) {
  // Calculate the total number of elements in both arrays
  const totalLength = nums1.length + nums2.length;

  // Recursively find the median of the combined arrays
  return medianOfTwoSortedArraysHelper(
    nums1,
    0,
    nums1.length - 1,
    nums2,
    0,
    nums2.length - 1,
    totalLength
  );
}

function medianOfTwoSortedArraysHelper(
  nums1,
  start1,
  end1,
  nums2,
  start2,
  end2,
  totalLength
) {
  // If one of the arrays is empty, return the median of the other array
  if (start1 > end1) {
    return medianOfArray(nums2, start2, end2, totalLength);
  } else if (start2 > end2) {
    return medianOfArray(nums1, start1, end1, totalLength);
  }

  // Calculate the medians of both arrays
  const median1 = medianOfArray(nums1, start1, end1, totalLength);
  const median2 = medianOfArray(nums2, start2, end2, totalLength);

  // If the medians of the two arrays are equal, return that value
  if (median1 === median2) {
    return median1;
  }

  // If the median of the first array is greater than the median of the second array,
  // recurse on the second half of the first array and the first half of the second array
  if (median1 > median2) {
    const newEnd1 = Math.floor((end1 + start1) / 2);
    const newStart2 = Math.ceil((end2 + start2) / 2);
    return medianOfTwoSortedArraysHelper(
      nums1,
      start1,
      newEnd1,
      nums2,
      newStart2,
      end2,
      totalLength
    );
  } else {
    // If the median of the first array is less than the median of the second array,
    // recurse on the first half of the first array and the second half of the second array
    const newStart1 = Math.ceil((end1 + start1) / 2);
    const newEnd2 = Math.floor((end2 + start2) / 2);
    return medianOfTwoSortedArraysHelper(
      nums1,
      newStart1,
      end1,
      nums2,
      start2,
      newEnd2,
      totalLength
    );
  }
}

function medianOfArray(nums, start, end, totalLength) {
  const length = end - start + 1;
  let middle;
  if (length % 2 === 0) {
    // If the length of the array is even, the median is the average of the two middle elements
    middle = (nums[length / 2] + nums[length / 2 - 1]) / 2;
  } else {
    middle = nums[length / 2];
  }
  return middle;
}
