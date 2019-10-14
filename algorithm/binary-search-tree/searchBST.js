// 700. 二叉搜索树的搜索

var searchBST = function(root, val) {
    if (root === null) return null
    if (root.val === val) {
        return root
    } else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};