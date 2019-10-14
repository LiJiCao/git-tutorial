// 哈希集合和哈希映射算法
// 217. 存在重复元素
/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashSet = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!hashSet.hasOwnProperty(nums[i])) {
            hashSet[nums[i]] = 0;
        }
        hashSet[nums[i]]++;
        if (hashSet[nums[i]] >= 2) {
            return true;
        }
    }
    return false;
};

var containsDuplicate2 = function(nums) {
    return new Set(nums).size < nums.length;
};