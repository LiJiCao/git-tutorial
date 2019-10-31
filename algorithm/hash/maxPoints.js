// 149. 直线上最多的点数
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let len = points.length
    if (len === 0 || !points) return 0
    let result = 1
    for (let i = 0; i < len; i++) {
        let pi = points[i]
        let map = {}, sameCount = 1
        for (let j = 0; j < len; j++) {
            if (j === i) continue
            let pj = points[j]
            let dx = pj[0] - pi[0], dy = pj[1] - pi[1]
            if (dx === 0 && dy === 0) {
                sameCount++
                continue
            }
            let g = gcd(dx, dy)
            dx = dx / g
            dy = dy / g
            // 不以斜率为键，以dx和dy为键，解决大数字的情况
            let k = `${dx}@${dy}`
            if (!map[k]) {
                map[k] = 1
            } else {
                map[k]++
            }
        }
        let max = Object.values(map)
        let sameLine = max.length > 0 ? Math.max(...max) : 0
        result = Math.max(result, sameLine + sameCount)
    }
    return result
};

function gcd(a, b) {
    while (b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
