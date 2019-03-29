// 移动0
/**
 * 只要把数组中所有的非零元素，按顺序给数组的前段元素位赋值，剩下的全部直接赋值 0。
 * 我们定义一个 nums 0...i 表示为非 0 元素的数组，
 * 之后在遍历数列的时候不断维护这个定义。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroNums = []
    let index = 0
    while (index < nums.length) {
        if (nums[index] === 0) {
            zeroNums.push(nums.splice(index, 1)[0])
        } else {
            index++
        }
    }
    for (let i = 0, l = zeroNums.length; i < l; i++) {
        nums.push(0)
    }
};

var moveZeros2 = function(nums) {
    let i = -1
    let j = 0
    let n = nums.length
    while (j < n) {
        if (nums[j] !== 0) {
            i++
            nums[i] = nums[j]
        }
        j++
    }
    for (let k = i + 1; k < n; k++) {
        nums[k] = 0
    }
    return nums
}

console.log(moveZeros2([0,1,0,3,12]))