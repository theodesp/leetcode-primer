/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    let combined = nums1.concat(...nums2);
    combined = combined.sort(function(a, b){return a-b});
    return median(combined);
};

function median(nums) {
    if (nums.length % 2 === 0) {
        return (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2
    }
    return nums[(nums.length - 1) / 2];
}

console.debug(findMedianSortedArrays([1,2,4,6,9,10],[3,5,8,11,14]));