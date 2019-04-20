/**
 * 498. 对角线遍历
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 按照索引总和进行遍历
var findDiagonalOrder = function (matrix) {
    let l = matrix.length
    if (l === 0) return matrix
    let w = matrix[0].length, result = []
    let steps = l + w - 2, s = 0, a = 0, b = 0
    while (s <= steps) {
        if (s % 2 === 0) {
            // 总和为偶数时，起点在左下角
            a = s > l - 1 ? l - 1 : s
            b = s - a
        } else {
            // 总和为奇数时，起点在右上角
            b = s > w - 1 ? w - 1 : s
            a = s - b
        }
        while (a >= 0 && a < l && b >= 0 && b < w) {
            result.push(matrix[a][b])
            a += s % 2 === 0 ? -1 : 1
            b += s % 2 === 0 ? 1 : -1
        }

        s++
    }
    return result
};

// 移动索引
var findDiagonalOrder2 = function (matrix) {
    var result = [];
    //行数
    var row = matrix.length;
    if (row === 0) {
        return result;
    }
    //列数
    var col = matrix[0].length;
    var rIndex = 0;
    var cIndex = 0;

    while (!(rIndex === row - 1 && cIndex === col - 1)) {
        matrix[rIndex][cIndex] !== undefined && result.push(matrix[rIndex][cIndex]);
        if ((rIndex + cIndex) % 2 === 0) {
            if (cIndex === col - 1) { // 元素在最后一列，往下走
                rIndex++;
            } else if (rIndex === 0) { // 元素在第一行，往右走
                cIndex++;
            } else { // 其他情况，往右上走
                rIndex--;
                cIndex++;
            }
        } else {
            if (rIndex === row - 1) { //元素在最后一行，往右走
                cIndex++;
            } else if (cIndex === 0) { // //元素在第一列，往下走
                rIndex++;
            } else { //其他情况，往左下走
                rIndex++;
                cIndex--;
            }
        }
    }
    result.push(matrix[row - 1][col - 1]);
    return result;
};