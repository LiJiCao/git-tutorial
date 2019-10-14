/**
 * 142. 环形链表II
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。
 * 说明：不允许修改给定的链表。
 *
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

// 遍历节点判断节点是否已访问过
var detectCycle = function(head) {
    let current = head, map = {}
    while (current) {
        if (map.hasOwnProperty(current.val)) {
            let index = map[current.val].findIndex(o => o == current)
            if (index > -1) {
                return current
            } else {
                map[current.val].push(current)
            }
        } else {
            map[current.val] = []
            map[current.val].push(current)
        }
        current = current.next
    }
    return null
};

var detectCycle2 = function(head) {
    let hashSet = new Set();

    while (head != null) {
        if (hashSet.has(head)) {
            return head;
        } else {
            hashSet.add(head);
            head = head.next;
        }
    }

    return null;
};

// 原理：首先初始化快指针 fast = head.next.next 和 slow = head.next，
//     此时快指针走的路长为2, m慢指针走的路长为1，之后令快指针每次走两步，
//     慢指针每次走一步，这样快指针走的路长始终是慢指针走的路长的两倍，
//     若不存在环，直接返回None，
//     若存在环，则 fast 与 slow 肯定会在若干步之后相遇；
//
//     性质1：
//         设从head需要走 a 步到达环的入口，如果环存在的话，
//         再走 b 步可以再次到达该入口（即环的长度为b），
//         如果存在环的话，上述描述的 快指针 fast 和
//         慢指针slow 必然会相遇，且此时slow走的路长
//         小于 a + b(可以自行证明)，设其为 a + x，
//         当快慢指针相遇时，快指针已经至少走完一圈环了，
//         不妨设相遇时走了完整的m圈(m >= 1)，有：
//
//         快指针走的路长为 a + mb + x
//         慢指针走的路长为 a + x
//
//      由于快指针fast 走的路长始终是慢指针的 2倍，所以：
//
//         a + mb + x = 2(a + x)
//
//      化简可得：
//
//         a = mb - x  -------------  (*)
//
//      当快指针与慢指针相遇时，由于 <性质1> 的存在，
//      可以在链表的开头初始化一个新的指针，
//      称其为 detection, 此时 detection 距离环的入口的距离为 a，
//
//      此时令 detection 和 fast 每次走一步，
//      会发现当各自走了 a 步之后，两个指针同时到达了环的入口，理由分别如下：
//
//      detection不用说了，走了a步肯定到刚好到入口
//      fast已经走过的距离为 a + mb + x，当再走 a 步之后，
//      fast走过的总距离为 2a + mb + x，带入性质1的(*)式可得：
//      2a + mb + x = a + 2mb，会发现，fast此时刚好走完了
//      整整 2m 圈环，正好处于入口的位置。
//
//      基于此，我们可以进行循环，直到 detection 和
//      fast 指向同一个对象，此时指向的对象恰好为环的入口。
var detectCycle3 = function(head) {
    let p = head, p2 = head,hasCycle = false;
    if (head === null) return null
    while (p2.next != null && p2.next.next != null) {
        p = p.next;
        p2 = p2.next.next;
        if (p == p2) {
            hasCycle = true;
            break;
        }
    }

    if (hasCycle) {
        let q = head
        while (p !== q) {
            p = p.next
            q = q.next
        }
        return q
    } else {
        return null
    }
};