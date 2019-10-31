// 590. N叉树的后序遍历
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
var postorder = function(root) {
    let result = []
    if (!root) return result

    function bianli(point) {
        if (!point) return
        if (point.children) {
            point.children.forEach(e => bianli(e))
        }
        result.push(point.val)
    }

    bianli(root)
    return result
};