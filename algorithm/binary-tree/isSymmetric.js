/**
 * 101. 对称二叉树
 * 给定一个二叉树，检查它是否是镜像对称的。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root, root);
};

// 用两个移动指针
// 对称条件：值相同、左子树与右子树对称
var isMirror = (t1, t2) => {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}

// 迭代方法，注意插入队列的顺序
var isSymmetric2 = function(root) {
    let q = [];
    q.push(root, root);
    while (q.length > 0) {
        let t1 = q.shift();
        let t2 = q.shift();
        if (t1 === null && t2 === null) {
            continue;
        }
        if (t1 === null || t2 === null) {
            return false;
        }
        if (t1.val !== t2.val) {
            return false;
        }
        q.push(t1.left);
        q.push(t2.right);
        q.push(t1.right);
        q.push(t2.left);
    }

    return true;
};