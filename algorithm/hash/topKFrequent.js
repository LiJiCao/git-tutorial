/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 简单粗暴的写法
var topKFrequent = function (nums, k) {
    let map = new Map(), len = nums.length;
    for (let i = 0; i < len; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0);
        }
        map.set(nums[i], map.get(nums[i]) + 1);
        ;
    }
    let arr = [];
    map.forEach((value, key) => {
        arr.push([key, value]);
    })
    return arr.sort((a, b) => b[1] - a[1]).filter((o, index) => index < k).map(e => e[0]);
};

// 用索引排序
var topKFrequent2 = function (nums, k) {
    if (k === nums.length) return nums
    let map = new Map()
    let arr = []
    let res = [];
    nums.forEach(n => {
        map.set(n, (map.get(n) || 0) + 1)
    })
    for (let [k, v] of map) {
        if (arr[v] !== undefined) {
            arr[v].push(k)
        } else {
            arr[v] = [k];
        }
    }
    let i = arr.length - 1
    while (k > 0) {
        if (arr[i] !== undefined) {

            res.push(...arr[i].slice(0, k))
            k -= arr[i].length
        }
        i--
    }
    return res
};