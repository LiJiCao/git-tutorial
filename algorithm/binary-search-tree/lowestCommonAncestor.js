/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return root
    // 如果节点位于左右子树的中间，返回该节点
    if ((root.val > p.val && root.val < q.val) || (root.val > q.val && root.val < p.val)) {
        return root
    }
    // 这之后的情况表示p和q节点都在一侧，那公共祖先就是p或q
    if (root === p || root === q) {
        return root
    }
    // 确定节点的移动方向
    if (root.val > p.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else {
        return lowestCommonAncestor(root.right, p, q)
    }
};