/**
 * 328. 奇偶链表
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
 * 请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 创建奇数偶数位置的链表再组合起来
var oddEvenList = function (head) {
    let odd = head
    if (!odd || !odd.next) return odd
    let even = even2 = odd.next, i = 3, cur = even.next
    while (cur) {
        if (i % 2 === 0) {
            even2.next = cur
            even2 = even2.next
        } else {
            odd.next = cur
            odd = odd.next
        }
        cur = cur.next
        i++
    }
    odd.next = even
    even2.next = null
    return head
};

var oddEvenList2 = function (head) {
    let cur = head;
    if (!head) return head;
    let odd = head.next;
    // cur：奇数位指针，odd：偶数位指针
    // 每次迭代将odd后面两位分别插入到cur后和odd后
    while (1) {
        if (!odd) return head
        let next = odd.next;
        if (!next) return head
        odd.next = odd.next.next;
        next.next = cur.next;
        cur.next = next;
        cur = next;
        odd = odd.next;
    }
};