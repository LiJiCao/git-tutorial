/**
 * 724. 寻找数组的中心索引
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
 * 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * @param {number[]} nums
 * @return {number}
 */

// 索引遍历
var pivotIndex = function (nums) {
    let n = nums.length, i = 0, sum = 0
    if (n < 3) return -1
    while (i < n) {
        sum += nums[i]
        i++
    }
    i = 0
    // left, right 分别是左边的和、右边的和
    let left = 0, right = sum - nums[0]
    while (i < n) {
        if (left === right) {
            return i
        }
        i++
        left += nums[i - 1]
        right -= nums[i]
    }
    return -1
};

// 半数方法，找到和为一半的索引
var pivotIndex2 = function (nums) {
    let sum = 0;
    let _sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        if ((sum - nums[i]) % 2 === 0) {
            if (sum - nums[i] === _sum * 2) {
                return i;
            }
        }
        _sum += nums[i];
    }
    return -1;
};