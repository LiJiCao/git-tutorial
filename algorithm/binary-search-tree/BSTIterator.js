// 173. 二叉搜索树迭代器
// 使用栈的方法中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = []
    while (root) {
        this.stack.push(root)
        root = root.left
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let temp = this.stack.pop()
    if (temp.right) {
        this.stack.push(temp.right)
        let t = temp.right
        while (t.left !== null) {
            this.stack.push(t.left)
            t = t.left
        }
    }
    return temp.val
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */