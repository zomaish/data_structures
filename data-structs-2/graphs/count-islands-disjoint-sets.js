


const find = (parent, x) => {
  let n = x
  while(n != parent[x]) {
    parent[n] = parent[parent[n]];
    n = parent[n];
  }

  return n;
}

const union = (parent, src, dest, size) => {
  const ps = parent[src];
  const pd = parent[dest]
  if (pd === ps) return;

  if (size[ps] > size[pd]) {
    parent[dest] = parent[src];
    ++size[ps];
  } else {
    parent[src] = parent[dest];
    ++size[ds]
  }
}

const countIslandsUtil = (board, src, dest, parent, size) => {

  const parentSrc = find(parent, src);
  const parentDest = find(parent, dest);

  union(parent, parentSrc, parentDest, size);

}


const countIslands = (board) => {
  const len = board.length;
  const parent = Array.apply(null, Array(len)).map((e, i) => i);
  const size = Array.apply(null, Array(len)).map(Number.prototype.valueOf, 0);

  for (let i=0; i<len; i++)
    for (let j=0; j<len; j++)
      countIslandsUtil(board, i, j, parent, size);

  return parent;
};






const gr = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1] 
];

countIslands(gr);