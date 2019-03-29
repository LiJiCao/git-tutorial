// 去重
/**
 * 定义 nums[0...i] 为为非重复数列，遍历整个数列不断的维护这个定义。
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let j = 0
    let n = nums.length
    if (n <= 1) return n
    while (j < n - 1) {
        if (nums[j] !== nums[j + 1]) {
            i++
            nums[i] = nums[j + 1]
        }
        j++
    }
    return i + 1
};

// console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]))

// 去重：最多不重复2次
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeTimesDuplicates = function(nums, times) {
    let n = nums.length
    if (n <= times) return n; 
    let i = -1
    let j = 0
    // 记录当前值和重复次数
    let cur = null
    let rep = 1
    while (j < n) {
        // 当前值与数组值相同时
        if (nums[j] === cur) {
            // 增加重复次数
            rep++
            if (rep <= times) {
                // 次数小于2时，去重数组赋值
                nums[i + 1] = nums[j]
                i++
            }
        } else {
            // 不同时重置当前值
            cur = nums[j]
            nums[i + 1] = nums[j]
            rep = 1
            i++
        }
        j++
    }
    return nums.splice(0, i + 1)
};

/**
 * 定义 nums[0...i] 满足每个元素最多出现两次，初始值 i=-1，遍历整个数列不断的维护这个定义。
 * @param {*} nums 
 */
var removeTimesDuplicates2 = function(nums) {
    let n = nums.length
    let i = 1
    let k = 0
    let j = 2
    if (n <= 2) return n
    while (j < n) {
        if (nums[j] !== nums[i] || (nums[j] === nums[i] && nums[j] !== nums[k])) {
            k = i
            nums[i + 1] = nums[j]
            i++
        }
        j++
    }
    return nums
};

console.log(removeTimesDuplicates([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5], 5))