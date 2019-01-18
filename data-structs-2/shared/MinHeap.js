class MinHeap {
  constructor(capacity) {
    this.capacity = parseInt(capacity);
    this.lastIndex = 0;
    this.heap = new Array(this.size);
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  add(v) {
    if (this.lastIndex === this.size) throw new Error("Heap overflow");

    this.heap[this.lastIndex] = v;
    this.minHeapify(this.lastIndex);
    this.lastIndex +=1;
  }

  minHeapify(i) {
    let parent = i;
    const left = 2*parent + 1;
    const right = 2*parent + 2;

    if (left < this.size && this.heap[parent] > this.heap[left]) parent = left;
    if (right < this.size && this.heap[parent] > this.heap[right]) parent = right;

    if (parent != i) {
      this.swap(parent, i)

      console.log('after swapping' , parent, i, [...this.heap])
      this.minHeapify(parent);
    }
  }

  decreaseKey(i) {}
  deleteKey() {}
  extractMin() {
    const temp = this.heap[0];
    this.heap[0] = Number.MAX_VALUE;
    this.minHeapify(0);
    this.heap[this.lastIndex] = undefined;
    this.lastIndex -=1;
    return temp
  }
}

/**
 * class MinHeap {
  constructor(capacity) {
    this.capacity = parseInt(capacity);
    this.lastIndex = 0;
    this.heap = new Array(this.size);
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  add(node) {
    if (this.lastIndex === this.size) throw new Error("Heap overflow");

    this.heap[this.lastIndex] = node;

    let p = this.parent(this.lastIndex);
    let i = this.lastIndex;

    while(i !== 0 && this.heap[p].w>this.heap[i].w) {
      this.swap(i, p);
      i = p;
      p = this.parent(i)
    }

    this.lastIndex +=1;
  }

  minHeapify(i) {
    let parent = i;
    const left = 2*parent + 1;
    const right = 2*parent + 2;

    if (left < this.lastIndex && 
      this.heap[left] !== undefined &&
      this.heap[parent].w > this.heap[left].w) parent = left;
    if (right < this.lastIndex && 
      this.heap[right] !== undefined &&
      this.heap[parent].w > this.heap[right].w) parent = right;

    if (parent != i) {
      this.swap(parent, i)
      this.minHeapify(parent);
    }
  }

  empty() {
    return this.heap[0] === undefined;
  }

  parent(i) { return (i-1)/2 | 0; } 

  find(src) {
    for (let i=0; i<this.lastIndex; i++) {
      if (this.heap[i].src === src) return i;
    }
  }

  decreaseKey(s, v) {
    let i = this.find(s);

    if (i === undefined) return;

    this.heap[i].w = v;    
    let p = this.parent(i);

    while(i !== 0 && this.heap[p].w>this.heap[i].w) {
      this.swap(i, p);
      i = p;
      p = this.parent(i)
    }
  }

  extractMin() {
    const temp = this.heap[0];
    this.heap[0] = this.heap[this.lastIndex-1];
    this.heap[this.lastIndex-1] = undefined;
    this.lastIndex -= 1;

    this.minHeapify(0);
    return temp
  }
}
 */