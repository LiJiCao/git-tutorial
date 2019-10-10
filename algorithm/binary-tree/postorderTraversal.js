// 二叉树后序遍历
const postorderTraversal = function(root) {
    let result = []
    function bianli(p) {
        if (p) {
            bianli(p.left)
            bianli(p.right)
            result.push(p.val)
        }
    }
    bianli(root)
    return result
};

var postorderTraversal2 = function(root) {
    if (root === null) {
        return [];
    }
    let result = [], stack = [root];
    let cur = null;
    while (stack.length > 0) {
        cur = stack.pop();
        result.unshift(cur.val);
        if (cur.left !== null) {
            stack.push(cur.left);
        }
        if (cur.right !== null) {
            stack.push(cur.right);
        }
    }
    return result;
};