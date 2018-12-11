/**
1) Shortest Path and Minimum Spanning Tree for unweighted graph In unweighted graph, the shortest path is the path with least number of edges. With Breadth First, we always reach a vertex from given source using minimum number of edges. Also, in case of unweighted graphs, any spanning tree is Minimum Spanning Tree and we can use either Depth or Breadth first traversal for finding a spanning tree.

2) Peer to Peer Networks. In Peer to Peer Networks like BitTorrent, Breadth First Search is used to find all neighbor nodes.

3) Crawlers in Search Engines: Crawlers build index using Breadth First. The idea is to start from source page and follow all links from source and keep doing same. Depth First Traversal can also be used for crawlers, but the advantage with Breadth First Traversal is, depth or levels of built tree can be limited.

4) Social Networking Websites: In social networks, we can find people within a given distance ‘k’ from a person using Breadth First Search till ‘k’ levels.

5) GPS Navigation systems: Breadth First Search is used to find all neighboring locations.

6) Broadcasting in Network: In networks, a broadcasted packet follows Breadth First Search to reach all nodes.

7) In Garbage Collection: Breadth First Search is used in copying garbage collection using Cheney’s algorithm. Refer this and for details. Breadth First Search is preferred over Depth First Search because of better locality of reference:

8) Cycle detection in undirected graph: In undirected graphs, either Breadth First Search or Depth First Search can be used to detect cycle. In directed graph, only depth first search can be used.

9) Ford–Fulkerson algorithm In Ford-Fulkerson algorithm, we can either use Breadth First or Depth First Traversal to find the maximum flow. Breadth First Traversal is preferred as it reduces worst case time complexity to O(VE2).

10) To test if a graph is Bipartite We can either use Breadth First or Depth First Traversal.

11) Path Finding We can either use Breadth First or Depth First Traversal to find if there is a path between two vertices.

12) Finding all nodes within one connected component: We can either use Breadth First or Depth First Traversal to find all nodes reachable from a given node.

Many algorithms like Prim’s Minimum Spanning Tree and Dijkstra’s Single Source Shortest Path use structure similar to Breadth First Search.

Shortest path
Web crawlers
cycle detection

*/

//O(V+E)
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
  
  bfs(v) {
    const visited = Array.apply(null, Array(this.v));
    const q = [];
    let curr;
    
    q.push(v);
    visited[v] = true;

    while (q.length) {
      curr = q.shift();

      console.log(curr);
      let ll = this.adj[curr].head;
      while(ll) {
        if (!visited[ll.d]) {
          q.push(ll.d);
          visited[ll.d] = true;
        }
        ll = ll.next;  
      }
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

g.bfs(2)
//console.log(g.isCyclic());
