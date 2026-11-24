class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = ""
        for(const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = []
        let i = 0
        while(i < str.length) {

            let separator = i;

            while(str[separator] !== "#") {
                separator++;
            }

            const length = Number(str.slice(i, separator));

            const start = separator + 1;
            const end = start + length;

            result.push(str.slice(start, end));

            i = end;

        }

        return result;
    }
}
