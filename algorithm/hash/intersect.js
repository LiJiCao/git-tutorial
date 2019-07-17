/**
 * 350. 两个数组的交集 II
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let nums = nums1.length > nums2.length ? nums2 : nums1;
    let otherNums = nums === nums1 ? nums2 : nums1;
    let hashMap = {}, result = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] = 0;
        }
        hashMap[nums[i]]++;
    }
    for (let i = 0, len = otherNums.length; i < len; i++) {
        if (hashMap.hasOwnProperty(otherNums[i])) {
            hashMap[otherNums[i]]--;
            result.push(otherNums[i]);
            if (hashMap[otherNums[i]] === 0) {
                delete hashMap[otherNums[i]];
            }
        }
    }
    return result;
};


var intersect2 = function (nums1, nums2) {
    //Map
    // let newNums1 = nums1.length>=nums2.length?nums1:nums2
    // let newNums2 = nums1.length<nums2.length?nums1:nums2
    let map = new Map()
    let result = []
    nums1.forEach(elem => {
        if (map.has(elem)) {
            map.set(elem, map.get(elem) + 1)
        } else {
            map.set(elem, 1)
        }
    })
    nums2.forEach(elem => {
        if (map.has(elem) && map.get(elem) > 0) {
            result.push(elem)
            map.set(elem, map.get(elem) - 1)
        }
    })
    return result
};