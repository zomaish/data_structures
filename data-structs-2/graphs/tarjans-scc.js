const UNVISITED = -1;
class Graph {
  constructor(v) {
    this.v = v;
    this.adj = [];
    this.nodeId = 0;

    for(let i = 0; i<v; i++) this.adj[i] = [];
  }

  addEdge(u, v) {
    this.adj[u].push(v);
  }

  printScc() {
      const ids = Array.apply(null, Array(this.v)).map(Number.prototype.valueOf, UNVISITED);
      const lowLink = Array.apply(null, Array(this.v)).map(Number.prototype.valueOf, 0);
      const st = [];
      const onStack = Array.apply(null, Array(this.v)).map(Boolean.prototype.valueOf, false);

      for (let u=0; u<this.v; u++) {
          if (ids[u] === UNVISITED) {
              this.dfsUtil(u, ids, lowLink, st, onStack);
          }
      }
  }


  dfsUtil(u, ids, lowLink, st, onStack) {
    st.push(u);
    onStack[u] = true;

    ids[u] = lowLink[u] = this.nodeId++;
    const list = this.adj[u];

    for (let i=0; i<list.length; i++) {
        const v = list[i];
        if (ids[v] === UNVISITED) {
            this.dfsUtil(v, ids, lowLink, st, onStack);
            lowLink[u] = Math.min(lowLink[u], lowLink[v]);
        }
        else if (onStack[v]) {
            lowLink[u] = Math.min(lowLink[u], ids[v])
        }
    }

    if (lowLink[u] === ids[u]) {
        while(st.length) {
            const w = st.pop();
            onStack[w] = false;
            console.log(w)

            if (w === u) {
                console.log('---------')
                return;
            }
        }
    }
  }
}



const g1 = new Graph(5);
g1.addEdge(1, 0); 
g1.addEdge(0, 2); 
g1.addEdge(2, 1); 
g1.addEdge(0, 3); 
g1.addEdge(3, 4);

g1.printScc();