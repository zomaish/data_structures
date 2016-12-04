

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];

    for(let i = 0; i<v; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }


  bfs() {
    const visited = Array.apply(null, Array(this.v)).map(Boolean.prototype.valueOf, false);
    const q = [0];
    while (q.length) {
      const i = q.shift();
      if (!visited[i])
        this.bfsUtil(i, visited, q)
    }
  }

  bfsUtil(p, visited, q) {    
    console.log(this.adj[p]);

    const list = this.adj[p];
    let i = 0;
    while (i < list.length) {
      if (!visited[i])
        q.push(list[i])
        visited[i] = true;
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

g.bfs()