/**
 * 205. 同构字符串
 * 给定两个字符串 s 和 t，判断它们是否是同构的。
 * 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
 * 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。
 * 两个字符不能映射到同一个字符上，但字符可以映射自己本身。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var rule = {}
    var rule1 = {}
    var r = 1
    for (var i = 0; i < s.length; i++) {
        if (!rule[s[i]]) {
            rule[s[i]] = r
        }

        if (!rule1[t[i]]) {
            rule1[t[i]] = r
        }

        if (rule[s[i]] !== rule1[t[i]]) {
            return false
        }

        r++
    }
    return true
};