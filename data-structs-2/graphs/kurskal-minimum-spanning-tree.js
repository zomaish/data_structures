

class Node {
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}


class Graph {
  constructor(V, E) {
    this.V = V|0;
    this.E = E|0;

    this.edge = Array.apply(null, Array(this.E)).map(() => new Node())
  }

  find(v, parent) {
    let x = v;
    while(x !== parent[x]) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }

    return x;
  }

  union(x, y, parent, rank) {
    if (rank[x] > rank[y]) {
      parent[y] = parent[x];
    } else if(rank[y] > rank[x]) {
      parent[x] = parent[y]
    } else {
      parent[y] = parent[x]
      rank[x] += 1;
    }
  }

  sort(arr) {
    return arr.sort((a, b) => {
      console.log('a', a, b)
      if (a.weight > b.weight) return 1;
      if (a.weight < b.weight) return -1

      return 0;
    });
  }

  kruskalMST() {
    console.log('edges', this.sort(this.edge));

    const parent = Array.apply(null, Array(this.V)).map((e, idx) => idx);
    const rank = Array.apply(null, Array(this.V)).map(Number.prototype.valueOf, 0);
    const set = new Array(this.V-1);

    let i = 0;
    let e = 0;

    while(e < this.V-1) {

      const edge = this.edge[i++];

      const x = this.find(edge.src, parent);
      const y = this.find(edge.dest, parent);

      if (x !== y) {
        this.union(x, y, parent, rank);
        set[e++] = edge
      }
    }
  }

}


 const V = 4;  // Number of vertices in graph 
 const E = 5;  // Number of edges in graph 
 const graph = new Graph(V, E); 

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

 graph.kruskalMST(); 