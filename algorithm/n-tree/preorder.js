// 589. N叉树的前序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = []
    if (!root) return result

    function bianli(point) {
        if (!point) return
        result.push(point.val)
        if (point.children) {
            point.children.forEach(e => bianli(e))
        }
    }

    bianli(root)
    return result
};