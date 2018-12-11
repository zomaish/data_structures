class Graph {
  constructor(V) {
    this.V = V|0;

    this.adj = Array.apply(null, Array(this.V)).map(() => [])
  }

  find(parent, i) {
    while(parent[i] !== i) {
      parent[i] = prent[parent[i]]
      i = parent[i];
    }

    return i;
  }

  union(parent, size, x, y) {
    if (size[x] < size[y]) {
      parent[x] = parent[y];
      size[y] += size[x];
    } else {
      parent[y] = parent[x]
      size[x] = size[y];
    }
  }

  hasCycle() {
    const parent = Array.apply(null, Array(this.V)).map((e, i)=>i);
    const size = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, 1);

    for(let i=0; i<this.V; i++) {
      for(let j=0; j<this.adj[i].length; j++) {
        const x = this.find(parent, i);
        const y = this.find(parent, this.adj[i][j]);

        if (x === y) return true

        this.union(parent, size, x, y);
      }
    }

  }
}



const gr = new Graph(3);

g.adj[0].push(1);
g.adj[0].push(2);
g.adj[1].push(2);

console.log(gr.hasCycle());
