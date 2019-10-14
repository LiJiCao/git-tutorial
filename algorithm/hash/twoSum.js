/**
 * 1. 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!hashMap.hasOwnProperty(nums[i])) {
            hashMap[nums[i]] = i;
        }
        if (hashMap.hasOwnProperty(target - nums[i])) {
            let index = hashMap[target - nums[i]];
            if (index === i) {
                continue;
            } else {
                return [index, i];
            }
        }
    }
};

// 更简单的写法
var twoSum2 = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];
        let other = target - current;
        let otherIndex = map[other];
        if (otherIndex !== undefined && otherIndex !== i) {
            return [otherIndex, i]
        }
        map[current] = i
    }
};