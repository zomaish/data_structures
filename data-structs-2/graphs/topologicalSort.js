

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];

    for(let i = 0; i<v; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  topologicalSort() {
    const visited = Array(null, Array(this.v)).map(Boolean.prototype.valueOf, false);
    const s = [];
    for (let i = 0; i < this.v; i++) {
      if (!visited[i])
        this.topologicalSortUtil(i, visited, s)
    }

    while(s.length)
      console.log(s.pop());
  }

  topologicalSortUtil(v, visited, s) {
    visited[v] = true;

    const list = this.adj[v];
    let i = 0;
    while(i<list.length) {
      if (!visited[list[i]])
        this.topologicalSortUtil(list[i], visited, s)
        
      i++
    }

    s.push(v);
  }
}

const g = new Graph(6);
g.addEdge(5, 2);
g.addEdge(5, 0);
g.addEdge(4, 0);
g.addEdge(4, 1);
g.addEdge(2, 3);
g.addEdge(3, 1);

g.topologicalSort();
