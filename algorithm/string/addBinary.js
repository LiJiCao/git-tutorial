/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 判断每个字符的进位情况
var addBinary = function(a, b) {
    let result = '', al = a.length, bl = b.length
    let l = Math.max(a.length, b.length), carry = false
    for (let i = 0; i < l; i++) {
        let numA = (i >= al) ? '0' : a[al - 1 - i]
        let numB = (i >= bl) ? '0' : b[bl - 1 - i]
        if (numA === '1' && numB === '1') {
            result = (carry ? '1' : '0') + result
            carry = true
        } else if (numA === '0' && numB === '0') {
            result = (carry ? '1' : '0') + result
            carry = false
        } else {
            result = (carry ? '0' : '1') + result
        }
        console.log(numA, numB, carry, result)
    }
    if (carry) {
        result = '1' + result
    }
    return result
};

// 每次将最前面的两位存在carry中
var addBinary2 = function(a, b) {
    var i = a.length - 1, j = b.length - 1, carry = 0, res = '';
    while (i >= 0 || j >= 0 || carry > 0) {
        carry += i >= 0 ? parseInt(a[i--]) : 0;
        carry += j >= 0 ? parseInt(b[j--]) : 0;
        res = carry % 2 + res;
        carry = Math.floor(carry / 2);
    }
    return res;
};

// console.log(addBinary('1010','1011'))
console.log(addBinary('1111','1111'))