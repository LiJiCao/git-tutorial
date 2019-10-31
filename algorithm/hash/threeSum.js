// 15. 三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len = nums.length;
    if(nums == null || len < 3) return ans;
    nums.sort((a, b) => a - b); // 排序
    for (let i = 0; i < len ; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] === nums[i-1]) continue; // 去重
        let L = i+1;
        let R = len-1;
        while(L < R){
            const sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while (L<R && nums[L] === nums[L+1]) L++; // 去重
                while (L<R && nums[R] === nums[R-1]) R--; // 去重
                L++;
                R--;
            }
            else if (sum < 0) L++;
            else if (sum > 0) R--;
        }
    }
    return ans;
}

var twoSum = function(nums, target, l, r) {
    let n = r + 1 - l
    if (n < 2) return []
    let start = nums[l - 1]
    let map = new Map(), ret = {}
    for (let i = l; i < r + 1; i++) {
        let other = target - nums[i]
        if (map[other]) ret[[start, other, nums[i]]] = [start, other, nums[i]]
        map[nums[i]] = i
    }
    return ret
}

var threeSum2 = function(nums) {
    let n = nums.length
    if (n < 3) return []
    nums.sort((a, b) => a - b)
    let result = {}
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) break
        if (i >= 1 && nums[i] === nums[i-1]) continue
        let ll = twoSum(nums, -nums[i], i+1, n-1)
        if (ll.length === 0) continue
        result = Object.assign(result, ll)
    }
    return Object.values(result)
}