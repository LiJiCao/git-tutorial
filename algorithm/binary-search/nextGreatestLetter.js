/**
 * 744. 寻找比目标字母大的最小字母
 * 给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。
 * 数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let n = letters.length, l = 0, r = n - 1;
    while (l < r) {
        let mid = l + ((r - l) >>> 1);
        if (letters[mid] <= target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    if (l === n - 1) {
        return letters[l] <= target ? letters[0] : letters[l];
    } else {
        return letters[l];
    }
};