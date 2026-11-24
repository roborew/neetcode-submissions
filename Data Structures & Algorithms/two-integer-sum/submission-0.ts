class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = 0; i < nums.length; i++) {
            let numMatch = target - nums[i];
            for(let p = i+1; p < nums.length; p++) {
                if(numMatch === nums[p]) {
                    return [i, p]
                }
            }
        }
    }
}
