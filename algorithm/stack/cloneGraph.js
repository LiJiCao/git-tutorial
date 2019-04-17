/**
 * 133. 克隆图
 * 给定无向连通图中一个节点的引用，返回该图的深拷贝（克隆）。
 * 图中的每个节点都包含它的值 val（Int） 和其邻居的列表（list[Node]）。
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
    return clone2()(node)
};

var clone2 = function() {
    let map = {}
    return function clone(node) {
        if (node === null) return null
        if (map.hasOwnProperty(node.val)) {
            return map[node.val]
        }
        let newNode = new Node(node.val, []);
        map[newNode.val] = newNode
        // console.log(node.neighbors.length)
        for (let i = 0; i < node.neighbors.length; i++) {
            newNode.neighbors.push(clone(node.neighbors[i]))
        }
        return newNode
    }
}