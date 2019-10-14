/**
 * 704. 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param nums
 * @param target
 * @returns {number}
 */

// 模板1
// l + r的值可能会超出数的上限
var search = function (nums, target) {
    let n = nums.length;
    let l = 0, r = n - 1;
    while (l <= r) {
        let mid = (l + r) >>> 1;
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
};

// 模板2
// 可以用来寻找边界
var search2 = function (nums, target) {
    let n = nums.length;
    if (n === 0) {
        return -1;
    }
    let l = 0, r = n - 1;
    while (l < r) { // 不同的地方
        let mid = l + ((r - l) >>> 1);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid; // 不同的地方
        } else {
            return mid;
        }
    }
    // 跳出结果 l === r
    if (l !== nums.length && nums[l] === target) {
        return l;
    }
    return -1;
};