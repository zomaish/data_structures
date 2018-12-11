//find cycle in a graph

//a graph is a cycle if g[u][u] = 1

//there are max N(N-1) Edeges in directed graph and N(N-1)/2 in undirected graph

class Node {
  constructor(src, dest) {
    this.src = src;
    this.dest = dest;
  }
}


class Graph {
  constructor(V) {
    this.V = V|0;

    this.edge = Array.apply(null, Array(this.V)).map(() => new Node())
  }

  find(parent, x) {
    if (parent[x] === -1) return x;
    return this.find(parent, parent[x]);
  }

  union(parent, x, y) {
    const a = this.find(parent, x);
    const b = this.find(parent, y);
    parent[a] = b;
  }


  hasCycle() {
    const parent = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, -1);

    for(let i=0; i<this.V; i++) {
      const x = this.find(parent, this.edge[i].src);
      const y = this.find(parent, this.edge[i].dest);

      if (x === y)
        return true;

      this.union(parent, x, y);
    }
  }
}


const graph = new Graph(V, E); 
  
  // add edge 0-1 
  graph.edge[0].src = 0; 
  graph.edge[0].dest = 1; 

  // add edge 1-2 
  graph.edge[1].src = 1; 
  graph.edge[1].dest = 2; 

  // add edge 0-2 
  graph.edge[2].src = 0; 
  graph.edge[2].dest = 2; 


  console.log(graph.hasCycle())