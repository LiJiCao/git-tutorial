/**
 * 739. 每日温度
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。
 * 如果之后都不会升高，请输入 0 来代替。
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
 * @param {number[]} T
 * @return {number[]}
 */
// 暴力计算
var dailyTemperatures = function(T) {
    let n = T.length, i = 0, stack = [], time = [], over = false
    while (i < n) {
        let j = i
        while (j < n && !over) {
            stack.push(T[j])
            if (T[j] > T[i]) {
                over = true
            }
            j++
        }
        if (j < n || (j === n && over)) {
            time.push(stack.length - 1)
        } else {
            time.push(0)
        }
        over = false
        stack = []
        i++
    }
    return time
};

/**
 * 使用栈不停调整使得数字从大到小一直排列
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures2 = function(T) {
    let n = T.length, i = 0, stack = [], time = []
    while (i < n) {
        time[i] = 0
        console.log('新值', T[i], T[stack[stack.length - 1]])
        // 新的值比栈顶大时，不断地出栈并赋值
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let u = stack.pop()
            console.log('出栈', stack)
            time[u] = i - u
            console.log('赋值, time[', u, '] = ', time[u])
        }
        stack.push(i)
        console.log('入栈', stack)
        i++
        console.log('------')
    }
    return time
};

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73]))