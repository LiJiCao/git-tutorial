/**
 * 136. 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 */
// 哈希表操作：popitem
var singleNumber = function(nums) {
    let hashSet = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hashSet.hasOwnProperty(nums[i])) {
            hashSet[nums[i]] = i;
        } else {
            delete hashSet[nums[i]];
        }
    }
    for (let key in hashSet) {
        return key;
    }
};

// 数学: 2 * (a + b + c) - (a + a + b + b + c) = c
var singleNumber2 = function(nums) {
    var sum = (arr) => arr.reduce((a, b) => a + b);
    return sum(Array.from(new Set(nums))) * 2 - sum(nums);
};

// 异或: a^0 = a, a^a = 0, a^b^a = (a^a)^b = b
var singleNumber3 = function(nums) {
    let a = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        a ^= nums[i];
    }
    return a;
};