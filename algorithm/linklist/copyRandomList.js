/**
 * 138. 复制带随机指针的链表
 * 给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
 * 要求返回这个链表的深拷贝。
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
// 使用递归

var copyRandomList = function (head) {
    function copy(node, visited) {
        if (node == null) {
            return null;
        }
        if (visited.has(node)) {
            return visited.get(node);
        }
        const newNode = new Node(node.val, null, null);
        visited.set(node, newNode);
        newNode.next = copy(node.next, visited);
        newNode.random = copy(node.random, visited);
        return newNode;
    }

    const visited = new Map();
    return copy(head, visited);
};