/**
 * 494. 目标和
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。
 * 对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。
 * 返回可以使最终数组和为目标数 S 的所有添加符号的方法数。
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// 暴力dfs
var findTargetSumWays = function(nums, S) {
    let DFS = dfs(S, nums),
        time = {count: 0}
    DFS(0, 0, 1, time)
    DFS(0, 0, -1, time)
    return time.count
};

var dfs = function (S, nums) {
    let n = nums.length
    return function dfs2 (startIndex, sum, multi, time) {
        let newSum = sum + nums[startIndex] * multi
        if (startIndex === n - 1) {
            if (newSum === S) {
                time.count++
            }
            return
        } else {
            dfs2(startIndex + 1, newSum, 1, time)
            dfs2(startIndex + 1, newSum, -1, time)
        }
    }
}

/**
 * sum(P) - sum(N) = target
 * sum(P) + sum(N) + sum(P) - sum(N) = target + sum(P) + sum(N)
 * 2 * sum(P) = target + sum(nums)
 * 题目转变为求P的个数
 */
var findTargetSumWays2 = function(nums, S) {
    let sum = 0
    for (let i of nums) {
        sum += i
    }
    return sum < S || (S + sum) % 2 > 0 ? 0 : subsetSum(nums, (S + sum) >>> 1)
};

var subsetSum = function(nums, S) {
    let dp = [], i = 0
    while (i < S + 1) {
        dp[i] = 0
        i++
    }
    dp[0] = 1
    console.log(dp)
    // 每次迭代，将每次的和的可能性存起来
    for (let n of nums) {
        for(let i = S; i >= n; i--) {
            dp[i] += dp[i - n]
        }
        console.log('和为', n, dp)
    }
    return dp[S]
}

console.log(findTargetSumWays2([1, 2, 3, 4, 5], 3))