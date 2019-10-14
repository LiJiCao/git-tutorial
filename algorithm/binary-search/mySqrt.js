/**
 * 69. x的平方根
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0, r = x;
    while (l <= r) {
        let mid = (l + r) >>> 1;
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid > x) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return 1;
};

// 牛顿法:
// f(x) = x^2 - a
// f'(x) = 2x
// 令f(x) = 0 得
// f(x0) + (x - x0)f'(x0) = 0
// x = x - f(x0) / f'(x0) = 1/2(x0 + a / x0)
var mySqrt2 = function (x) {
    let a = x;
    while (a * a > x) {
        a = Math.floor(0.5 * (a + x / a));
    }
    return a;
};

var search = function(nums, target) {
    let n = nums.length;
    if (n === 0) {
        return -1;
    }
    if (n === 1) {
        return nums[0] === target ? 0 : -1;
    }

    let rotate_search = (l, r) => {
        if (nums[l] < nums[r]) {
            return 0;
        }
        while (l <= r) {
            console.log(l, r);
            let mid = (l + r) >>> 1;
            if (nums[mid] > nums[mid + 1]) {
                return mid + 1;
            } else {
                if (nums[mid] >= nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return 0;
    }

    let binary_search = (l, r) => {
        console.log(l, r);
        while (l <= r) {
            let mid = (l + r) >>> 1;

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return -1;
    }


    let r_index = rotate_search(0, n - 1);
    if (nums[r_index] === target) {
        return r_index;
    }
    if (r_index === 0) {
        return binary_search(0, n - 1);
    }
    if (target < nums[0]) {
        return binary_search(r_index, n - 1);
    }
    return binary_search(0, r_index);
};

console.log(search([8,9,2,3,4], 9));