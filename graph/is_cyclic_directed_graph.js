class LLNode {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  add(d) {
    this.head = this.addRec(this.head, d);
      
  }
  
  addRec(node, d) {
    if (!node) {
      ++this.length;
      return new LLNode(d);
    }
    node.next = this.addRec(node.next, d);
    return node;
  }
}

class Graph {
  constructor(v) {
    this.V = v | 0;
    this.adj = new Array(this.V);
    
    for (let i=0; i<this.V; i++)
      this.adj[i] = new LinkedList;
  }

  addEdge(s, d) {
    this.adj[s].add(d);
  }

  isCyclic() {

    const visited = new Array(this.V);
    const rStack = new Array(this.V);

    for (let i=0; i<this.V; i++) {
      visited[i] = false;
      rStack[i] = false;
    }

    for (let j=0; j<this.V; j++) {
      if(visited[j] === false)
        if (this.isCyclicUtil(j, visited, rStack))
          return true
    }

    return false;
  }

  isCyclicUtil(n, v, s) {

    v[n] = true;
    s[n] = true;

    let ll = this.adj[n].head;
  
    while(ll) {
      if (v[ll.data] === false && this.isCyclicUtil(ll.data, v, s))
        return true;
      else if (s[ll.data] === true)
        return true;

      ll = ll.next
    }
    s[n] = false;
    return false;
  }
}


const g = new Graph(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    //g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    console.log(g.isCyclic())