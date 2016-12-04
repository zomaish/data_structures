class MyStack {
  constructor() {
    this.s = [];
    this.minVal = Number.MIN_VALUE;
  }
  
  push(x) {
    if (!this.s.length) {
      this.s.push(x);
      this.minVal = x;
      return;
    }
    
    if (x<this.minVal) {
      this.s.push(2*x-this.minVal);
      this.minVal = x;
    } else {
      this.s.push(x);
    }
  }
  
  pop() {
    let t = this.s.pop();
    
    if (t<this.minVal) {
      console.log("pop", this.minVal);
      this.minVal =(2*this.minVal) -t;
    } else {
      console.log("pop2", t)
    }
    
  }
  
  getMin() {
    return this.minVal;
  }
}

 const s = new MyStack();
        s.push(3);
        s.push(5);
        console.log("min val", s.getMin());
        s.push(20);
        s.push(1);
        console.log("min val", s.getMin());

console.log(s.s)
s.pop();
        console.log("min val", s.getMin());
        s.pop();
console.log("min val", s.getMin());

