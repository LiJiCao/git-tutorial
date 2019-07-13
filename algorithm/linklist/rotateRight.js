/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 使用数组
var rotateRight = function (head, k) {
    let stack = [];
    if (!head || !head.next || k === 0) {
        return head;
    }
    let tail = head;
    while (tail) {
        stack.push(tail);
        tail = tail.next;
    }
    let len = stack.length;
    stack[len - 1].next = head;
    for (let i = 0, count = k % len; i < count; i++) {
        stack.unshift(stack.pop());
    }
    stack[len - 1].next = null;

    return stack[0];
};

// 循环次数为 n - k % n
var rotateRight2 = function (head, k) {
    if (head == null || head.next == null)
        return head;
    var tail = head;
    var n = 1;
    while (tail.next) {
        tail = tail.next;
        n++;
    }
    tail.next = head;
    var a = n - k % n;
    while (a > 0) {
        head = head.next;
        a--;
    }
    while (tail.next !== head) {
        tail = tail.next;
    }
    tail.next = null;
    return head
};