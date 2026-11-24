class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const findMatch = new Set<number>();
        for(let i = 0; i < nums.length; i++) {
            if(findMatch.has(nums[i])) {
                return true
            }
               findMatch.add(nums[i]);
            }
        
        return false;
    }
}


