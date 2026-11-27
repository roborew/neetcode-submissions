class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isAlphanumeric(char: string) {
    return (
        (char >= 'a' && char <= 'z') || 
        (char >= 'A' && char <= 'Z') || 
        (char >= '0' && char <= '9')
    )
  }


  isPalindrome(s: string): boolean {
    let l = 0
    let r = s.length - 1
    while (l < r) {
        while(r > l && !this.isAlphanumeric(s[l])) {    
          l++;
        }
        while(r > l && !this.isAlphanumeric(s[r])) {
          r--;
        }
        if(s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
  }
}