class Solution {



    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const categorisedStrings = new Map<string, string[]>();
        const sortString = (str) => [...str].sort().join("");

        for (let i = 0; i < strs.length; i++) {
            let orderedKey = sortString(strs[i]);
            if (categorisedStrings.get(orderedKey)) {
                let strGroup = categorisedStrings.get(orderedKey);
                categorisedStrings.set(orderedKey, [...strGroup, strs[i]])
            } else {
                categorisedStrings.set(orderedKey, [strs[i]])
            }

        }
        return [...categorisedStrings.values()];
    }
}
