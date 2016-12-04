//find ==> find node is part of group




class Edge {
  constructor(src, dest) {
    this.src = src;
    this.dest = dest;
  }
}

class Graph {
  constructor(V, E) {
    this.V = V;
    this.E = E;
    this.edge = Array.apply(null, Array(E)).map(() => {return new Edge()});
  }
  

  //this find is log
  static find(subset, e) {
    if (subset[e].parent !=e)
      subset[e].parent = Graph.find(subset, subset[e].parent);
    
    return subset[e].parent;
  }
  
  static union(subset, s, d) {
    const sroot = find(subset, s);
    const droot = find(subset, d);

    if (subset[sroot].rank > subset[droot].rank) {
      subset[droot].parent = sroot;
    } else if (subset[droot].rank > subset[sroot].rank) {
      subset[sroot].parent = droot;
    } else {
      subset[droot].parent = sroot;
      subset[sroot].rank += 1;
    }
  }
  
  static isCyclic(G) {
    const subset = Array.apply(null, Array(G.E)).map((e) => {
      return {parent: e, rank: 0};
    });
    let s, d;
    
    for (let i=0; i<G.E; i++) {
      
      s = find(subset, G.edge[i].src);
      d = find(subset, G.edge[i].dest);
      
      if (s===d) return true;
      
      Grpah.union(subset, s, d);
    }
    
    return false;
  }
}

const graph = new Graph(3, 3);
// add edge 0-1
graph.edge[0].src = 0;
graph.edge[0].dest = 1;

// add edge 1-2
graph.edge[1].src = 1;
graph.edge[1].dest = 2;

// add edge 0-2
graph.edge[2].src = 0;
graph.edge[2].dest = 2;

console.log(Graph.isCyclic(graph))












class Edge {
  constructor(src, dest) {
    this.src = src;
    this.dest = dest;
  }
}

class Graph {
  constructor(V, E) {
    this.V = V;
    this.E = E;
    this.edge = Array.apply(null, Array(E)).map(() => {return new Edge()});
  }
  
  //this find is linear
  static find(parent, i) {
    if (parent[i] === -1)
      return i;
    return Graph.find(parent, parent[i]);
  }

  static union(s, d, parent) {
    const xset = Graph.find(parent, s);
    const yset = Graph.find(parent, d);
    parent[xset] = yset;
  }
  
  static isCyclic(graph) {
    const parent = Array.apply(null, Array(graph.V)).map(Number.prototype.valueOf, -1);


    let s, d;

   
    for (let i = 0; i < graph.E; i++) {
      s = Graph.find(parent, graph.edge[i].src);
      d = Graph.find(parent, graph.edge[i].dest)
      
      if (s===d)
        return true;
      
      Graph.union(s, d, parent);
      console.log("parent", parent)
    }

    return false;
  }
}



const graph = new Graph(3, 3);
 
// add edge 0-1
graph.edge[0].src = 0;
graph.edge[0].dest = 1;

// add edge 1-2
graph.edge[1].src = 1;
graph.edge[1].dest = 2;

// add edge 0-2
graph.edge[2].src = 0;
graph.edge[2].dest = 2;

console.log(Graph.isCyclic(graph))