const LinkedList = require("../LinkedList");

class GraphNode {
  constructor(v) {
    this.v = v|0; 
  }
}

class DirectedGraph {
  constructor(V) {
    this.v = V|0;
    this.adj = Array.apply(null, Array(this.v)).map(() => new LinkedList());
  }

  addEdge(u, v) {
    this.adj[u].add(new GraphNode(v));
  }
}

module.exports = DirectedGraph;