/**
 * 652. 寻找重复的子树
 * 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。
 * 两棵树重复是指它们具有相同的结构以及相同的结点值。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let res = [];
    if (root === null) {
        return res;
    }
    saveRoute(root, res, map);
    return res;
};

var saveRoute = (node, res, map) => {
    if (!node) {
        return '';
    }
    let route = `${node.val}, ${saveRoute(node.left, res, map)}, ${saveRoute(node.right, res, map)}`;
    if (map.hasOwnProperty(route)) {
        if (map[route] === 1) {
            res.push(node);
            map[route]++;
        }
    } else {
        map[route] = 1;
    }
    return route;
}

// 有相同的子树就是有相同的路径
var findDuplicateSubtrees2 = function(root) {
    if (!root) return [];
    var all = {};
    var dups = {};
    findAllSubtrees(root, all, dups);
    return Object.keys(dups).map(k => dups[k]);
};

var findAllSubtrees = function(root, allPaths, dupPaths) {
    // 打印一条路径，方便边遍历边计算
    var path = root.val + '#';
    if (root.left) {
        path += findAllSubtrees(root.left, allPaths, dupPaths);
    }
    path += '#';
    if (root.right) {
        path += findAllSubtrees(root.right, allPaths, dupPaths);
    }
    // 判断该路径是否遍历过
    if (allPaths[path] && !dupPaths[path]) {
        dupPaths[path] = root;
    }
    allPaths[path] = root;
    return path;
}