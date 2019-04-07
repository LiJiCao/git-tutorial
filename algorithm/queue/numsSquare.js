/**
 * 279. 完全平方数
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * @param {number} n
 * @return {number}
 */

// bfs搜索算法
var numSquares = function (n) {
    let queue = [],
        i = 0,
        nums = 0,
        BFS = bfs(n)
    queue.push(i)
    while (queue.length > 0) {
        if (queue.includes(n)) {
            return nums
        } else {
            for (let i = 0, ql = queue.length; i < ql; i++) {
                let u = queue.shift()
                BFS(u, queue)
            }
            nums++
        }
    }
    return -1
};

var bfs = function (n) {
    let memorize = {0: 1}
    return function (base, queue) {
        let i = 1
        let sum = base + i * i
        while (sum <= n) {
            if (!memorize.hasOwnProperty(sum)) {
                queue.push(sum)
                memorize[sum] = 1
            }
            i++
            sum = base + i * i
        }
    }
}

/**
 * 四平方定理： 任何一个正整数都可以表示成不超过四个整数的平方之和。
 * 推论：满足四数平方和定理的数n（四个整数的情况），必定满足 n = (4^a)*(8b+7)
 */
var numSquares2 = function (n) {
    // 去除4因子
    while (n % 4 === 0) {
        n = Math.floor(n / 4)
    }
    // 若除8余7，满足四平方定理，必由4个完全平方数组成
    if (n % 8 === 7) {
        return 4
    }
    // 再尝试将其拆成两个或一个完全平方数
    let a = 0
    while (a * a <= n) {
        let b = Math.floor(Math.sqrt(n - a * a))
        if (a * a + b * b === n) {
            if (a !== 0 && b !== 0) return 2
            else return 1
        }
        a++
    }
    return 3
};

console.log(numSquares2(8))