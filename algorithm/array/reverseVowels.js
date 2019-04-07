/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let n = s.split(''), i = 0, j = n.length - 1
    while (i <= j) {
        if (!isVowel(n[i])) {
            i++
            continue
        }
        if (!isVowel(n[j])) {
            j--
            continue
        }
        [n[i], n[j]] = [n[j], n[i]]
        i++
        j--
    }
    return n.join('')
};

var isVowel = function(val) {
    return (/[aeiouAEIOU]/).test(val)
}