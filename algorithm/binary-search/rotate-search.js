/**
 * 33. 搜索旋转排序数组
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * @param nums
 * @param target
 * @returns {*}
 */
// 用二分法查找旋转元素，再用二分法搜索元素
// 注意'='的判断条件
var search = function (nums, target) {
    let n = nums.length;
    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1;
    }

    let rotate_search = (l, r) => {
        if (nums[l] < nums[r]) {
            return 0;
        }
        while (l <= r) {
            let mid = (l + r) >>> 1;
            if (nums[mid] > nums[mid + 1]) {
                return mid + 1;
            } else {
                if (nums[mid] >= nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return 0;
    }

    let binary_search = (l, r) => {
        while (l <= r) {
            let mid = (l + r) >>> 1;
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return -1;
    }


    let r_index = rotate_search(0, n - 1);
    if (nums[r_index] === target) {
        return r_index;
    }
    if (r_index === 0) {
        return binary_search(0, n - 1);
    }
    if (target < nums[0]) {
        return binary_search(r_index, n - 1);
    }
    return binary_search(0, r_index);
};

// 区域判断：有序区域和无序区域
var search2 = function (nums, target) {
    if (!nums.length) {
        return -1
    }
    let length = nums.length
    let left = 0
    let right = length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        // 不断缩小范围直至区域有序
        if (nums[mid] >= nums[left]) {
            //左边区域有序
            //有序区域
            if (nums[mid] > target && target >= nums[left]) {
                right = mid - 1
            } else {
                //无序区域
                left = mid + 1
            }
        } else {
            if (target <= nums[right] && nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};