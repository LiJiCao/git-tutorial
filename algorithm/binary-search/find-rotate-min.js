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