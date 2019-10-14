/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

// 用2个map
var fourSumCount = function (A, B, C, D) {
    let ABmap = new Map(), CDmap = new Map(), len = A.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let plus = A[i] + B[j];
            if (!ABmap.has(plus)) {
                ABmap.set(plus, 0);
            }
            ABmap.set(plus, ABmap.get(plus) + 1);
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let plus = C[i] + D[j];
            if (!CDmap.has(plus)) {
                CDmap.set(plus, 0);
            }
            CDmap.set(plus, CDmap.get(plus) + 1);
        }
    }

    let result = 0;
    ABmap.forEach((value, key) => {
        if (CDmap.has(-key)) {
            result += CDmap.get(-key) * value;
        }
    })
    return result;
};

// 用1个map
var fourSumCount2 = function (A, B, C, D) {
    const map = new Map();
    for (let i = 0; i < A.length; i += 1) {
        for (let j = 0; j < B.length; j += 1) {
            const sum = A[i] + B[j];
            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1);
            } else {
                map.set(sum, 1);
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < C.length; i += 1) {
        for (let j = 0; j < D.length; j += 1) {
            const sum = C[i] + D[j];
            if (map.has(-sum)) {
                ans += map.get(-sum);
            }
        }
    }
    return ans;
};