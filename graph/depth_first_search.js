/**
Applications of Depth First Search
Depth-first search (DFS) is an algorithm (or technique) for traversing a graph. 

Following are the problems that use DFS as a bulding block.

1) For an unweighted graph, DFS traversal of the graph produces the minimum spanning tree and all pair shortest path tree.

2) Detecting cycle in a graph 
A graph has cycle if and only if we see a back edge during DFS. So we can run DFS for the graph and check for back edges. (See this for details)

3) Path Finding
We can specialize the DFS algorithm to find a path between two given vertices u and z.
i) Call DFS(G, u) with u as the start vertex.
ii) Use a stack S to keep track of the path between the start vertex and the current vertex.
iii) As soon as destination vertex z is encountered, return the path as the
contents of the stack

See this for details.

4) Topological Sorting
Topological Sorting is mainly used for scheduling jobs from the given dependencies among jobs. In computer science, applications of this type arise in instruction scheduling, ordering of formula cell evaluation when recomputing formula values in spreadsheets, logic synthesis, determining the order of compilation tasks to perform in makefiles, data serialization, and resolving symbol dependencies in linkers [2].

5) To test if a graph is bipartite
We can augment either BFS or DFS when we first discover a new vertex, color it opposited its parents, and for each other edge, check it doesn’t link two vertices of the same color. The first vertex in any connected component can be red or black! See this for details.

6) Finding Strongly Connected Components of a graph A directed graph is called strongly connected if there is a path from each vertex in the graph to every other vertex. (See this for DFS based algo for finding Strongly Connected Components)

7) Solving puzzles with only one solution, such as mazes. (DFS can be adapted to find all solutions to a maze by only including nodes on the current path in the visited set.)
**/

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
  
  dfs(v) {
    v = v >> 0;
    if (!this.adj[v]) return;
    let visited = new Array(this.n);
    this.dfsRec(v, visited);
  }
  
  dfsRec(v, visited) {
    visited[v] = true;
    console.log(v);
    
    let ll = this.adj[v].get();
    
    while(ll) {
      if (!visited[ll.d]) {
        this.dfsRec(ll.d, visited);
      }

      ll = ll.next;
    }
  }
  
  isCyclic() {
    const visited = new Array(this.n);
    const inStack = new Array(this.n);
    
    for(let i=0; i<this.n; i++) {
      if (this.isCyclicRec(i, visited, inStack)) {
        return true;
      }
    }
    
    return false;
  }
  
  isCyclicRec(v, visited, inStack) {
    visited[v] = true;
    inStack[v] = true;

    let ll = this.adj[v].get();
    while(ll) {
      const d = ll.d;
      if ((visited[d] && inStack[d]) || (!visited[d] && this.isCyclicRec(d)) {
        return true;
      }
        
      ll = ll.next;
    }
    
    inStack[v] = false;
    return false;
  }

  isConnected(v, w) {    
    if (!this.adj[v]) throw Error("Invalid vertex");

    const visited = new Array(this.n);
    return this.isConnectedUtil(v, w, visited);
  }
  
  isConnectedUtil(v, w, visited) {
    if (v === w) return true;

    visited[v] = true;
    
    let ll = this.adj[v].get();
    
    while(ll) {
      const d = ll.d;
      if (!visited[d] && this.isConnectedUtil(d, w, visited)) {
        return true;
      }
      ll = ll.next;
    }

    return false;
  }

  /** 
  Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv, 
  vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.
  For example, a topological sorting of the following graph is “5 4 2 3 1 0”. 
  There can be more than one topological sorting for a graph. For example, another topological sorting of the following graph
   is “4 5 2 3 1 0”. The first vertex in topological sorting is always a vertex with in-degree as 0 
   (a vertex with no in-coming edges).
  **/
  topologicalSort() {
    const visited = new Array(this.n);
    const execStack = [];
    
    for (let i=0; i<this.n; i++) {
      if (!if (visited[v]))
        this.topologicalSortUtil(i, visited, execStack);
    }
    
    return execStack;
  }
  
  topologicalSortUtil(v, visited, stack) {
    visited[v] = true;
    
    let ll = this.adj[v].get();
    
    while(ll) {
      const d = ll.d;
      if (!visited[d]) 
        this.topologicalSortUtil(d, visited, stack);
      
      ll = ll.next;
    }
    
    stack.unshift(v)
  }
}


const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(1, 3);
g.addEdge(2, 1);
g.addEdge(2, 3);
g.addEdge(2, 2);
/**
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
**/
//g.dfs()
console.log(g.isCyclic());
