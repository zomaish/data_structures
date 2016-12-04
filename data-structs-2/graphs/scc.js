class Node {
  constructor(v) {
    this.v = v;
  }
}


class Graph {
  constructor(V) {
    this.V = V|0;
    this.adj = Array.apply(null, Array(this.V)).map(() => [])
  }

  addEdge(v, e) {
    this.adj[v].push(e);
  }

  topSort() {
    const visited = Array.apply(null, Array(this.V)).map(Boolean.prototype.valueOf, false);
    const stack = [];

    for(let i=0; i<this.V; i++)
      if (!visited[i])
        this.topSortUtil(i, visited, stack);

      return stack
  }

  topSortUtil(i, visited, stack) {
    visited[i] = true;

    const list = this.adj[i];
    for (let j=0; j<this.V; j++) {
      if (!visited[j])
        this.topSortUtil(j, visited, stack)
    }

    stack.push(i);
    
    console.log('pushed ', i)
  }
  
  dfs() {
    const visited = Array.apply(null, Array(this.V)).map(Boolean.prototype.valueOf, false);
    
    for (let i=0; i<this.V; i++)
      if (!visited[i])
          console.log(this.dfsUtil(i, visited, [i]))
  }
  
  dfsUtil(i, visited, s) {
  	visited[i] = true;
    
    for (let j=0; j<this.adj[i].length; j++) {
    	if (!visited[this.adj[i][j]]) {
          	s.push(this.adj[i][j])
            this.dfsUtil(this.adj[i][j], visited, s);
        }
    }
    
    return s;
  }

  transposeGraph(s) {

    const gr = new Graph(this.V);

    for (let i=0; i<this.V; i++) {
      for(let j=0; j<this.adj[i].length; j++) {
        gr.addEdge(this.adj[i][j], i)
      }
    }
    return gr;
  }

  printSCCs() {

    const s = this.topSort();
    const gr = this.transposeGraph();
    
    const visited = Array.apply(null, Array(s.length)).map(Boolean.prototype.valueOf, false)
    
    while(s.length) {
      if (!visited[v])
		    console.log(gr.dfsUtil(v, visited, [v]));
    }
  }
}




const g = new Graph(5); 
g.addEdge(1, 0); 
g.addEdge(0, 2); 
g.addEdge(2, 1); 
g.addEdge(0, 3); 
g.addEdge(3, 4); 

g.printSCCs(); 