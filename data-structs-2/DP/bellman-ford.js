class Edge { 
  constructor() {
    this.src = this.dest = this.weight = 0;
  }
};

class Graph {
    // Creates a graph with V vertices and E edges 
    constructor(v, e) {
        this.V = v;
        this.E = e;
        this.edge = Array.apply(null, Array(e)).map(() => new Edge());
    }
    // The main function that finds shortest distances from src
    // to all other vertices using Bellman-Ford algorithm.  The
    // function also detects negative weight cycle
    BellmanFord(graph, src) {
      const MAX = Number.MAX_VALUE;
      const dist = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, MAX);

      const p = Array.apply(null, Array(this.V));
      p[src] = src;

      dist[src] = 0;

      for (let i=1; i<this.V; i++) {

        for(let j=0; j<this.E; j++) {

          const u = this.edge[j].src;
          const v = this.edge[j].dest;
          const w = this.edge[j].weight

          if (dist[u] !== MAX && dist[u] + w < dist[v]) {
            dist[v] = dist[u] + w;

            console.log('setting up dist', u, v, w, dist)
            p[v] = u;
          }
        }
      }

      for(let j=0; j<this.E; j++) {

        const u = this.edge[j].src;
        const v = this.edge[j].dest;
        const w = this.edge[j].weight

        if (dist[u] !== MAX && dist[u] + w < dist[v]) {
          console.log('negative cycle detected at', u, v, w, dist)
        }
      }

      console.log('dist', dist)
      console.log('p', p)
    }
  }

const V = 5;  // Number of vertices in graph 
const E = 8;  // Number of edges in graph 

const graph = new Graph(V, E); 

// add edge 0-1 (or A-B in above figure) 
graph.edge[0].src = 0; 
graph.edge[0].dest = 1; 
graph.edge[0].weight = -1; 

graph.edge[7].src = 1; 
graph.edge[7].dest = 0; 
graph.edge[7].weight = -1;

// add edge 0-2 (or A-C in above figure) 
graph.edge[1].src = 0; 
graph.edge[1].dest = 2; 
graph.edge[1].weight = 4; 

// add edge 1-2 (or B-C in above figure) 
graph.edge[2].src = 1; 
graph.edge[2].dest = 2; 
graph.edge[2].weight = 3; 

// add edge 1-3 (or B-D in above figure) 
graph.edge[3].src = 1; 
graph.edge[3].dest = 3; 
graph.edge[3].weight = 2; 

// add edge 1-4 (or A-E in above figure) 
graph.edge[4].src = 1; 
graph.edge[4].dest = 4; 
graph.edge[4].weight = 2; 

// add edge 3-2 (or D-C in above figure) 
graph.edge[5].src = 3; 
graph.edge[5].dest = 2; 
graph.edge[5].weight = 5; 

// add edge 3-1 (or D-B in above figure) 
graph.edge[6].src = 3; 
graph.edge[6].dest = 1; 
graph.edge[6].weight = 1; 

// add edge 4-3 (or E-D in above figure) 
// graph.edge[7].src = 4; 
// graph.edge[7].dest = 3; 
// graph.edge[7].weight = -3; 

graph.BellmanFord(graph, 0); 