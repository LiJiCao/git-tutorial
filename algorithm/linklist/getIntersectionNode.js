/**
 * 160. 相交链表
 * 编写一个程序，找到两个单链表相交的起始节点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let cA = headA, cB = headB, hasSet = new Set()
    while (cA) {
        hasSet.add(cA)
        cA = cA.next
    }
    while (cB) {
        if (hasSet.has(cB)) {
            return cB
        }
        cB = cB.next
    }
    return null
};

var getIntersectionNode2 = function(headA, headB) {
    if (headA === null || headB === null) return null;
    // 定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
    // 两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度

    let p = headA, q = headB;
    while(p != q) {
        // 在这里第一轮体现在pA和pB第一次到达尾部会移向另一链表的表头,
        // 而第二轮体现在如果pA或pB相交就返回交点, 不相交最后就是null==null
        p = p === null ? headB : p.next;
        q = q === null ? headA : q.next;
    }
    return p;
};
