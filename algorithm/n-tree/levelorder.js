// 429. N叉树的层序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) {
        return []
    }
    var sta = [];
    var res = [];

    function trans(root, deep) {
        sta.push(root);
        if (!res[deep]) {
            res[deep] = []
        }
        var dummy = sta.pop();
        res[deep].push(dummy.val)
        if (dummy.children) {
            dummy.children.forEach(e => trans(e, deep + 1))
        }
    }

    trans(root, 0)
    return res
};