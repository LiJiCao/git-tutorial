/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n = nums.length, l = 0, r = n - 1, result = [];
    while (l + 1 < r) {
        let mid = l + ((r - l) >>> 1);
        if (nums[mid] === target) {
            l = mid;
            while (nums[l - 1] === target) {
                l--;
            }
            r = mid;
            while (nums[r + 1] === target) {
                r++;
            }
            return [l, r];
        } else if (nums[mid] > target) {
            r = mid;
        } else {
            l = mid;
        }
    }
    if (nums[l] === target && nums[r] === target) {
        return [l, r];
    } else if (nums[r] === target) {
        return [r, r];
    } else if (nums[l] === target) {
        return [l, l];
    }
    return [-1, -1];
};

var left = -1;
var right = -1;

var searchRange2 = function(nums, target) {
    left = right = -1;
    binarySearch(nums, 0, nums.length - 1, target);
    return [left, right];
};

var binarySearch = function (nums, start, end, target) {
    if (start > end) return -1;

    var mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
        if (nums[mid - 1] !== target) {
            left = mid;
        } else {
            binarySearch(nums, start, mid - 1, target);
        }

        if (nums[mid + 1] !== target) {
            right = mid;
        } else {
            binarySearch(nums, mid + 1, end, target);
        }
    } else if (nums[mid] > target) {
        binarySearch(nums, start, mid - 1, target);
    } else {
        binarySearch(nums, mid + 1, end, target);
    }
}