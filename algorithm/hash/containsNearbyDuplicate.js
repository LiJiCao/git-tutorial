/**
 * 存在重复元素 II
 * 给定一个整数数组和一个整数 k，
 * 判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!map.hasOwnProperty(nums[i])) {
            map[nums[i]] = i;
        } else if (i - map[nums[i]] <= k) {
            return true;
        } else {
            map[nums[i]] = i;
        }
    }
    return false;
};

var containsNearbyDuplicate2 = function(nums, k) {
    var map = new Map();
    var flag = false;
    for (var i = 0; i < nums.length; ++i) {
        var num = nums[i];
        if (map.has(num)) {
            var diff = Math.abs(map.get(num) - i);
            if (diff <= k) {
                return true;
            }
        }
        map.set(num, i);

    }
    return flag;
};