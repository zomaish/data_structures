


const hasCycleUtil = (g, i, grey, black, path) => {

  if (g[i][i]) return true;
  path.push(i);

  grey.add(i);
  for (let c=0; c<g.length; c++) {
    if (g[i][c] && !black.has(i) && grey.has(c)) {
      return true;
    }
  }

  for (let c=0; c<g.length; c++) {
    if (g[i][c] && !black.has(i)) {
      if (hasCycleUtil(g, c, grey, black, path)) return true;
    }
  }

  black.add(i);
  grey.delete(i);
};



const hasCycle = (g) => {

  let min = Number.MAX_SAFE_INTEGER;
  let res = [];
  
  for (let i=0; i<g.length; i++) {
      const path = [];
      const grey = new Set();
      const black = new Set();

      if (hasCycleUtil(g, i, grey, black, path)) {

        if (path.length < min) {
          min = path.length;
          res = path
        }
      }
  }
  return res;
}

const g = [
  [0,1,0,0,1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

console.log(hasCycle(g))