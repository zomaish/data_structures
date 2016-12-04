/**
Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and 
connects all the vertices together. A single graph can have many different spanning trees. 
A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, 
connected and undirected graph is a spanning tree with weight less than or equal to the weight of every other 
spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.



1.Sort all the edges in non-decreasing order of their weight.
2. Pick the smallest edge. Check if it forms a cycle with the spanning tree 
formed so far. If cycle is not formed, include this edge. Else, discard it.  
3. Repeat step#2 until there are (V-1) edges in the spanning tree.
**/


class Edge {
  constructor(s, d, w) {
    this.src = s;
    this.dest = d;
    this.weight = w;
  }
}

class Subset {
  constructor(parent, rank) {
    this.parent = parent;
    this.rank = rank >> 0;
  }
}

class Graph {
  constructor(V, E) {
    this.V = V >> 0;
    this.E = E >> 0;
    this.edge = Array.apply(null, Array(this.E)).map((e) => {
        return new Edge(null, null, null);
    });
  }

  static find(subset, e) {
    console.log("e", e, subset)
    if (subset[e].parent !== e)
      subset[e].parent = Graph.find(subset, subset[e].parent)

    return subset[e].parent;
  }

  static union(subset, s, d) {

    const sroot = Graph.find(subset, s);
    const droot = Graph.find(subset, d);
    
    if (subset[sroot].rank > subset[droot].rank) {
      subset[droot].parent = sroot;
    } else if (subset[droot].rank > subset[sroot].rank) {
      subset[sroot].parent = droot;
    } else {
      subset[droot].parent = sroot;
      subset[sroot].rank += 1;
    }

  }


  KruskalMST() {
    const subset = Array.apply(null, Array(this.V)).map((e, idx) => {
        return new Subset(idx, 0);
    });

    this.edge.sort(function (a, b) {
      if (a.weight > b.weight) return 1;
      if (b.weight > a.weight) return -1
      return 0;
    });
    
    const path = new Array(this.V);
    
    let s, d, e=0, i=0, nextEdge;

    while (e < V-1) {

      nextEdge = this.edge[i++];
      
      console.log("nextEdge", nextEdge)

      s = Graph.find(subset, nextEdge.src);
      d = Graph.find(subset, nextEdge.dest);

      if (s!==d) {
        path[e++] = nextEdge;

        Graph.union(subset, s, d);
      }

    }

    console.log("path is", path);
  }

}



const V = 4;  // Number of vertices in graph
const E = 5;  // Number of edges in graph
const graph = new Graph(V, E);

//console.log(graph.edge)
// add edge 0-1
graph.edge[0].src = 0;
graph.edge[0].dest = 1;
graph.edge[0].weight = 10;

// add edge 0-2
graph.edge[1].src = 0;
graph.edge[1].dest = 2;
graph.edge[1].weight = 6;

// add edge 0-3
graph.edge[2].src = 0;
graph.edge[2].dest = 3;
graph.edge[2].weight = 5;

// add edge 1-3
graph.edge[3].src = 1;
graph.edge[3].dest = 3;
graph.edge[3].weight = 15;

// add edge 2-3
graph.edge[4].src = 2;
graph.edge[4].dest = 3;
graph.edge[4].weight = 4;

graph.KruskalMST();