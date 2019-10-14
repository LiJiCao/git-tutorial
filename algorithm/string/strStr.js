/**
 * 实现 strStr() 函数。
 * 给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0
    let hl = haystack.length - needle.length, equal = equals(haystack, needle)
    for (let i = 0; i <= hl; i++) {
        if (haystack[i] === needle[0] && equal(i)) {
            return i
        }
    }
    return -1
};

var equals = function (haystack, needle) {
    let nl = needle.length
    return function (startIndex) {
        for (let i = 0; i < nl; i++) {
            if (haystack[startIndex + i] !== needle[i]) {
                return false
            }
        }
        return true
    }
}