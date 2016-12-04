

class StackWithMin {
  constructor(size) {
    this.minVal = undefined;
    this.stack = [];
  }

  push(v) {
    if (this.minVal === undefined) {
      this.minVal = v;
    }

    if (v < this.minVal) {
      this.stack.push(2*v - this.minVal);
      this.minVal = v;
    } else {
      this.stack.push(v)
    } 
  }

  pop() {
    const res = this.stack.pop();
    if (this.minVal === res) {
      const temp = this.minVal;

      this.minVal = (2*temp - res)
      return temp;
    }

    return res;
  }

  get minVal() {
    return this.minVal;
  }
}