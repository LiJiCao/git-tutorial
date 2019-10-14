/**
 * 367. 有效的完全平方数
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * @param {number} num
 * @return {boolean}
 */

// 循环写法
var isPerfectSquare = function(num) {
    if (num === 1) {
        return true;
    }
    let range = num >>> 1;
    let l = 0, r = range;
    while (l < r) {
        let mid = l + ((r - l) >>> 1), m = mid ** 2;
        if (m === num) {
            return true;
        } else if (m < num) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l * l === num;
};

// 递归写法
var isPerfectSquare2 = function(num) {
    let res = binsearchSquare(0, num , num);
    return res ** 2 === num;

    function binsearchSquare(first, end, target) {
        while (first < end) {
            let mid = Math.floor(first + (end - first) / 2);
            if (target > mid * mid) {
                first = mid + 1;
            } else {
                end = mid;
            }
        }
        return first;
    }
};

// 等差数列的和判断
var isPerfectSquare3 = function(num) {
    var i = 1;
    while(num > 0 ){
        num = num - i;
        i += 2;
    }
    return num === 0;
};

var isPerfectSquare4 = function(num) {
    return Math.pow(num, 0.5) === Math.floor(Math.pow(num, 0.5));
};

// 牛顿迭代法
var isPerfectSquare5 = function(num) {
    if (num === 1) {
        return true;
    }
    let r = num;
    while (r * r > num) {
        r = (r + num / r) >>> 1;
    }
    return r * r === num;
};