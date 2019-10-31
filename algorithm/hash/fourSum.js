// 18. 四数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let len = nums.length, result = []
    if (len < 4 || !nums) return result
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue; // 去重
        for (let j = i + 1; j < len - 2 ; j++) {
            if(j > i + 1 && nums[j] === nums[j-1]) continue; // 去重
            let L = j + 1;
            let R = len - 1;
            while(L < R){
                const sum = nums[i] + nums[j] + nums[L] + nums[R];
                if(sum === target){
                    result.push([nums[i],nums[j],nums[L],nums[R]]);
                    while (L<R && nums[L] === nums[L+1]) L++; // 去重
                    while (L<R && nums[R] === nums[R-1]) R--; // 去重
                    L++;
                    R--;
                }
                else if (sum < target) L++;
                else if (sum > target) R--;
            }
        }

    }
    return result
};

console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))