/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 * @returns {*}
 */
// 尾插法
var merge = function(nums1, m, nums2, n) {
    let i = m, j = n
    if (i === 0 && j > 0) {
        while (j > 0) {
            nums1[j - 1] = nums2[j - 1]
            j--
        }
        return
    }
    while (j > 0 && i > 0) {
        if (nums1[i - 1] > nums2[j - 1]) {
            nums1[i + j - 1] = nums1[i - 1]
            i--
        } else {
            nums1[i + j - 1] = nums2[j - 1]
            j--
        }
    }
    // 如果i已经赋完值，那么把nums2的剩余元素赋给nums1
    if (i === 0) {
        while (j > 0) {
            nums1[j - 1] = nums2[j - 1]
            j--
        }
    }
    return nums1
};

// 优雅的尾插法
var merge2 = function(nums1, m, nums2, n) {
    if (n === 0) return
    if (m === 0) {
        let x = n - 1
        while (x >= 0) {
            nums1[x] = nums2[x]
            x--
        }
        return
    }
    let k = m + n - 1
    let i = m - 1
    let j = n - 1

    while (k >= 0) {
        // 赋值nums1的情况: nums1[i]存在或者nums2以及赋值完但nums1还没赋值完
        if ((nums1[i] > nums2[j] && i >= 0) || (j < 0 && i >= 0)) {
            nums1[k] = nums1[i]
            k--
            i--
        }
        // 赋值nums2的情况: nums2[j]存在或者nums1以及赋值完但nums2还没赋值完
        if ((nums1[i] <= nums2[j] && j >= 0) || (i < 0 && j >= 0)) {
            nums1[k] = nums2[j]
            k--
            j--
        }
    }
};

// 创建新数组赋值法
var merge3 = function(nums1, m, nums2, n) {
    if (n === 0) return
    let newArr = []
    let i = 0, j = 0
    while (i < m || j < n) {
        if ((nums1[i] < nums2[j] && i < m) || (i < m && j === n)) {
            newArr.push(nums1[i])
            i++
        }
        if ((nums1[i] >= nums2[j] && j < n) || (i === m && j < n)) {
            newArr.push(nums2[j])
            j++
        }
    }
    for (let x = 0; x < newArr.length; x++) {
        nums1[x] = newArr[x]
    }
    return nums1
};

console.log(merge3([2,0], 1, [1], 1))