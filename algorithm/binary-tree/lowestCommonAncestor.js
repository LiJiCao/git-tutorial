// 236. 二叉树的最近公共祖先
let answer = null
var lowestCommonAncestor = function (root, p, q) {
    recurseTree(root, p, q)
    return answer
};

function recurseTree(current, p, q) {
    if (!current) return false
    // 左子树是否存在
    let left = recurseTree(current.left, p, q) ? 1 : 0
    // 右子树是否存在
    let right = recurseTree(current.right, p, q) ? 1 : 0
    // 如果当前节点是p或者q
    let mid = (current === p || current === q) ? 1 : 0
    // 如果当前节点满足三个中其中两个
    if (mid + left + right >= 2) {
        answer = current
    }
    // Return true if any one of the three bool values is True.
    return (mid + left + right > 0)
}

var lowestCommonAncestor2 = function (root, p, q) {
    if (root === null || root === p || root === q) return root
    let left = lowestCommonAncestor2(root.left, p, q)
    let right = lowestCommonAncestor2(root.right, p, q)
    // 如果左右子树存在，那返回root，左右子树都不存在，返回null，其中一个子树存在，返回该子树节点
    return left === null ? right : (right === null ? left : root)
};