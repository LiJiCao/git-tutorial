/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组
 * 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 简单暴力的选择排序
var sortColors = function(nums) {
    let n = nums.length
    let minIndex
    for (let i = 0; i < n - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            swap(nums, i, minIndex)
        }
    }
};

var swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

// 基数排序法：记录出现次数的排序方法
var sortColors2 = function (nums) {
    let repeatNum = [0, 0, 0], n = nums.length
    for (let j = 0; j < n; j++) {
        repeatNum[nums[j]]++
    }
    let i = 0, k = 0
    while (i < n && k < repeatNum.length) {
        if (repeatNum[k] > 0) {
            nums[i] = k
            repeatNum[k]--
            i++
        } else {
            k++
        }
    }
    return nums
}

// 三路快速排序方法: 记录出现次数的排序方法
var sortColors3 = function (nums) {
    let n = nums.length
    let lt = -1, gt = n, i = 0
    while (i < gt) {
        if (nums[i] === 0) {
            lt++
            [nums[i], nums[lt]] = [nums[lt], nums[i]]
            i++
        } else if (nums[i] === 2) {
            gt--
            [nums[i], nums[gt]] = [nums[gt], nums[i]]
        } else {
            i++
        }
    }
}

console.log(sortColors3([1, 2, 0, 0, 2, 1]))