/**
 * 155. 寻找排序数组中的最小值
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 请找出其中最小的元素。
 * 你可以假设数组中不存在重复元素。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let n = nums.length, l = 0, r = n - 1;
    if (nums[l] < nums[r]) {
        return nums[l];
    }
    while (l < r) {
        let mid = l + ((r - l) >>> 1);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid] > nums[l]) {
            l = mid + 1;
        } else {
            r = mid;
        }

    }
    return nums[l];
};


/**
 * 154. 寻找旋转排序数组中的最小值 II
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 请找出其中最小的元素。
 * 注意数组中可能存在重复的元素。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findMinRepeat = function (nums) {
    let n = nums.length, l = 0, r = n - 1;

    // 先处理首尾相同的部分
    if (n === 1) {
        return nums[0];
    }

    while (nums[l] === nums[r] && n > 0) {
        nums.push(nums.shift());
        n--;
    }
    if (n === 0) {
        return nums[0];
    }
    if (nums[l] < nums[r]) {
        return nums[l];
    }


    while (l < r) {
        let mid = l + ((r - l) >>> 1);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid] >= nums[l]) {
            l = mid + 1;
        } else {
            r = mid;
        }

    }
    return nums[l];
};

var findMinRepeat2 = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i];
        }
    }
    return nums[0]
};

var findMinRepeat3 = (nums) => {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        // 在这里处理首尾相同的部分
        if (nums[start] === nums[end]) {
            start++;
            continue;
        }
        // 判断方法是比较左右
        if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end = mid
        }
    }

    return nums[start];
};

var findMinRepeat4 = (nums) => {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let mid = l + ((r - l) >>> 1);

        // 判断方法是比较左右
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else if (nums[mid] < nums[r]) {
            r = mid;
        } else {
            r--;
        }
    }

    return nums[l];
};