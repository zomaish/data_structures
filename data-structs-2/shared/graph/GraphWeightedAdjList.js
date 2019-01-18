const LinkedList = require("../LinkedList");

class GraphNode {
  constructor(v, w) {
    this.v = v|0;
    this.w = w|0;
  }
}

class Graph {
  constructor(V) {
    this.v = V|0;
    this.adj = Array.apply(null, Array(this.v)).map(() => new LinkedList());

  }

  addEdge(u, v, w) {
    this.adj[u].add(new GraphNode(v, w));
  }
}

module.exports = Graph;