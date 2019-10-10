// 二叉树的前序遍历

const preorderTraversal = function(root) {
    let result = []
    function bianli(p) {
        if (p) {
            result.push(p.val)
            bianli(p.left)
            bianli(p.right)
        }
    }
    bianli(root)
    return result
};

const preorderTraversal2 = function(root) {
    let result = [], stack = [];
    let cur = root;
    while (cur !== null || stack.length > 0) {
        if (cur !== null) {
            result.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop().right;
        }
    }
    return result;
};