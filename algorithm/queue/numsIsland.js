/**
 * 岛屿的个数
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，
 * 并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。
 * @param {character[][]} grid
 * @return {number}
 */

// 使用颜色辅助数组
var numIslands = function(grid) {
    let i = 0, j = 0
        l = grid.length,
        w = l === 0 ? 0 : grid[0].length,
        color = initialColor(grid, l, w)
    let q = [], islandNum = 0
    while (i < l) {
        while (j < w) {
            if (grid[i][j] == 1 && color[i][j] === 'white') {
                color[i][j] = 'gray'
                q.push([i, j])
                console.log('get', q)
                while (q.length > 0) {
                    let u = q.shift()
                    console.log('removeHead', u, q)
                    let right = u[1] + 1 < w ? grid[u[0]][u[1] + 1] : '0',
                        left = u[1] - 1 >= 0 ? grid[u[0]][u[1] - 1] : '0',
                        down = u[0] + 1 < l ? grid[u[0] + 1][u[1]] : '0',
                        up = u[0] - 1 >= 0 ? grid[u[0] - 1][u[1]] : '0'
                    let colorRight = u[1] + 1 < w ? color[u[0]][u[1] + 1] : 'gray',
                        colorLeft = u[1] - 1 >= 0 ? color[u[0]][u[1] - 1] : 'gray',
                        colorDown = u[0] + 1 < l ? color[u[0] + 1][u[1]] : 'gray',
                        colorUp = u[0] - 1 >= 0 ? color[u[0] - 1][u[1]] : 'gray'
                    console.log('rlud=', right, left, up, down)
                    console.log('color-rlud=', colorRight, colorLeft, colorUp, colorDown)
                    if (right == 1 && colorRight === 'white') {
                        q.push([u[0], u[1] + 1])
                        console.log('addRight', q)
                        color[u[0]][u[1] + 1] = 'gray'
                    }
                    if (left == 1 && colorLeft === 'white') {
                        q.push([u[0], u[1] - 1])
                        console.log('addLeft', q)
                        color[u[0]][u[1] - 1] = 'gray'
                    }
                    if (down == 1 && colorDown === 'white') {
                        q.push([u[0] + 1, u[1]])
                        console.log('addDown', q)
                        color[u[0] + 1][u[1]] = 'gray'
                    }
                    if (up == 1 && colorUp === 'white') {
                        q.push([u[0] - 1, u[1]])
                        console.log('addUp', q)
                        color[u[0] - 1][u[1]] = 'gray'
                    }
                }
                islandNum++
            }
            j++
        }
        j = 0
        i++
    }
    return islandNum
};

var initialColor = function(grid, l, w) {
    let color = []
    let i = 0, j = 0
    while (i < l) {
        color[i] = []
        while (j < w) {
            color[i].push('white')
            j++
        }
        j = 0
        i++
    }
    return color
}

// 直接修改原数组
var numIslands2 = function(grid) {
    let i = 0, j = 0,
        l = grid.length,
        w = l === 0 ? 0 : grid[0].length,
        islandNum = 0
    while (i < l) {
        while (j < w) {
            if (grid[i][j] === '1') {
                bfs(grid, i, j, l, w)
                islandNum++
            }
            j++
        }
        j = 0
        i++
    }
    return islandNum
};

var bfs = function (grid, i, j, l, w) {
    grid[i][j] = '0'
    if (i > 0 && grid[i - 1][j] == '1') {
        bfs(grid, i - 1, j, l, w)
    }
    if (j > 0 && grid[i][j - 1] == '1') {
        bfs(grid, i, j - 1, l, w)
    }
    if (i < l - 1 && grid[i + 1][j] == '1') {
        bfs(grid, i + 1, j, l, w)
    }
    if (j < w - 1 && grid[i][j + 1] == '1') {
        bfs(grid, i, j + 1, l, w)
    }
}

// 使用闭包
var numIslands3 = function(grid) {
    let i = 0, j = 0,
        l = grid.length,
        w = l === 0 ? 0 : grid[0].length,
        islandNum = 0,
        BFS = bfs3(l, w)
    while (i < l) {
        while (j < w) {
            if (grid[i][j] === '1') {
                BFS(grid, i, j, l, w)
                islandNum++
            }
            j++
        }
        j = 0
        i++
    }
    return islandNum
};

var bfs3 = function (l, w) {
    return function bfs2 (grid, i, j) {
        grid[i][j] = '0'
        if (i > 0 && grid[i - 1][j] == '1') {
            bfs2(grid, i - 1, j, l, w)
        }
        if (j > 0 && grid[i][j - 1] == '1') {
            bfs2(grid, i, j - 1, l, w)
        }
        if (i < l - 1 && grid[i + 1][j] == '1') {
            bfs2(grid, i + 1, j, l, w)
        }
        if (j < w - 1 && grid[i][j + 1] == '1') {
            bfs2(grid, i, j + 1, l, w)
        }
    }
}

console.log(numIslands2([["1","1","1"],["0","1","0"],["1","1","1"]]))