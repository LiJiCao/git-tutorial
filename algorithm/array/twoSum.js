/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 碰撞指针法，从头尾开始查找
var twoSum = function(numbers, target) {
    let n = numbers.length, i = 0, j = n - 1
    while (i !== j) {
        if (numbers[i] + numbers[j] > target) {
            j--
        } else if (numbers[i] + numbers[j] < target) {
            i++
        } else {
            return [i + 1, j + 1]
        }
    }
    return []
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 二分查找法：从遍历每个值直到找到对应的值
var twoSum2 = function(numbers, target) {
    let n = numbers.length, i = 0
    while (i < n) {
        let j = binarySearch(numbers, target - numbers[i], i + 1, n - 1)
        console.log(j, i)
        if (j > i) {
            return [i + 1, j + 1]
        }
        i++
    }
    return []
};
var binarySearch = (numbers, value, low, high) => {
    if (low <= high) {
        let mid = Math.floor((low + high) / 2)
        const element = numbers[mid]
        if (value < element) {
            return binarySearch(numbers, value, low, mid - 1)
        }
        if (value > element) {
            return binarySearch(numbers, value, mid + 1, high)
        }
        return mid
    }
    return -1
}

console.log(twoSum2([0, 0, 3, 4], 0))