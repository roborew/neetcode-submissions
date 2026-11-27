class MinStack {
    private stack: (number | null)[];
    private minStack: number[];
    
    constructor() {
        this.stack = [];
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
      if(typeof val === 'number') {
          this.stack.push(val)
          this.minStack.push(val)
      } else {
          this.stack.push(null)
      }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.minStack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let minNum: number = this.stack[0];
        for(let i = 1; i < this.stack.length; i++) {
            if(minNum > this.stack[i]) {
                minNum = this.stack[i]
            }
        }
        return minNum
    }
}
