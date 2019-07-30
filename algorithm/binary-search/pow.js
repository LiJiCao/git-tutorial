/**
 * 50. Pow(x, n)
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 递归
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    if (n % 2 === 0) {
        let m = myPow(x, n / 2);
        return m * m;
    } else {
        let m = myPow(x, (n - 1) / 2);
        return x * m * m;
    }
};

// 循环连乘
var myPow2 = function(x, n) {
    if (n === 1) {
        return x;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let ans = 1;
    for (let i = 0; i < n; i++) {
        ans = ans * x;
    }
    return ans;
};

// 快速幂
var myPow3 = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let ans = 1, cur_product = x;
    for (let i = n; i; i = i >>> 1) {
        if ((i % 2) === 1) {
            ans = ans * cur_product;
        }
        // 表示位数
        cur_product *= cur_product;
    }
    return ans;
};