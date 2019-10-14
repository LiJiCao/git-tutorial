/**
 * 387. 字符串中的第一个唯一字符
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * @param {string} s
 * @return {number}
 */

// 遍历两次字符串，第一次配置散列表，第二次判断输出
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0, len = s.length; i < len; i++) {
        if (!map.hasOwnProperty(s[i])) {
            map[s[i]] = [];
        }
        map[s[i]].push(i);
    }
    for (let i = 0, len = s.length; i < len; i++) {
        if (map[s[i]].length === 1) {
            return map[s[i]][0];
        }
    }

    return -1;
};

// 直接一次循环判断是否唯一
var firstUniqChar2 = function(s) {
    let each = '';
    for(let i = 0;i<s.length;i++){
        each = s[i];
        if(s.indexOf(each) === i && s.lastIndexOf(each) === i){
            return i;
        }
    }
    return -1;
};