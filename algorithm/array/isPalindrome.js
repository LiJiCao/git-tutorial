/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 本题中，我们将空字符串定义为有效的回文串。
 * @param {string} s
 * @return {boolean}
 */

// 采用碰撞指针
var isPalindrome = function(s) {
    let n = s.length, i = 0, j = n - 1
    while (i <= j) {
        let str1 = s[i], str2 = s[j]
        if (!isLetterOrNumber(str1)) {
            i++
            continue
        }
        if (!isLetterOrNumber(str2)) {
            j--
            continue
        }
        if (str1.toLowerCase() !== str2.toLowerCase()) {
            return false
        } else {
            i++
            j--
        }
    }
    return true
};

var isLetterOrNumber = function (val) {
    return (/[A-Za-z0-9]/).test(val)
}