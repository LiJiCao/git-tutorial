// 98. 验证二叉搜索树

// 中序遍历,暴力计算
var isValidBST = function(root) {
    let arr = []
    bianli(root, arr)
    // 判断数组是否是排序的
    if (arr.length > 1) {
        let i = 0, j = 1, len = arr.length
        while (j < len) {
            if (arr[i] >= arr[j]) {
                return false
            }
            i++
            j++
        }
    }
    return true
};

function bianli(root, arr) {
    if (root === null) return
    bianli(root.left, arr)
    arr.push(root.val)
    bianli(root.right, arr)
}

// 递归方法
var isValidBST2 = function(root) {
    return bianli2(root, null, null)
};

// 节点、上界和下界
function bianli2(node, lower, upper) {
    if (!node) return true
    let val = node.val
    if (lower !== null && val <= lower) return false
    if (upper !== null && val >= upper) return false

    if (!bianli2(node.right, val, upper)) return false
    if (!bianli2(node.left, lower, val)) return false
    return true;
}

// 迭代方法
var isValidBST3 = function(root) {
    let stack = [], lowers = [], uppers = []
    // 节点、上界和下界
    function update(node, lower1, upper1) {
        stack.push(node)
        lowers.push(lower1)
        uppers.push(upper1)
    }

    let lower = null, upper = null, val
    update(root, lower, upper)
    while (stack.length > 0) {
        root = stack.pop()
        lower = lowers.pop()
        upper = uppers.pop()
        if (root === null) continue
        val = root.val
        if (lower !== null && val <= lower) return false;
        if (upper !== null && val >= upper) return false;
        update(root.right, val, upper)
        update(root.left, lower, val)
    }
    return true
};

// 中序遍历
var isValidBST4 = function(root) {
    let stack = []
    let inorder = -Infinity

    while (stack.length > 0 || root != null) {
        while (root != null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (root.val <= inorder) return false;
        inorder = root.val;
        root = root.right;
    }
    return true
}