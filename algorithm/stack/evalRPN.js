/**
 * 150. 逆波兰表达式求值
 * 根据逆波兰表示法，求表达式的值。
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 说明：
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let n = tokens.length, i = 0, stack = []
    while (i < n) {
        if (!isSymbol(tokens[i])) {
            console.log('放入', tokens[i])
            stack.push(tokens[i])
        } else {
            let a = stack.pop(), b = stack.pop()
            let result = handleSymbol(b, a, tokens[i])
            console.log('放入运算结果', result)
            stack.push(result)
        }
        console.log('------')
        i++
    }
    return stack.pop()
};

var isSymbol = function (symbol) {
    return (/^[+\-*\\/]$/).test(symbol)
}

var handleSymbol = function (a, b, symbol) {
    if (symbol === '+') return Number(a) + Number(b) + ''
    if (symbol === '-') return Number(a) - Number(b) + ''
    if (symbol === '*') return Number(a) * Number(b) + ''
    if (symbol === '/') return parseInt(Number(a) / Number(b)) + ''
}

console.log(evalRPN(["4","13","5","/","+"]))