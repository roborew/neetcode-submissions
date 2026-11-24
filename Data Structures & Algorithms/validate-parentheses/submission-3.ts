class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
    const stack: string[] = [];

    const matchingOpen: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const bracket of s) {
        if (bracket === "(" || bracket === "[" || bracket === "{") {
            stack.push(bracket);
        } else {
            const lastOpen = stack.pop();

            if (lastOpen !== matchingOpen[bracket]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
}
