// 移除指定元素
/**
 * 定义 nums[0...i] 为非 val 的数列，遍历整个数列不断的维护这个定义
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0
    while (index < nums.length) {
        if (nums[index] === val) {
            nums.splice(index, 1)
        } else {
            index++
        }
    }
    return nums.length
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function(nums, val) {
    let i = -1
    let n = nums.length
    let j = 0
    while (j < n) {
        if (nums[j] !== val) {
            i++
            nums[i] = nums[j]
        }
        j++
    }
    return i + 1
};