class MinHeap {
  constructor(cap) {
    this.heapArr = new Array(cap);
    this.lastPos = 0;
  }

  insertKey(k) {
    if (this.heapArr[this.heapArr.length-1]) return;

    this.heapArr[this.lastPos] = k;
    let i = this.lastPos;
    this.lastPos += 1;

    while (i > 0 && this.heapArr[i] < this.heapArr[parent(i)]) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }

  decreaseKey(pos, v) {
    let i = pos;
    this.heapArr[i] = v;

    while (i > 0 && this.heapArr[i] < this.heapArr[parent(i)]) {
      this.swap(i, parent(i));
      i = parent(i);
    }
  }

  extractMin() {
    console.log(this.lastPos)
    const min = this.heapArr[0];

    if (this.lastPos <= 0) {
      this.heapArr[0] = undefined;
      return min;
    }
    
    this.heapArr[0] = this.heapArr[this.lastPos-1];
    --this.lastPos;
    this.minHeapify(0)

    return min;
  }
  
  getMin() {
    return this.heapArr[0];
  }

  deleteKey(k) {
    this.decreaseKey(k, Number.MIN_VALUE);
    this.extractMin();
  }

  minHeapify(pos) {
    let p = pos;
    const l = 2*pos + 1;
    const r = 2*pos + 2;
    if (this.heapArr[p] > this.heapArr[l]) 
      p = l
    if (this.heapArr[p] > this.heapArr[r])
      p = r;

    if (p !== pos) {
      this.swap(p, pos);
      this.minHeapify(p);
    }
  }

  swap(a, b) {
    const temp = this.heapArr[a];
    this.heapArr[a] = this.heapArr[b];
    this.heapArr[b] = temp;
  }
}

const parent = (i) => Math.floor(i/2);


const h = new MinHeap(11); 
h.insertKey(3); 
h.insertKey(2); 
h.deleteKey(1); 
h.insertKey(15); 
h.insertKey(5); 
h.insertKey(4); 
h.insertKey(45); 
console.log("extractMin", h.extractMin());
console.log("extractMin", h.getMin());
h.decreaseKey(2, 1);
console.log("extractMin", h.getMin());
console.log(h.heapArr); 