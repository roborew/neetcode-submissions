class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const keyCount = new Map<number, number>;
        for(let i = 0; i < nums.length; i++)  {
            if (keyCount.get(nums[i])) {
                let count = keyCount.get(nums[i]);
                keyCount.set(nums[i], ++count)
            } else {
                keyCount.set(nums[i], 1)
            }

        }  
        console.log(keyCount)
        return [...keyCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => key)
        .slice(0, k);
    }
}
