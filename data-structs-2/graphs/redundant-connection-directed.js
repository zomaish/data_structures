class OrbitResult {
  constructor(n,  s) {
      this.node = n;
      this.seen = s;
  }
}

  const findRedundantDirectedConnection = (edges) => {
    console.log("edges are", edges);
      const N = edges.length;
      const parent = new Map();
      const candidates = [];

      for (const edge of edges) {
          if (parent.has(edge[1])) {
              candidates.push([parent.get(edge[1]), edge[1]]);
              candidates.push(edge);
          } else {
              parent.set(edge[1], edge[0]);
          }
      }

      console.log('parent', parent.entries(), 'candidates', candidates)

      if (candidates.length === 0) {
        const root = orbit(1, parent);

        console.log('root', root)
        const cycle = orbit(root.node, parent).seen;
        console.log('cycle is ---->', cycle)
        let ans = [0, 0];
        
        for (const edge of edges) {
            console.log('checking ', edge);
            if (cycle.has(edge[0]) && cycle.has(edge[1])) {
                ans = edge;
            }
        }

        return ans;
      }

      const children = new Map();
      for (const v of parent.keys()) {
          const pv = parent.get(v);

          if (!children.has(pv))
              children.set(pv, []);

          children.get(pv).push(v);
      }

      console.log('children', children);


      const seen = Array.apply(null, Array(N+1)).fill(false);

      seen[0] = true;
      const stack = [1];
      while (stack.length > 0) {
          const node = stack.pop();
          console.log('node', node, [...seen])

          if (!seen[node]) {
              seen[node] = true;
              if (children.has(node)) {
                console.log("I should have a stack", children.get(node))
                children.get(node).forEach((c) => stack.push(c));
              }
          }
      }

      
      for (let i=0; i<seen.length; i++) {
        if (!seen[i]) return candidates[0]
      }

      return candidates[1]
  }

  const orbit = (node, parent) => {
      const seen = new Map();
      while (parent.has(node) && !seen.has(node)) {
          seen.set(node, true);
          node = parent.get(node);
      }
      return new OrbitResult(node, seen);
  }

//   console.log('res is ', findRedundantDirectedConnection([[1,2], [1,3], [2,3]]))
  console.log('res is ', findRedundantDirectedConnection([[1,2], [4,1], [2,3], [3,4], [1,5]]))
  //console.log('res is ', findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]))
  //console.log('res is ', findRedundantDirectedConnection([[2,1],[3,1],[4,2]]))
