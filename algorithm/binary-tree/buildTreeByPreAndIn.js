// 105. 从前序与中序遍历序列构造二叉树
let preIndex = 0, len = 0
var buildTree = function (preorder, inorder) {
    let ilen = inorder.length, plen = preorder.length
    if (plen === 0) return null
    preIndex = 0, len = plen
    return rebuildTree(preorder, inorder, 0, ilen - 1)
};

function rebuildTree(preorder, inorder, left, right) {
    // 节点遍历完毕
    if (preIndex > len - 1) return null
    // 没有左右孩子
    if (left > right) return null

    let node = new TreeNode(preorder[preIndex++])
    // 找到划分左右子树的中间点
    let cut = null
    for (let i = left; i <= right; i++) {
        if (inorder[i] === node.val) {
            cut = i
            break
        }
    }
    // 没找到时表示叶子节点
    if (cut === null) return null

    node.left = rebuildTree(preorder, inorder, left, cut - 1)
    node.right = rebuildTree(preorder, inorder, cut + 1, right)
    return node
}