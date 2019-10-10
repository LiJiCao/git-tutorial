// 106. 从中序与后序遍历序列构造二叉树

let postIndex = 0
var buildTree = function (inorder, postorder) {
    let ilen = inorder.length, plen = postorder.length
    if (plen === 0) return null
    postIndex = plen - 1
    return rebuildTree(inorder, postorder, 0, ilen - 1)
};

function rebuildTree(inorder, postorder, left, right) {
    // 节点遍历完毕
    if (postIndex < 0) return null
    // 没有左右孩子
    if (left > right) return null

    let node = new TreeNode(postorder[postIndex--])
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

    node.right = rebuildTree(inorder, postorder, cut + 1, right)
    node.left = rebuildTree(inorder, postorder, left, cut - 1)
    return node
}


// 方法二：找边界索引
let map = new Map()
let postorder2 = []
var buildTree2 = function(inorder, postorder) {
    let ilen = inorder.length, plen = postorder.length
    if(plen === 0 || plen !== ilen) return null

    postorder2 = postorder
    for (let i = 0; i < ilen; i++) {
        map.set(inorder[i], i)
    }

    return rebuildTree(0, ilen - 1, 0, plen - 1)
};

function rebuildTree2 (inLeft, inRight, postLeft, postRight) {
    if (inLeft > inRight || postLeft > postRight) {
        return null
    }

    let pivot = postorder2[postRight], pivotIndex = map.get(pivot)
    let node = new TreeNode(pivot)
    // 解方程postRight - 1 - x = inRight - (pivotIndex + 1)
    node.left = rebuildTree(inLeft, pivotIndex - 1, postLeft, postRight - inRight + pivotIndex - 1)
    node.right = rebuildTree(pivotIndex + 1, inRight, postRight - inRight + pivotIndex, postRight - 1)

    return node
}