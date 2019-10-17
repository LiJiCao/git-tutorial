// 703. 数据流中的第k大元素
/**
 * @param {number} k
 * @param {number[]} nums
 */

var TreeNode = function (val) {
    this.val = val
    this.left = null
    this.right = null
    this.cnt = 1
}

var KthLargest = function(k, nums) {
    this.k = k
    this.root = new TreeNode(nums[0])

    for (let i = 1, len = nums.length; i < len; i++) {
        insertNode(this.root, nums[i])
    }
};

function insertNode(root, val) {
    if (root.val > val) {
        if (root.left) {
            insertNode(root.left, val)
        } else {
            let node = new TreeNode(val)
            root.left = node
        }
    } else {
        if (root.right) {
            insertNode(root.right, val)
        } else {
            let node = new TreeNode(val)
            root.right = node
        }
    }
    root.cnt++
}

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    insertNode(this.root, val)
    let k = this.k, cur = this.root
    while (k > 0) {
        // 右节点是否存在
        if (cur.right) {
            if (cur.right.cnt === k - 1) {
                break
            }
            if (cur.right.cnt < k - 1) {
                k = k - cur.right.cnt - 1
                cur = cur.left
            } else {
                cur = cur.right
            }
        } else if (k === 1) {
            break
        } else {
            cur = cur.left
            k--
        }
    }
    return cur.val
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */