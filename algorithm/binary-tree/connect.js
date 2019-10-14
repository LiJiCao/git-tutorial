// 116. 填充每个节点的下一个右侧节点指针

// 迭代方法
var connect = function (root) {
    if (!root) return root
    let stack = [root]

    // 层次遍历
    while (stack.length > 0) {
        for (let i = 0, len = stack.length; i < len; i++) {
            let p = stack.shift()
            if (i !== len - 1) {
                p.next = stack[0]
            } else {
                p.next = null
            }
            if (p.left) {
                stack.push(p.left)
            }
            if (p.right) {
                stack.push(p.right)
            }
        }
    }
    return root
};

// 迭代方法2: pre和cur
var connect2 = function (root) {
    if (!root) return root
    let cur = root, pre = null

    while (cur !== null) {
        while (pre != null) {
            pre.left.next = pre.right;
            if (pre.next != null)
                pre.right.next = pre.next.left;
            pre = pre.next;
        }
        pre = cur;
        cur = cur.left;
    }
    return root
};

// 递归方法
var connect3 = function (root) {
    if (!root) return root
    if (root.left !== null) {
        root.left.next = root.right
        if (root.next !== null) {
            root.right.next = root.next.left
        }
    }
    connect3(root.left)
    connect3(root.right)
    return root
}

// 117. 填充每个节点的下一个右侧节点指针 II
var connect4 = function (root) {
    if (!root) return root
    // 如果有节点
    if (root.left !== null || root.right !== null) {
        // 左右节点都有
        if (root.left !== null && root.right !== null) {
            root.left.next = root.right
        }
        // 获取子节点和下一个有孩子的节点
        let node = root.right ? root.right : root.left

        let head = root.next
        while (head && !(head.left !== null || head.right !== null)) {
            head = head.next;
        }

        // 给孩子赋指针
        node.next = head ? (head.left !== null ? head.left : head.right) : null

        // 由于需要next属性，因此递归顺序从右到左
        connect4(root.right);
        connect4(root.left);
    }
    return root
};

let testJSON = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": {"$id": "4", "left": null, "next": null, "right": null, "val": 7},
            "next": null,
            "right": null,
            "val": 4
        },
        "next": null,
        "right": {"$id": "5", "left": null, "next": null, "right": null, "val": 5},
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "6",
        "left": null,
        "next": null,
        "right": {
            "$id": "7",
            "left": null,
            "next": null,
            "right": {"$id": "8", "left": null, "next": null, "right": null, "val": 8},
            "val": 6
        },
        "val": 3
    },
    "val": 1
}

connect4(testJSON)
