// 559. N叉树的最大深度
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    if (root.children) {
        let depth = 0
        root.children.forEach(e => {
            let d = maxDepth(e)
            if (d > depth) {
                depth = d
            }
        })
        return depth + 1
    } else {
        return 1
    }
};