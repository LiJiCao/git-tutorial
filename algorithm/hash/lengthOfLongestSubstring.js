/**
 * 3. 无重复字符的最长子串
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
    let set = new Set(), len = s.length;
    s = s.split('');
    let result = 0, l = 0, r = 0;
    while (l < len && r < len) {
        if (!set.has(s[r])) {
            set.add(s[r++]);
            result = Math.max(result, r - l);
        } else {
            set.delete(s[l++]);
        }
    }
    return result;
};

// 直接将l移动至下一个初始索引
var lengthOfLongestSubstring2 = function(s) {
    let map = new Map(), len = s.length;
    s = s.split('');
    let result = 0, l = 0, r = 0;
    for (; r < len; r++) {
        if (map.has(s[r])) {
            l = Math.max(map.get(s[r]), l);
        }
        result = Math.max(result, r - l + 1);
        // l移动到的下一个索引
        map.set(s[r], r + 1);
    }
    return result;
};

// ASCII码数组
var lengthOfLongestSubstring3 = function(s) {
    let index = new Array(128).fill(0), len = s.length;
    s = s.split('');
    let result = 0, l = 0, r = 0;
    for (; r < len; r++) {
        l = Math.max(index[s[r].charCodeAt()], l);
        result = Math.max(result, r - l + 1);
        index[s[r].charCodeAt()] = r + 1;
    }
    return result;
};