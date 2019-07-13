/**
 * 349. 两个数组的交集
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums, otherNums;
    if (nums1.length > nums2.length) {
        [nums, otherNums] = [nums2, nums1];
    } else {
        [nums, otherNums] = [nums1, nums2];
    }
    let len = nums.length;
    let hashSet = new Set();
    for (let i = 0; i < len; i++) {
        if (otherNums.includes(nums[i])) {
            hashSet.add(nums[i]);
        }
    }
    return Array.from(hashSet);
};

// 简单的写法
var intersection2 = function(nums1, nums2) {
    nums1 = Array.from(new Set(nums1));
    let res = nums1.filter( x => nums2.includes(x));
    return res;
};