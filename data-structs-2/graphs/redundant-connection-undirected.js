//https://leetcode.com/problems/redundant-connection/

const find = (parent, i) => {
  while(parent[i] !== i) {
    parent[i] = parent[parent[i]];
    i = parent[i];
  }

  return i;
}

const union = (parent, size, px, py) => {
  if (size[px] > size[py]) {
    parent[py] = px;
  } else if (size[py] > size[px]) {
    parent[px] = py;
  } else {
    parent[px] = py;
    size[py] += 1;
  }
}

const redundantConnection = (g) => {
  const parent = Array.apply(null, Array(g.length)).map((e, i) => i);
  const size = Array.apply(null, Array(g.length)).fill(1);
  visited = Array.apply(null, Array(g.length)).fill(false);
  
  const toRemove = [];

  for (let i=0; i<g.length; i++) {
    const pair = g[i];

    const px = find(parent, pair[0]);
    const py = find(parent, pair[1]);

    if (px === py) {
      toRemove.push(pair);
    } else {
      union(parent, size, px, py)
    }
  }

  console.log('toRemove', toRemove)
}

const g = [[1,2], [2,3], [3,4], [1,4], [1,5]]


redundantConnection(g);

