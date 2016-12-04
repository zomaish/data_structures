/**
  http://www.geeksforgeeks.org/strongly-connected-components/
  A directed graph is strongly connected if there is a path between all pairs of vertices.
  A strongly connected component (SCC) of a directed graph is a maximal strongly connected subgraph.
  For example, there are 3 SCCs in the following graph.
**/
class Node {
  constructor(d) {
    this.d = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(d) {
    this.head = this.addRec(this.head, d);
  }

  addRec(node, d) {
    if (!node)
      return new Node(d);

    node.next = this.addRec(node.next, d);
    return node;
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


  DFSUtil(i, visited, stack) {
    visited[i] = true;

    let node = this.adj[i].get();

    while(node) {
      if (!visited[node.d])
        this.DFSUtil(node.d, visited, stack);
        node = node.next;
    }

    stack.push(i);
  }

  transpose() {
    let g = new Graph(this.n);
    for(let i=0; i<this.n; i++) {
      let node = this.adj[i].get();

      while(node) {
        g.addEdge(node.d, i);
        node = node.next;
      }
    }

    return g;
  }


  printAll(i, visited) {
    visited[i] = true;

    console.log(i);
	let node = this.adj[i].get();
    while(node) {
      if (!visited[node.d])
        this.printAll(node.d, visited);
        node = node.next;
    }
  }

  printScc() {

    let visited = Array.apply(null, Array(this.n)).map(Boolean.prototype.valueOf, false);

    let stack = [];

    for(let i=0; i<this.n; i++) {
      if (!visited[i])
        this.DFSUtil(i, visited, stack)
    }

    let rg = this.transpose();
    visited = Array.apply(null, Array(this.n)).map(Boolean.prototype.valueOf, false);

    console.log("-----------");
    while(stack.length) {
      let v = stack.pop();
      if (!visited[v]) {
        rg.printAll(v, visited);
        console.log("+++++");
      }
    }
  }
}



const g = new Graph(5);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(3, 4);

g.printScc();
