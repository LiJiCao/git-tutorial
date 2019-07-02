/**
 * 203. 移除链表元素
 * 删除链表中等于给定值 val 的所有节点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head, prev = null
    while (cur) {
        if (cur.val === val) {
            if (prev) {
                prev.next = cur.next
                cur = prev.next
            } else {
                head = cur.next
                cur = cur.next
            }
        } else {
            prev = cur
            cur = cur.next
        }
    }
    return head
};

const removeElements2 = (head, val) => {
    // 直接先去掉头部val元素
    while (head && head.val === val) head = head.next;
    if (!head) return head;

    let cur = head;
    while (cur.next) {
        if (val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return head;
};