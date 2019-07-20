/**
 * 36. 有效的数独
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let map = {};
    let getKey = (i, j) => {
        let gi = Math.ceil((i + 1) / 3), gj = Math.ceil((j + 1) / 3);
        return [`r${i + 1}`, `c${j + 1}`, `g${(gi - 1) * 3 + gj}`];
    }

    for (let i = 0, len = board.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] !== '.') {
                let keys = getKey(i, j);
                for (let k = 0; k < 3; k++) {
                    if (!map.hasOwnProperty(keys[k])) {
                        map[keys[k]] = {};
                    }
                    if (map[keys[k]].hasOwnProperty(board[i][j])) {
                        return false;
                    }
                    map[keys[k]][board[i][j]] = board[i][j];
                }
            }
        }
    }

    return true;
};

// 换一种写法
var isValidSudoku2 = function (board) {
    let map = [
        [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    ]
    let getKey = (i, j) => {
        let gi = Math.ceil((i + 1) / 3), gj = Math.ceil((j + 1) / 3);
        return [i, j, (gi - 1) * 3 + gj - 1];
    }

    for (let i = 0, len = board.length; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (board[i][j] !== '.') {
                let keys = getKey(i, j);
                for (let k = 0; k < 3; k++) {
                    if (!map[k][keys[k]].hasOwnProperty(board[i][j])) {
                        map[k][keys[k]][board[i][j]] = 0;
                    } else {
                        return false;
                    }
                }
            }
        }
    }

    return true;
};

// 三次迭代，将值作为索引判断
var isValidSudoku3 = function (board) {
    if (board.length !== 9) {
        return false;
    }
    for (let i = 0; i < 9; i++) {
        if (board[i].length !== 9) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        let arr = new Array(10).fill(0);
        for (let j = 0; j < 9; j++) {
            let a = board[i][j];
            if (a < 1 && a > 9) {
                return false;
            }
            else if (a === '.') {
                continue;
            }
            else {
                arr[a]++;
                if (arr[a] > 1) {
                    return false;
                }
            }
        }
    }
    for (let j = 0; j < 9; j++) {
        let arr = new Array(10).fill(0);
        for (let i = 0; i < 9; i++) {
            let a = board[i][j];
            if (a < 1 && a > 9) {
                return false;
            }
            else if (a === '.') {
                continue;
            }
            else {
                arr[a]++;
                if (arr[a] > 1) {
                    return false;
                }
            }
        }
    }
    let m = 0;
    while (m <= 6) {
        let n = 0;
        while (n <= 6) {
            let arr = new Array(10).fill(0);
            for (let i = m; i < m + 3; i++) {
                for (let j = n; j < n + 3; j++) {
                    let a = board[i][j];
                    if (a < 1 && a > 9) {
                        return false;
                    }
                    else if (a === '.') {
                        continue;
                    }
                    else {
                        arr[a]++;
                        if (arr[a] > 1) {
                            return false;
                        }
                    }
                }
            }
            n += 3;
        }
        m += 3;
    }

    return true;
};