// 220. 存在重复元素 III
// 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，
// 使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。

// 使用set保存k长度的滑动窗口
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let n = nums.length
    if (n <= 1) return false
    let result = false
    // set为k子数组里的集合
    let recode = new Set()
    for (let i = 0; i < n; i++) {
        if (t === 0) {
            if (recode.has(nums[i])) {
                return true
            }
        } else {
            for (let e of recode) {
                if (Math.abs(nums[i] - e) <= t) {
                    return true
                }
            }
        }
        recode.add(nums[i])
        if (recode.size > k) {
            recode.delete(nums[i - k])
        }
    }
    return false
};