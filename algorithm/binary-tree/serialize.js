// 297. 二叉树的序列化与反序列化
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    return bianli(root, '')
};

function bianli(point, data) {
    if (point === null) {
        data += 'null,'
    } else {
        data += point.val + ','
        data = bianli(point.left, data)
        data = bianli(point.right, data)
    }
    return data
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let dataArr = data.split(',')
    return bianli2(dataArr)
};

function bianli2 (data) {
    if (data[0] === 'null') {
        data.shift()
        return null
    }

    let node = new TreeNode(data[0])
    data.shift()
    node.left = bianli2(data)
    node.right = bianli2(data)

    return node
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */