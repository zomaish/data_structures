const WHITE = 'white';
const GREY = 'grey';
const BLACK = 'black';

class Node {
  constructor(v) {
    this.d = 0;
    this.parent = Number.MAX_VALUE;
    this.v = v;
    this.color = WHITE;
  }
}

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = Array.apply(null, Array(v)).map(() => []);
  }

  addEdge(u, v) {
    if (!this.adj[u].length) {
      this.adj[u].push(new Node(u));  
    }
    this.adj[u].push(new Node(v));
  }

  bfs(s) {

    const q = [];
    for (let i=0; i<this.adj[s].length; i++) {

      const n = this.adj[s][i];
      n.color = grey;
      n.parent = s;

      q.push(n); 
    }

    while(q.length) {
      const u = q.pop();
      const list = this.adj[u.v];

      for (let j=0;)

      
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

g.bfs(0)