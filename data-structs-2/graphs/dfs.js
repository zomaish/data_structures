

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];

    for(let i = 0; i<v; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  dfs() {
    const visited = new Array(this.v);

    console.log('asdsad')
    for (let i = 0; i<this.v; i++)
      this.dfsUtil(this.adj, visited, i);
  }

  dfsUtil(g, visited, i) {
    if (visited[i]) return;

    console.log('visiting', i)

    visited[i] = true;
    const list = g[i];
    let j = 0;

    while(j < list.length) {
      if (!visited[j])
        this.dfsUtil(list, visited, j);
        
      ++j;

    }
  }



}



const g = new Graph(4); 
g.addEdge(0, 1); 
g.addEdge(0, 2); 
g.addEdge(1, 2); 
g.addEdge(2, 0); 
g.addEdge(2, 3); 
g.addEdge(3, 3);

g.dfs()