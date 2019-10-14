/**
 * 430. 扁平化多级双向链表
 * 您将获得一个双向链表，除了下一个和前一个指针之外，
 * 它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，
 * 依此类推，生成多级数据结构，如下面的示例所示。
 * 扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

// 递归1
var flatten = function (head) {
    if (!head) {
        return head;
    }
    for (var p = head; p; p = p.next) {
        if (p.child) {
            var temp = p.next;
            p.next = p.child;
            p.child.prev = p;
            for (var q = p; q.next; q = q.next) ;
            q.next = temp;
            if (temp) {
                temp.prev = q;
            }
            p.child = null;
        }
    }
    return head;
};

// 递归2
var flatten2 = function(head) {
    let cur = head;
    while (cur) {
        if (cur.child) {
            let curNext = cur.next;
            cur.next = flatten2(cur.child);
            cur.next.prev = cur;
            cur.child = null;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = curNext;
            if (curNext) {
                curNext.prev = cur;
            }
        }
        cur = cur.next;
    }
    return head
};

// 递归3
var flatten3 = function(head) {
    if(!head) {
        return null;
    }
    const next = flatten3(head.next);
    const child = flatten3(head.child);
    if(child) {
        head.next = child;
        child.prev = head;
        if(next) {
            let p = child;
            while(p.next) {
                p = p.next;
            }
            p.next = next;
            next.prev = p;
        }
        head.child = null;
    }
    return head;
};

// 使用数组
var flatten4 = function(head) {
    var st = walk(head, []);
    var h = st[0];
    if (!h) {
        return null;
    }
    var cur = h;
    for (var i = 1, len = st.length; i < len; ++i) {
        cur.next = st[i];
        st[i].prev = cur;
        cur.child = null;
        cur = st[i];
    }
    return h;

    function walk(head, st) {
        if (!head) {
            return st;
        }
        var cur = head;
        while (cur) {
            st.push(cur);
            if (cur.child) {
                walk(cur.child, st);
            }
            cur = cur.next;
        }
        return st
    }
};