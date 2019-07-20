/**
 * 771. 宝石与石头
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    if (J.length === 0 || S.length === 0) {
        return 0;
    }
    let result = 0;
    let map = {};
    for (let i = 0, len = J.length; i < len; i++) {
        map[J[i]] = 0;
    }
    for (let i = 0, len = S.length; i < len; i++) {
        if (map.hasOwnProperty(S[i])) {
            result++;
        }
    }
    return result;
};

// 寻找S中的J字符串替换成空字符
var numJewelsInStones2 = function (J, S) {
    let newS = S;
    for (let i = 0; i < J.length; i++) {
        newS = newS.replace(new RegExp(J[i], 'g'), "");
    }
    return S.length - newS.length
};

// 用数组查找
var numJewelsInStones3 = function (j, s) {
    j = j.split('');
    s = s.split('');
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (j.indexOf(s[i]) !== -1) {
            count++;
        }
    }
    return count;
};