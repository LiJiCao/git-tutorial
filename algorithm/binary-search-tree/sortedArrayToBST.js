// 108. 将有序数组转换为平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return ToBST(nums, 0, nums.length - 1);
};

// 二分法
function ToBST(nums, left, right) {
    if (left > right) return null; // 定义的二分区间为[left,right]，无法进行继续递归，直接退出
    let mid = Math.floor((left + right) / 2) // 二分中值
    let root = new TreeNode(nums[mid]);
    root.left = ToBST(nums, left, mid - 1); // 注意mid-1 对左半部分进行递归
    root.right = ToBST(nums, mid + 1, right); // 注意mid+1 对右半部分进行递归
    return root;
}
