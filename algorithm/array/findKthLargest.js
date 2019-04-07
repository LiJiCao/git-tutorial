/**
 * 找出数组中第k大的数
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let n = nums.length
    let i = n - 1
    let maxIndex
    while (i > n - k - 1) {
        maxIndex = i
        for (let j = i; j >= 0; j--) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j
            }
        }
        if (maxIndex !== i) {
            [nums[maxIndex], nums[i]] = [nums[i], nums[maxIndex]]
        }
        console.log(maxIndex, i, nums)
        i--
    }
    return nums[n - k]
};

/**
 * 利用快速排序的思想，从数组 S 中随机找出一个元素 X，把数组分为两部分 Sa 和 Sb。
 * Sa 中的元素大于等于 X，Sb 中元素小于 X。这时有两种情况：
 * Sa 中元素的个数小于 k，则 Sb 中的第 k-|Sa| 个元素即为第k大数；
 * Sa 中元素的个数大于等于 k，则返回 Sa 中的第 k 大数。时间复杂度近似为 O(n)
 * @param nums
 * @param k
 * @returns {*}
 */
var findKthLargest2 = function(nums, k) {
    let n = nums.length
    if (k > n) return
    let index = quickSort(nums, 0, n - 1, k)
    return nums[index]
};

var quick = function (nums) {
    return quickSort2(nums, 0, nums.length - 1)
}

// 快速排序
var quickSort2 = function (nums, l, r) {
    let index
    if (nums.length > 1) {
        index = partition(nums, l, r)
        if (l < index) quickSort2(nums, l, index - 1)
        if (r > index) quickSort2(nums, index + 1, r)
    }
    return nums
}

var quickSort = function (nums, l, r, k) {
    if (l >= r) {
        return l
    }
    // 不断地调整中间位置使得基准索引为k - 1
    let p = partition(nums, l, r)
    console.log(p)
    if (p + 1 === k) {
        return p
    }
    if (p + 1 > k) {
        return quickSort(nums, l, p - 1, k)
    } else {
        return quickSort(nums, p + 1, r, k)
    }
}

var partition = function (nums, l, r) {
    // v: 中间数, j: 中间数索引, 以第一个数作为中间数
    let v = nums[l], j = l, i = l + 1
    while (i <= r) {
        // 让l + 1 到 j索引的数都大于等于 v
        if (nums[i] >= v) {
            [nums[j + 1], nums[i]] = [nums[i], nums[j + 1]]
            j++
        }
        console.log(i, j, nums)
        i++
    }
    [nums[l], nums[j]] = [nums[j], nums[l]]
    console.log(nums)
    console.log('------------------')
    return j
}

console.log(findKthLargest2([3,2,3,1,2,4,5,5,6], 4))