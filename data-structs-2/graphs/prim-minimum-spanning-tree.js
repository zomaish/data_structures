//graph is for weighted undirected graph
//min spanning trees has n-1 edges

//Time complixity = O(VlogV + E)
const parent = (i) => (i/2) | 0;

class GraphNode {
  constructor(v, w) {
    this.v = v|0;
    this.w = w|0;
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

  primsMST() {
    const parent = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, -1);
    const weights = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, Number.MAX_VALUE);

    const minHeap = new MinHeap(this.V);

    for (let i=0; i<this.V; i++) {
      minHeap.add(i, Number.MAX_VALUE);
    }


    minHeap.arr[0] = new MinHeapNode(0, 0);

    while(minHeap.arr.length) {
      const min = minHeap.extractMin();
      const u = min.v;

      const list = this.adj[u];

      let i=0;

      while(i<list.length) {
        const v = list[i];

        if (minHeap.hasKey(v) && v.w < weights[v]) {
          weights[v] = v.w;
          parent[v] = u;
          minHeap.decreaseKey(v, v.w)
        }

        i++;
      }

    }

  }
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

graph.primsMST(graph);





const getMinDist = (dist, visited) => {
  let idx = -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i=0; i<dist.length; i++) {
    if (!visited[i] && dist[i] <min) {
      min = dist[i];
      idx = i;
    }
  }

  return idx;
}

const primMST = (g) => {

  const V = g.length;
  const dist = Array.apply(null, Array(V)).fill(Number.MAX_SAFE_INTEGER);
  const parent = Array.apply(null, Array(V)).fill(-1);
  const visited = Array.apply(null, Array(V)).fill(false);

  parent[0] = 0;
  dist[0] = 0;

  for (let i=0; i<V; i++) {

    const u = getMinDist(dist, visited);

    console.log('found u', u)
    visited[u] = true;

    for (let j=0; j<V; j++) {

      if(g[u][j] > 0 && !visited[j]
        && dist[j] > graph[u][j]
      ) {
        dist[j] = graph[u][j];
        parent[j] = u;
      }
    }
  }



  console.log('parent', parent, dist)

};

const graph =  [
  [0, 2, 0, 6, 0], 
  [2, 0, 3, 8, 5], 
  [0, 3, 0, 0, 7], 
  [6, 8, 0, 0, 9], 
  [0, 5, 7, 9, 0]
];

// Print the solution 
primMST(graph);




