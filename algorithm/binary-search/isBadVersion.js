/**
 * 278. 第一个错误的版本
 * 你是产品经理，目前正在带领一个团队开发新的产品。
 * 不幸的是，你的产品的最新版本没有通过质量检测。
 * 由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
 * 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
 * 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。
 * 实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n === 1) {
            return isBadVersion(n) ? 1 : -1;
        }
        if (n === 2) {
            return isBadVersion(1) ? 1 : (isBadVersion(2) ? 2 : -1);
        }
        let l = 1, r = n;
        while (l < r) {
            let mid = l + ((r - l) >>> 1);
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid;
            } else if (isBadVersion(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        if (isBadVersion(l) && !isBadVersion(l - 1)) {
            return l;
        }
        return -1;
    };
};

var solution2 = function (isBadVersion) {
    return function (n) {
        let i = 1,
            j = n;
        while (i <= j) {
            let mid = parseInt((j - i) / 2) + i;
            if (isBadVersion(mid)) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }
        return i;
    };
};

// 如果mid是true, 则mid的右侧全都是true
// 如果mid是false, 则mid的左侧全都是false
// l和r相遇的位置就是结果
var solution3 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1, r = n;
        while (l < r) {
            let mid = l + ((r - l) >>> 1);
            if (isBadVersion(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l;
    };
};