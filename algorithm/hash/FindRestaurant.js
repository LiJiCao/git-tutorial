/**
 * 599.
 * 假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。
 * 你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。
 * 如果答案不止一个，则输出所有答案并且不考虑顺序。
 * 你可以假设总是存在一个答案。
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */


// 使用Map
var findRestaurant2 = function(list1, list2) {
    let map = new Map();
    let min = Infinity;
    let minArr = [];
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    for (let j = 0; j < list2.length; j++) {
        let idx = map.get(list2[j]);
        if (idx !== undefined) {
            if (idx + j === min) {
                minArr.push(list2[j]);
            } else if (idx + j < min) {
                min = idx + j;
                minArr = [];
                minArr.push(list2[j]);
            }
        }
    }
    return minArr;
};