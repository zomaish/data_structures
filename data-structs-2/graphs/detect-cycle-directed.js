


const hasCycleUtil = (g, i, grey, black) => {

  if (g[i][i]) return true;

  grey.add(i);
  for (let c=0; c<g.length; c++) {
    if (g[i][c] && !black.has(i)) {
      if (grey.has(c)) return true;
      if (hasCycleUtil(g, c, grey, black)) return true;
    }

  }

  black.add(i);
  grey.delete(i);
};



const hasCycle = (g) => {
  const grey = new Set();
  const black = new Set();
  

  for (let i=0; i<g.length; i++) {
    if (!black.has(i)) {
      if (hasCycleUtil(g, i, grey, black, i)) return true;
    }
  }
  return false;
}

const g = [
  [0, 1, 0, 0, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

console.log(hasCycle(g))