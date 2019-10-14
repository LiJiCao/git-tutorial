/**
 * 14. 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '', sl = strs.length
    if (sl === 0) return ''
    if (sl === 1) return strs[0]
    let j = 0
    let minlen = Math.min.apply(null, strs.map(e => e.length))
    while (j < minlen) {
        let index = strs[0][j]
        for (let i = 1; i < sl; i++) {
            if (strs[i][j] !== index) {
                return result
            }
        }
        result += index
        j++
    }
    return result
};

// 水平扫描法
var longestCommonPrefix2 = function(strs) {
    let result = '', sl = strs.length
    if (sl === 0) return ''
    let prefix = strs[0]
    for (let i = 1; i < sl; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length === 0) return ""
        }
    }
    return prefix
};


// 分而治之法
var longestCommonPrefix3 = function(strs) {
    if (strs == null || strs.length == 0) return ""
    return longestCommonPrefix4(strs, 0, strs.length - 1)
};

var longestCommonPrefix4 = function (strs, l, r) {
    if (l === r) {
        return strs[l];
    }
    else {
        let mid = Math.floor((l + r)/2);
        let lcpLeft = longestCommonPrefix4(strs, l , mid);
        let lcpRight = longestCommonPrefix4(strs, mid + 1, r);
        return commonPrefix(lcpLeft, lcpRight);
    }
}

var commonPrefix = function (left, right) {
    let min = Math.min(left.length, right.length);
    for (let i = 0; i < min; i++) {
        if (left[i] !== right[i])
            return left.substring(0, i);
    }
    return left.substring(0, min)
}