
const minDistance = (dist, visited, v) => {
  let min = Number.MAX_VALUE;
  let idx = -1;

  for (let i =0; i<v; i++) {
    if (!visited[i] && dist[i] < min) {
      min = dist[i];
      idx = i;
    }
  }

  console.log('idx', idx)
  return idx;
}

const djikstraMatrixShortestPath = (g, v, src) => {
  const dist = Array.apply(null, Array(v)).map(Number.prototype.valueOf, Number.MAX_VALUE);
  const visited = Array.apply(null, Array(v)).map(Boolean.prototype.valueOf, false);

  dist[src] = 0;

  for(let j=0; j<v; j++) {
    const u = minDistance(dist, visited, v);
    visited[u] = true;

    for (let i=0; i<v; i++) {
      if (!visited[i] && g[u][i] > 0 &&
          dist[u] !== Number.MAX_VALUE &&
          ((dist[u] + g[u][i]) < dist[i])
        )
        dist[i] = dist[u] + g[u][i];
    }
  }

  return dist;
}

const matrix = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0], 
  [4, 0, 8, 0, 0, 0, 0, 11, 0], 
  [0, 8, 0, 7, 0, 4, 0, 0, 2], 
  [0, 0, 7, 0, 9, 14, 0, 0, 0], 
  [0, 0, 0, 9, 0, 10, 0, 0, 0], 
  [0, 0, 4, 14, 10, 0, 2, 0, 0], 
  [0, 0, 0, 0, 0, 2, 0, 1, 6], 
  [8, 11, 0, 0, 0, 0, 1, 0, 7], 
  [0, 0, 2, 0, 0, 0, 6, 7, 0] 
]; 

console.log(djikstraMatrixShortestPath(matrix, 9, 0));