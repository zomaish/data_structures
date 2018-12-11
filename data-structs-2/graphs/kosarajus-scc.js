

//this is  Kosaraju’s SCC algo

class LLNode {
  constructor(v) {
      this.v = v;
      this.next = null;
  }
}

class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];

    for(let i = 0; i<v; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  printScc() {
      let visited = Array.apply(null, Array(this.v)).map(Boolean.prototype.valueOf, false);
      const s = [];

      for (let i=0; i<this.v; i++) {
          if (!visited[i]) {
              this.fillOrder(i, visited, s);
          }
      }

      console.log('s is ', s)
      const gr = this.getTranspose()

      console.log('trans gr ', gr)

      visited = Array.apply(null, Array(this.v)).map(Boolean.prototype.valueOf, false);
      while(s.length) {
          const u = s.shift();
          if (!visited[u]) {
              gr.dfsUtil(u, visited);
              console.log('--------')
          }
      }
  }

  dfsUtil(i, visited) {
      visited[i] = true
      console.log(i);

      this.adj[i].map((u) => {
          if (!visited[u]) {
              this.dfsUtil(u, visited)
          }
      })
  }
  fillOrder(i, visited, s) {
      visited[i] = true;

      this.adj[i].map((e) => {
          if (!visited[e]) {
              this.fillOrder(e, visited, s);
          }
      });

      s.unshift(i)
  }

  getTranspose() {
      const gr = new Graph(this.v);

      for (let i=0; i<this.v; i++) {
          this.adj[i].map((u) => {
              gr.addEdge(u, i);
          });
      }
      return gr;
  }
}


const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

g.printScc();
