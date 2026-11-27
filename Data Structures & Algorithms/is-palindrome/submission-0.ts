class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    const sArray = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
    let reverse: string[] = [];
    for (let i = sArray.length - 1; i >= 0; i--) {
      reverse.push(sArray[i]);
    }
    console.log(reverse.join(""), sArray.join(""))
    return reverse.join("") === sArray.join("");
  }
}