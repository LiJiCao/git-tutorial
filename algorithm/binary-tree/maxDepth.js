// 二叉树的最大深度
var maxDepth = function (root) {
    if (!root) {
        return 0
    }
    else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }

};