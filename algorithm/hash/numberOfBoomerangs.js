// 447. 回旋镖的数量
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let map = {}, len = points.length, result = 0
    for(let i = 0; i < len; i++) {
        let pi = points[i]
        for (let j = 0; j < len; j++) {
            if (j === i) continue
            let pj = points[j]
            let distance = (pi[0] - pj[0]) * (pi[0] - pj[0]) + (pi[1] - pj[1]) * (pi[1] - pj[1])
            if (!map[distance]) {
                map[distance] = 0
            }
            map[distance]++
            if (map[distance] > 1) {
                result += (map[distance] - 1) * 2
            }
        }
        map = {}
    }
    return result
};