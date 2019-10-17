// 110. 平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    let l = getHeight(root.left), r = getHeight(root.right)
    return Math.abs(l - r) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function getHeight(root) {
    if (!root) return 0
    return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}

// 比较优雅的写法：不用true和false作为返回
var isBalanced2 = function(root) {
    return depth(root) != -1;
};

function depth(root) {
    if (root === null) return 0;
    let left = depth(root.left);
    if(left === -1) return -1;
    let right = depth(root.right);
    if(right === -1) return -1;
    return Math.abs(left - right) <= 1 ? Math.max(left, right) + 1 : -1;
}