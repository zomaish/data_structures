//should redo with lists instead of a matrix

//also solve https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/

//Time complexity = O(VlogV + E) using fib heap
class GraphNode {
  constructor(v, w) {
    this.v = v|0;
    this.w = w|0;
  }
}

class Graph {
  constructor(V) {
    this.v = V|0;
    this.adj = new Array(this.v);

    for (let i = 0; i<this.v; i++)
      this.adj[i] = [];
  }

  addEdge(u, v, w) {
    this.adj[u].push(new GraphNode(v, w));
  }
}

class MinHeapNode {
  constructor(v, dest) {
    this.v = v|0;
    this.dest = dest|0;
  }
}

class MinHeap {
  constructor(capSize) {
    this.capSize = capSize | 0;
    this.arr = new Array(capSize);
    this.lastPos = 0;
  }

  add(v, dest) {
    this.arr[this.lastPos] = new MinHeapNode(v, dest);
    let i = this.lastPos;
    ++this.lastPos;

    while(i > 0 && this.arr[i].v < this.arr[parent(i)].v) {
      this.swap(i, parent(i));
      i = parent(1)
    }
  }

  swap(a, b) {
    const temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.heapArr[b] = temp;
  }

  extractMin() {
    const min = this.arr[0]
    if (this.lastPos <= 0) {
      this.arr[0] = undefined;
      return min;
    }

    this.arr[0] = this.arr[this.lastPos-1];
    --this.lastPos;

    this.minHeapify(0);

    return min;
  }

  decreaseKey(pos, v) {
    let i = pos;
    this.arr[i] = v;

    while(i > 0 && this.arr[i].v < this.arr[parent(i)].v) {
      this.swap(i, parent(i));
      i = parent(i)
    }
  }

  minHeapify(i) {
    let p = i;
    const l = 2*i + 1;
    const r = 2*i + 2;

    if (l<this.capSize && this.arr[l].v < this.arr[p].v)
      p = l

    if (r < this.capSize && this.arr[l].v < this.arr[p].v)
      p = r

    if (p !== i) {
      const t = this.arr[p];
      this.arr[p] = this.arr[i];
      this.arr[i] = this.arr[p];
      this.minHeapify(p)
    }
  }
}

const parent = (i) => (i/2) | 0;


const djikstraSP = (g, src, V) => {
  const dist = Array.apply(null, Array(V)).map(Number.prototype.valueOf, Number.MAX_VALUE);
  const minHeap = new MinHeap(V);

  for (let i = 0; i<V; i++) {
    minHeap.add(v, Number.MAX_VALUE);
  }

  dist[src] = 0;
  minHeap.decreaseKey(src, dist[src]);

  while(minHeap.length) {
    const u = minHeap.extractMin().v;

    const list = g.adj[u];
    let i=0;

    while(i<list.length) {
      const n = list[i].v;

      if (minHeap.hasKey(n) &&
        dist[u] !== Number.MAX_VALUE
        && dist[n] > dist[u] + list[i].w
      ) {
        dist[n] = dist[u] + list[i].w;

        minHeap.decreaseKey(n, dist[n])
      }

      ++i;
    }
  }

  const list = g.adj[src];
}


const V = 9; 
const graph = new Graph(V); 
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
  
djikstraSP(graph, 0, V); 
  