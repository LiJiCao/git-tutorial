/**
 * 峰值元素是指其值大于左右相邻值的元素。
 * 给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。
 * 你可以假设 nums[-1] = nums[n] = -∞。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-peak-element
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length, l = 0, r = n - 1;
    if (nums[l] > nums[l + 1]) {
        return 0;
    }
    if (nums[r] > nums[r - 1]) {
        return r;
    }
    while (l < r) {
        let mid = l + ((r - l) >>> 1);
        if (nums[mid] > Math.max(nums[mid - 1], nums[mid + 1])) {
            return mid;
        } else if (nums[mid] < nums[mid - 1]) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

// 二分查找的关键：判断区间的情况以及缩小范围的情况
var findPeakElement2 = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (r > l) {
        const mid = l + Math.floor((r - l) / 2);
        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
};