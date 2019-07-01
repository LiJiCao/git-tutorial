/**
 * 234. 回文链表
 * 请判断一个链表是否为回文链表。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 头尾指针碰撞
const isPalindrome = head => {
    if (!head) return true

    let tail = head
    // 添加反向指针
    while (tail.next) {
        tail.next.prev = tail
        tail = tail.next
    }
    // 尾指针与头指针判断
    while (tail !== head && tail.next !== head) {
        if (tail.val !== head.val) return false
        head = head.next
        tail = tail.prev
    }

    return true
}

// 使用数组
var isPalindrome2 = function(head) {
    let arr = []
    while(head) {
        if (head.hasOwnProperty('val')) arr.push(head.val)
        head = head.next
    }
    while(arr.length > 1) {
        if((arr.shift()) !== (arr.pop())) return false
    }
    return true
};