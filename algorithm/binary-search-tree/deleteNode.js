// 450. 删除二叉搜索树中的节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) return root
    // 递归
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }
    // 没有子节点
    if (root.left === null && root.right === null) {
        root = null
        return root
    }
    // 只有一个子节点
    if (root.left === null) {
        root = root.right
        return root
    }
    if (root.right === null) {
        root = root.left
        return root
    }
    // 有两个子节点，找子树中最左边的节点替换
    let cur = root.right
    while (cur && cur.left) {
        cur = cur.left
    }
    root.val = cur.val
    root.right = deleteNode(root.right, cur.val)
    return root
};