// 701. 二叉搜索树中的插入操作
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root.val > val) {
        if (root.left) {
            insertIntoBST(root.left, val)
        } else {
            root.left = new TreeNode(val)
        }
    } else if (root.right) {
        insertIntoBST(root.right, val)
    } else {
        root.right = new TreeNode(val)
    }
    return root
};