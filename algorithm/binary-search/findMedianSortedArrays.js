/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length, n = n1 + n2;
    let arr = new Array(n >>> 1);
    let i1 = 0, i2 = 0;
    for (let i = 0; i < Math.ceil((n + 1) / 2); i++) {
        if (i2 === n2) {
            arr[i] = nums1[i1];
            i1++;
            continue;
        }
        if (i1 === n1) {
            arr[i] = nums2[i2];
            i2++;
            continue;
        }
        if (nums1[i1] > nums2[i2]) {
            arr[i] = nums2[i2];
            i2++;
        } else {
            arr[i] = nums1[i1];
            i1++;
        }
    }

    if (n % 2 !== 0) {
        return arr[n >>> 1];
    } else {
        let index = n >>> 1;
        return (arr[index] + arr[index - 1]) / 2;
    }
};

// 用二分法移动两个(虚拟)数组的割
var findMedianSortedArrays2 = function(nums1, nums2) {
    let n1 = nums1.length, n2 = nums2.length;
    let LMax1, LMax2, RMin1, RMin2;
    // 加了虚拟"#"所以是2 * n1个长度
    // Ci为第i个数组的割，
    let c1, c2, lo = 0, hi = 2 * n1;
    // 保证数组nums1是最短的
    if (n1 > n2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    // 二分
    while (lo <= hi) {
        c1 = (lo + hi) >>> 1; // c1是二分的结果
        c2 = (n1 + n2) - c1;

        // 找到割
        LMax1 = (c1 === 0) ? -Infinity : nums1[(c1 - 1) >>> 1];
        RMin1 = (c1 === 2 * n1) ? Infinity : nums1[c1 >>> 1];
        LMax2 = (c2 === 0) ? -Infinity : nums2[(c2 - 1) >>> 1];
        RMin2 = (c2 === 2 * n2) ? Infinity : nums2[c2 >>> 1];

        // 比较割
        if (LMax1 > RMin2) {
            hi = c1 - 1;
        } else if (LMax2 > RMin1) {
            lo = c1 + 1;
        } else {
            break;
        }
    }

    return (Math.max(LMax1, LMax2) + Math.min(RMin1, RMin2)) / 2;

};