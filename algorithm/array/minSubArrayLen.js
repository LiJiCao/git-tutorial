/**
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，
 * 找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let n = nums.length
    let l = 0
    let r = -1 // nums[l, r]为滑动窗口
    let res = n + 1
    let sum = 0
    while (l < n) {
        if (r + 1 < n && sum < s) {
            r++
            sum += nums[r]
        } else {
            sum -= nums[l++]
        }
        if (sum >= s) res = Math.min(res, r - l + 1)
        console.log(r, l, sum, res)
        console.log('--------------')
    }
    // res没有更新,没有结果
    if (res == n + 1) return 0;
    return res;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))