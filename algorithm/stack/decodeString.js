/**
 * 394. 字符串解码
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * @param {string} s
 * @return {string}
 */
var isNumber = function (val) {
    return (/[0-9]/).test(val)
}

var handleStack = function (stack) {
    if (stack.length >= 2) {
        let b = stack.pop()
        let a = stack.pop()
        let result = ''
        if (isNumber(a)) {
            for (let i = 0; i < parseInt(a); i++) {
                result += b
            }
        } else {
            result = a + b
        }
        stack.push(result)
    }
}

var decodeString = function (s) {
    let n = s.length, i = 0, numberString = ''
        numberStack = [], operatorStack = []
    if (s === '') return ''
    while (i < n) {
        if (isNumber(s[i])) {
            if (operatorStack.length === 0) {
                while (numberStack.length > 1) {
                    handleStack(numberStack)
                }
            }
            numberString += s[i]
        } else if (s[i] === '[') {
            numberStack.push(numberString)
            numberString = ''
            operatorStack.push('[')
            numberStack.push('')
        } else if (s[i] === ']') {
            handleStack(numberStack)
            operatorStack.pop()
        } else {
            if (operatorStack[operatorStack.length - 1] === '[') {
                numberStack[numberStack.length - 1] += s[i]
            } else {
                while (numberStack.length > 1) {
                    handleStack(numberStack)
                }
                numberStack.push(s[i])
            }
        }
        i++
        console.log(numberStack, operatorStack)
    }
    while (numberStack.length > 1) {
        handleStack(numberStack)
    }
    return numberStack[0]
};

// 替换字符
var decodeString2 = function(s) {
    function cusConcat(num, str) {
        let res = '';
        for (let i = 0; i < Number(num); ++i) {
            res += str;
        }
        return res;
    }
    const regexp = /(\d+)\[(\w+)\]/;
    let string = s,
        cache;
    let arr = string.match(regexp);
    while (arr) {
        cache = cusConcat(arr[1], arr[2]);
        string = string.replace(regexp, cache);
        console.log(string)
        arr = string.match(regexp);
    }
    return string;
};

// console.log(decodeString2("leetcode"))
// console.log(decodeString("3[a]2[bc]"))
// console.log(decodeString("3[a2[c]]"))
// console.log(decodeString("3[a2[c]]"))
// console.log(decodeString2("2[abc]3[cd]ef") === "abcabccdcdcdef")
// console.log(decodeString2("3[z]2[2[y]pq4[2[jk]e1[f]]]ef") === "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef")
// console.log(decodeString("2[ab3[cd]]4[xy]"))