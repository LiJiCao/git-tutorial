/**
 * 202. 快乐数
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
 * 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 * @param {number} n
 * @return {boolean}
 */
// 进入死循环时就不是快乐数
var isHappy = function(n) {
    let setSum = (n) => {
        let sum = 0;
        while(n !== 0){
            sum += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return sum;
    }

    let hashSet = {};
    while (true) {
        if (!hashSet[n]) {
            hashSet[n] = n;
        } else {
            return false;
        }
        n = setSum(n);
        if (n === 1) {
            return true;
        }
    }
};