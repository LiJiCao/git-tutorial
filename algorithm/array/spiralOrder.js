/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 移动索引
var spiralOrder = function (matrix) {
    let bottom = matrix.length
    if (bottom === 0) return matrix
    let right = matrix[0].length, count = bottom * right
    let top = 0, left = -1, result = []
    let turn = 'right'
    let a = 0, b = 0
    while (count > 0) {
        console.log(a, b)
        result.push(matrix[a][b])

        if (a === bottom && b === right - 1) {
            console.log('left')
            turn = 'left'
            left++
        } else if (a === bottom && b === left) {
            console.log('up')
            turn = 'up'
            top++
        } else if (a === top && b === left) {
            console.log('right')
            turn = 'right'
            right--
        } else if (a === top && b === right - 1) {
            console.log('down')
            turn = 'down'
            bottom--
        }

        if (turn === 'right') {
            // 右移
            b++
        } else if (turn === 'down') {
            // 下移
            a++
        } else if (turn === 'left') {
            // 左移
            b--
        } else if (turn === 'up') {
            // 上移
            a--
        }
        count--
    }
    return result
};

// 按圈走
var spiralOrder2 = function (matrix) {
    let x = 0, y = 0;
    let h = matrix.length;
    if (h === 0) return [];
    let w = matrix[0].length;
    if (w === 0) return [];
    let ret = [];
    let edge = 1;
    let old = -1;
    let n = w * h;
    while (ret.length > old) {
        x = y = edge - 1;
        old = ret.length;
        let w1 = w - edge, h1 = h - edge;
        // 终止条件
        if (y > h1 || x > w1) break
        while (x < w1) ret.push(matrix[y][x++]);
        let verBack = ret.length > old;
        old = ret.length;
        while (y < h1) ret.push(matrix[y++][x]);
        let horBack = ret.length > old;
        old = ret.length;
        if (horBack) {
            while (x >= edge) ret.push(matrix[y][x--]);
        }
        if (verBack) {
            while (y >= edge) ret.push(matrix[y--][x]);
        }
        edge++;
    }
    if (ret.length === n - 1) ret.push(matrix[y][x])
    return ret;
};

// 按圈走的另一种方式，判断是否还有可移动的空间
var spiralOrder3 = function (matrix) {
    if (!matrix || matrix.length == 0 || !matrix[0].length) return [];
    let h = matrix.length;
    let wid = matrix[0].length;
    let ans = [];

    let start = 0;   //初始化起始行号
    while (h > start * 2 && wid > start * 2) {
        let endX = wid - 1 - start;  //终止列号，指的是未打印矩阵的最右面一列
        let endY = h - 1 - start;   //终止行号，指的是未打印矩阵的最下面一行
        //从左往右循环
        for (let i = start; i <= endX; i++) {
            ans.push(matrix[start][i]);
        }
        //执行第二步的条件：上一步执行之后矩阵终止行号大于从左往右循环结束时的行号
        if (start < endY) {
            for (let i = start + 1; i <= endY; i++) {
                ans.push(matrix[i][endX]);
            }
        }
        //执行第三步的条件：上一步执行之后终止行号大于起始行号，而且终止列号大于起始列号
        if (start < endX && start < endY) {
            for (let i = endX - 1; i >= start; i--) {
                ans.push(matrix[endY][i]);
            }
        }
        //执行第四步的条件：上一步执行之后终止行号比起始行号多两行，而且终止列号大于起始列号
        if (start < endX && start + 1 < endY) {
            for (let i = endY - 1; i > start; i--) {
                ans.push(matrix[i][start]);
            }
        }
        start++;
    }
    return ans
};

// console.log(spiralOrder([[ 1, 2, 3, 14 ], [ 4, 5, 6, 15 ],[ 7, 8, 9, 16 ],[10, 11, 12, 13]]))
// console.log(spiralOrder([[2,5,8],[4,0,-1]]))
console.log(spiralOrder([[3], [2]]))