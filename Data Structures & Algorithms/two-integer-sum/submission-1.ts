class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const matchMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            let targetMatch = target - nums[i];
            if (matchMap.has(targetMatch)) {
                return [matchMap.get(targetMatch), i]
            } else {
                matchMap.set(nums[i], i)
            }           
        }
    }
}
