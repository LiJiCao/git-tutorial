/**
 * 49. 字母异位词分组
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var sortKey = (key) => {
        return key.split('').sort((a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }).join('');
    };

    let map = new Map();
    for (let i = 0, len = strs.length; i < len; i++) {
        let key = sortKey(strs[i]);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(strs[i]);
    }
    return [...map.values()];

};

// 直接使用索引
var groupAnagrams2 = function(strs) {
    let res = [];
    let map = {};
    let idx = 0;
    for (let i = 0; i < strs.length; i ++) {
        let str = strs[i];
        let sortedStr = str.split('').sort().join('');
        // 判断是否是新键
        if (map[sortedStr] >= 0) {
            res[map[sortedStr]].push(str);
        } else {
            map[sortedStr] = idx;
            res.push([str]);
            idx ++;
        }
    }
    return res;
};