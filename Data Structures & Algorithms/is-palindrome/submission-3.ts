class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */



  isPalindrome(s: string): boolean {
    const newString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const reversedString = newString.split("").reverse().join("")
    return newString === reversedString;
  }
}