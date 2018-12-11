

const isSafe = (g, path, v, pos) => {
  if (!g[v][pos]) return false;

  for (let i=0; i<path.length; i++) {
    if (path[i] === v) return false;
  }

  return true;
}


const hasHamCycleUtil = (g, path, V, pos) => {
  if (pos >= V) {
    return g[path[pos-1]][path[0]] === 1;
  }

  for (v=1; v<V; v++) {
    if (isSafe(g, path, v, pos)) {
      path[pos] = v;

      if (hasHamCycleUtil(g, path, V, pos+1)) return true;

      path[pos] = -1;
    }
  }

  return false;
}



const hasHamCycle = (g) => {
  const V = g.length;
  const path = Array.apply(null, Array(V)).map(Number.prototype.valueOf, -1);

  path[0] = 0;

  return hasHamCycleUtil(g, path, V, 1);
}


/* Let us create the following graph 
  (0)--(1)--(2) 
    |   / \   | 
    |  /   \  | 
    | /     \ | 
  (3)-------(4)    */
const graph1 =  [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 1, 0],
];
 
// Print the solution 
console.log("path1", hasHamCycle(graph1));

/* Let us create the following graph 
  (0)--(1)--(2) 
    |   / \   | 
    |  /   \  | 
    | /     \ | 
  (3)       (4)    */
const graph2 =  [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
];
 
// Print the solution 
console.log("path2", hasHamCycle(graph2));
