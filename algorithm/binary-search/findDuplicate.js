/**
 * 287. 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），
 * 可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-the-duplicate-number
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let n = nums.length;
    let arr = new Array(n).fill(0);
    let l = 0, r = n - 1;
    while (l <= r) {
        arr[nums[l] - 1]++;
        arr[nums[r] - 1]++;
        if (arr[nums[l] - 1] > 1) {
            return nums[l];
        }
        if (arr[nums[r] - 1] > 1) {
            return nums[r];
        }
        l++;
        r--;
    }
    return -1;
};

var findDuplicate2 = function (nums) {
    let val;
    for (let i = 0; i < nums.length; i++) {
        val = Math.abs(nums[i]);
        if (nums[val] < 0) return val;
        nums[val] = -Math.abs(nums[val]);
    }
};

// 弗洛伊德的乌龟和兔子（循环检测）
var findDuplicate3 = function (nums) {
    let tortoise = hare = nums[0];
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare)

    let ptr1 = nums[0];
    let ptr2 = tortoise;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }

    return ptr1;

};