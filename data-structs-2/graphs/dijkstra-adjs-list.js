const Graph = require("../shared/graph/GraphWeightedAdjList");
class HeapNode {
  constructor(src, w) {
    this.src = src;
    this.w = w;
  }
}

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

const djikstraSP = (graph, src, V) => {
  const path = Array.apply(null, Array(V)).map(Number.prototype.valueOf, Number.MAX_VALUE);
  path[src] = 0;

  const minHeap = new MinHeap(V);

  for (let i=0; i<V; i++) 
    minHeap.add(new HeapNode(i, Number.MAX_VALUE));

  minHeap.decreaseKey(src, 0)

  
  while(!minHeap.empty()) {
    const u = minHeap.extractMin().src;
    console.log('u is', u)

    let v = graph.adj[u].head;

    while(v) {

      if (path[v.v] > (path[u] + v.w) && path[u] != Number.MAX_VALUE && minHeap.find(v.v) !== undefined) {
        path[v.v] = path[u] + v.w
        minHeap.decreaseKey(v.v, path[v.v]);
      }

      v = v.next
    }
  }
  console.log(path)
};




const V = 9; 
const graph = new Graph(V); 
//make graph undirected in original class
graph.addEdge(0, 1, 4); 
graph.addEdge(0, 7, 8); 
graph.addEdge(1, 2, 8); 
graph.addEdge(1, 7, 11); 
graph.addEdge(2, 3, 7); 
graph.addEdge(2, 8, 2); 
graph.addEdge(2, 5, 4); 
graph.addEdge(3, 4, 9); 
graph.addEdge(3, 5, 14); 
graph.addEdge(4, 5, 10); 
graph.addEdge(5, 6, 2); 
graph.addEdge(6, 7, 1); 
graph.addEdge(6, 8, 6); 
graph.addEdge(7, 8, 7);
// console.log(JSON.stringify(graph.adj));
djikstraSP(graph, 0, V); 