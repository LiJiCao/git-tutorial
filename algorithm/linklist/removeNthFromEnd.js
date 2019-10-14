/**
 * 19. 删除链表的倒数第n个节点
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 一次遍历
var removeNthFromEnd = function (head, n) {
    let nodefront = head, nodeback = head, bback = null, i = 1
    while (nodefront.next) {
        if (i < n) {
            nodefront = nodefront.next
        } else {
            bback = nodeback
            nodeback = nodeback.next
            nodefront = nodefront.next
        }
        i++
    }
    if (bback) {
        // 不是头结点
        bback.next = nodeback.next
    } else if (i === n) {
        // 删除头结点
        return nodeback.next
    }

    return head
};

// 两次遍历
var removeNthFromEnd2 = function (head, n) {
    let p1 = head, p2 = head;
    // 移动n个元素
    for (let i = 0; i <= n; i++) {
        if (p1 === null) {
            return p2.next;
        }
        p1 = p1.next;
    }
    // 将p2移动到倒数第n+1个位置
    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    // 删除第n个位置
    p1 = p2.next;
    p2.next = p1.next;
    p1.next = null;
    return head
};