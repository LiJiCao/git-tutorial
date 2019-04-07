/**
 * 20. 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let n = s.length, i = 0, stack = []
    while (i < n) {
        if (isLeft(s[i])) {
            stack.push(s[i])
        } else if (brackets[stack.pop()] !== s[i]) {
            return false
        }
        i++
    }
    return stack.length === 0
};

var isLeft = function(char) {
    return (/[\\(\\[\\{]/).test(char)
}

const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
}