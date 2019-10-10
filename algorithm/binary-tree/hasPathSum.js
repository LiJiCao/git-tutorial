/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    // 判断是否是叶子节点
    if (root.left === null && root.right === null) {
        return root.val === sum;
    } else {
        // 不是时，继续寻找路径
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};

var hasPathSum2 = function(root, sum) {
    if (root === null) {
        return false;
    }
    let node_stack = [root];
    let sum_stack = [sum - root.val];

    let cur = null, cur_sum = 0;
    while (node_stack.length > 0) {
        cur = node_stack.pop();
        cur_sum = sum_stack.pop();
        if (cur.left === null && cur.right === null && cur_sum === 0) {
            return true;
        }
        if (cur.right !== null) {
            node_stack.push(cur.right);
            sum_stack.push(cur_sum - cur.right.val);
        }
        if (cur.left !== null) {
            node_stack.push(cur.left);
            sum_stack.push(cur_sum - cur.left.val);
        }
    }
    return false;
};