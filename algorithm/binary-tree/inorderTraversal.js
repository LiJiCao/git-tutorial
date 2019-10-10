// 二叉树的中序遍历


var inorderTraversal2 = function(root) {
    let stack = [], result = []
    if (root === null) return []
    while (root !== null || stack.length > 0) {
        if(root !== null) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            result.push(root.val)
            root = root.right
        }
    }

    return result
};