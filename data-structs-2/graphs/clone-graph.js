class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = [];
  }
}



class UndirectedGraph {
  constructor() {
    this.adj = new WeakMap();
  }
  add(ver, edg) {
    if (!this.adj.has(ver)) {
      this.adj.set(ver, ver);
    }
    
    if (!this.adj.has(edg)) {
      this.adj.set(edg, edg);
    }
    
    this.adj.get(ver).neighbors.push(edg);
    this.adj.get(edg).neighbors.push(ver);
  }


  clone(start) {

    const vertexMap = new WeakMap();
    const selfCycles = new WeakMap();
    const res = new UndirectedGraph()
    const q = [start];

    let sc;

    while(q.length) {
      const node = q.shift();
      const clone = new GraphNode(node.label);

      vertexMap.set(node, clone);

      const neighbors = this.adj.get(node).neighbors;
      for (let i=0; i<neighbors.length; i++) {
        const neighbor = neighbors[i];
        const neighborClone = new GraphNode(neighbor.label);

        if (!vertexMap.has(neighbor)) {
          vertexMap.set(neighbor, neighborClone)
          q.push(neighbor);
        }
 
        if (node !== neighbor) {
          vertexMap.get(node).neighbors.push(neighborClone)
        } else if (!selfCycles.has(node)) {
          selfCycles.set(node, clone);
          vertexMap.get(node).neighbors.push(neighborClone)
        }
      }

      console.log('wewewe', vertexMap.get(node).label, vertexMap.get(node).neighbors)
    }

    return {
      res: res,
      ret: sc
    }
  }

  bfs(start) {
    const visited = new WeakMap();
    const q = [start];

    while(q.length) {
      const node = q.shift();
      visited.set(node, true)
      const neighbors = this.adj.get(node);
      console.log('---------', node.label, neighbors);

      for (let i=0; i<neighbors.length; i++) {
        if (!visited.has(neighbors[i])) {
          q.push(neighbors[i]);
        }
        
      }

    }
    
  }
}

const ug = new UndirectedGraph();

const A = new GraphNode("A");
const B = new GraphNode("B");
const C = new GraphNode("C");
const D = new GraphNode("D");
const E = new GraphNode("E");

ug.add(A, B);
ug.add(B, B);
ug.add(A, D);
ug.add(B, C);
ug.add(C, D);

const res = ug.clone(A)








