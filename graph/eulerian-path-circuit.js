class Node {
  constructor(d) {
    this.d = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.numNodes = 0;
  }

  add(d) {
    this.head = this.addRec(this.head, d);
    ++this.numNodes;
  }

  addRec(node, d) {
    if (!node)
      return new Node(d);

    node.next = this.addRec(node.next, d);
    return node;
  }

  size() {
      return this.numNodes;
  }

  get() {
    return this.head;
  }
}

class Graph {
  constructor(n) {
    this.n = n >> 0;
    this.adj = new Array(this.n);

    for (let i=0; i<this.n; i++)
      this.adj[i] = new LinkedList;
  }

  addEdge(v, w) {
    this.adj[v].add(w);
  }

  isConnected() {
      const visited = Array.apply(null, Array(this.n)).map(Boolean.prototype.valueOf, false);






  }


}





// Mark all the vertices as not visited
	    boolean visited[] = new boolean[V];
	    int i;
	    for (i = 0; i < V; i++)
	        visited[i] = false;

	    // Find a vertex with non-zero degree
	    for (i = 0; i < V; i++)
	        if (adj[i].size() != 0)
	            break;

	    // If there are no edges in the graph, return true
	    if (i == V)
	        return true;

	    // Start DFS traversal from a vertex with non-zero degree
	    DFSUtil(i, visited);

	    // Check if all non-zero degree vertices are visited
	    for (i = 0; i < V; i++)
	       if (visited[i] == false && adj[i].size() > 0)
	            return false;

	    return true;
