/**
 * 542. 0 1矩阵
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// 用BFS方法
var updateMatrix = function (matrix) {
    let l = matrix.length, w = matrix[0].length, BFS = bfs(l, w)
    result = [], queue = [], step = 1
    // 初始化：距离为0的，否则标-1
    for (let i = 0; i < l; i++) {
        result[i] = []
        for (let j = 0; j < w; j++) {
            if (matrix[i][j] === 0) {
                result[i][j] = 0
                queue.push([i, j])
            } else {
                result[i][j] = -1
            }
        }
    }
    // 从0距离开始，不断迭代相邻的点
    while (queue.length > 0) {
        for (let i = 0, ql = queue.length; i < ql; i++) {
            let point = queue.shift()
            BFS(result, point[0], point[1], step, queue)
        }
        step++
    }
    return result
};

var bfs = function (l, w) {
    return function (result, i, j, step, queue) {
        if (i > 0 && result[i - 1][j] === -1) {
            result[i - 1][j] = step
            queue.push([i - 1, j])
        }
        if (i < l - 1 && result[i + 1][j] === -1) {
            result[i + 1][j] = step
            queue.push([i + 1, j])
        }
        if (j > 0 && result[i][j - 1] === -1) {
            result[i][j - 1] = step
            queue.push([i, j - 1])
        }
        if (j < w - 1 && result[i][j + 1] === -1) {
            result[i][j + 1] = step
            queue.push([i, j + 1])
        }
    }
}

// 将原0 1矩阵变成距离矩阵
var updateMatrix2 = function (matrix) {

    let n = matrix.length;
    let m = matrix[0].length;
    let discap = n * m;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] = discap;
            }
            // 遍历所有的点，比较上边和左边的点
            if (i > 0) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1);
            }
            if (j > 0) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1);
            }
        }
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            // 遍历所有的点，比较右边和下边的点
            if (i < n - 1) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
            }
            if (j < m - 1) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
            }
        }
    }

    return matrix;
};