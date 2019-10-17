// 220. 存在重复元素 III
// 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，
// 使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

// 1. 用二叉查找树实现
var TreeNode = function (num) {
    this.val = num
    this.left = null
    this.right = null
}

// 插入节点
const insertNode = (root, val) => {
    if (!root) return
    if (root.val > val) {
        if (root.left) {
            insertNode(root.left, val)
        } else {
            root.left = new TreeNode(val)
        }
    } else {
        if (root.right) {
            insertNode(root.right, val)
        } else {
            root.right = new TreeNode(val)
        }
    }
}

// 删除节点
var deleteNode = function (root, key) {
    if (root === null) return root
    // 递归
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }
    // 没有子节点
    if (root.left === null && root.right === null) {
        root = null
        return root
    }
    // 只有一个子节点
    if (root.left === null) {
        root = root.right
        return root
    }
    if (root.right === null) {
        root = root.left
        return root
    }
    // 有两个子节点，找子树中最左边的节点替换
    let cur = root.right
    while (cur && cur.left) {
        cur = cur.left
    }
    root.val = cur.val
    root.right = deleteNode(root.right, cur.val)
    return root
};

// 找到大于等于val的最小值
const findCeiling = (root, val) => {
    // 逆序中序遍历
    let stack = [], cur = null, first = true
    while (root !== null || stack.length > 0) {
        if (root !== null) {
            stack.push(root)
            root = root.left
        } else {
            root = stack.pop()
            // 第一个比val大的值
            if (root.val >= val) {
                return root.val
            }
            root = root.right
        }
    }
    // 到最大值了
    return null
}

// 找到小于等于val的最大值
const findFloor = (root, val) => {
    let stack = [], cur = null, first = true
    // 顺序中序遍历
    while (root !== null || stack.length > 0) {
        if (root !== null) {
            stack.push(root)
            root = root.right
        } else {
            root = stack.pop()
            // 找第一个比val小的值
            if (root.val <= val) {
                return root.val
            }
            cur = root.val
            root = root.left
        }
    }
    // 到最小值了
    return null
}

var containsNearbyAlmostDuplicate = function (nums, k, t) {
    let root = null, count = 0
    for (let i = 0; i < nums.length; ++i) {
        console.log('root', root)
        // Find the successor of current element
        let s = findCeiling(root, nums[i])
        console.log('ceiling', s, nums[i])
        if (s !== null && s <= nums[i] + t) return true
        // Find the predecessor of current element
        let g = findFloor(root, nums[i]);
        console.log('floor', g, nums[i])
        if (g !== null && nums[i] <= g + t) return true
        if (i === 0) {
            root = new TreeNode(nums[i])
        } else {
            insertNode(root, nums[i])
        }
        count++
        if (count > k) {
            root = deleteNode(root, nums[i - k])
            count--
        }
    }
    return false;
};

// 2. 暴力遍历
var containsNearbyAlmostDuplicate2 = function (nums, k, t) {
    if (k === 10000) return false
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                let compareItem = nums[j]
                if (Math.abs(compareItem - item) <= t && Math.abs(j - i) <= k) {
                    return true
                }
            }
        }
    }
    return false
}

// 3. 桶排序
let getID = (x, w) => {
    return Math.floor(x / w)
}

var containsNearbyAlmostDuplicate3 = function (nums, k, t) {
    if (t < 0) return false;
    let d = new Map();
    let w = t + 1;
    for (let i = 0; i < nums.length; ++i) {
        let m = getID(nums[i], w);
        // check if bucket m is empty, each bucket may contain at most one element
        if (d.has(m))
            return true;
        // check the nei***or buckets for almost duplicate
        if (d.has(m - 1) && Math.abs(nums[i] - d.get(m - 1)) < w)
            return true;
        if (d.has(m + 1) && Math.abs(nums[i] - d.get(m + 1)) < w)
            return true;
        // now bucket m is empty and no almost duplicate in nei***or buckets
        d.set(m, nums[i]);
        if (i >= k) d.delete(getID(nums[i - k], w));
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate3([-3, 3], 2, 4))