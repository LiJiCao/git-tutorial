/**
 * 658. 找到 K 个最接近的元素
 * 给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。
 * 返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-k-closest-elements
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let n = arr.length, l = 0, r = n - 1;
    let cha = new Array(n), i = 0, min = 10001;
    while (l < n) {
        cha[l] = Math.abs(arr[l] - x);
        if (cha[l] < min) {
            i = l;
            min = cha[l];
        }
        l++;
    }
    let result = [arr[i]];
    l = i - 1;
    r = i + 1;
    for (let j = 1; j < k; j++) {
        if (l === -1) {
            result.push(arr[r++]);
            continue;
        }
        if (r === n) {
            result.unshift(arr[l--]);
            continue;
        }
        if (cha[l] > cha[r]) {
            result.push(arr[r++]);
        } else if (cha[l] < cha[r]) {
            result.unshift(arr[l--]);
        } else {
            result.unshift(arr[l--]);
        }
    }
    return result;
};

// 删除边界, nk: 要删除的元素数量
var findClosestElements2 = function (arr, k, x) {
    let n = arr.length;
    let nk = n - k;
    let [l, r] = [0, n - 1];
    while (nk) {
        if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
            r--;
        } else {
            l++;
        }
        nk--;
    }
    return arr.slice(l, l + k);
};

// 二分法
var findClosestElements3 = function (arr, k, x) {
    const len = arr.length;
    // 定义 1 + k 个区间，len - k 最多删除的长度
    let [l, r] = [0, len - k];
    while (l < r) {
        const m = Math.floor((l + r) / 2);
        if (Math.abs(x - arr[m]) > Math.abs(x - arr[m + k])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return arr.slice(l, l + k);
};