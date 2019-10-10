// 二叉树的层次遍历
var levelOrder = function (root) {
    if (root == null) {
        return []
    }
    var sta = [];
    var res = [];

    function trans(root, deep) {
        sta.push(root);
        if (!res[deep]) {
            res[deep] = []
        }
        var dummy = sta.pop();
        res[deep].push(dummy.val)
        if (dummy.left) {
            trans(dummy.left, deep + 1)

        }
        if (dummy.right) {
            trans(dummy.right, deep + 1)
        }
    }

    trans(root, 0)
    return res
};