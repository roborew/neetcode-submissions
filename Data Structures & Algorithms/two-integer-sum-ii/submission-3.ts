class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const selectedPair: number[] = [];
        const checkSum = new Map<number, number>;
        for (let i = 0; i < numbers.length; i++) {
            const targetMatch = target - numbers[i];
            if(checkSum.has(targetMatch)) {
                selectedPair.push(checkSum.get(targetMatch) + 1, i + 1)
            } else {
                checkSum.set(numbers[i], i)
            }

  }
  return selectedPair;

}
}
