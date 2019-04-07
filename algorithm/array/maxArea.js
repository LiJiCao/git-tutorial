/**
 * 盛最多水的容器
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 我们在由线段长度构成的数组中使用两个指针，一个放在开始，一个置于末尾。
 * 此外，我们会使用变量 maxarea 来持续存储到目前为止所获得的最大面积。
 * 在每一步中，我们会找出指针所指向的两条线段形成的区域，更新 maxarea，并将指向较短线段的指针向较长线段那端移动一步。
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = height.length - 1, h = 0
    let i = 0, j = l
    let area = (j - i) * ((height[i] > height[j] ? height[j] : height[i]))
    while (i <= j) {
        let cArea = (j - i) * ((height[i] > height[j] ? height[j] : height[i]))
        area = cArea > area ? cArea : area
        if (height[i] > height[j]) {
            j--
        } else {
            i++
        }
    }
    return area
};