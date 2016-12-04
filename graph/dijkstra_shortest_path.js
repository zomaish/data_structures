//O(V^2)

function minDistance(spt, dist, l) {

  let min = Number.MAX_VALUE;
  let min_index = -1;

  for (let i = 0; i<l; i++) {
    if (!spt[i] && dist[i]<= min) {
      min = dist[i]
      min_index = i;
    }
  }

  return min_index;
}

function shortestPath(graph, src) {

  const l = graph.length;
  const spt = Array.apply(null, Array(l)).map(Boolean.prototype.valueOf, false);
  const dist = Array.apply(null, Array(l)).map(Number.prototype.valueOf, Number.MAX_VALUE);

  let u;

  dist[src] = 0;

  for (let c=0; c<l-1; c++) {

    u = minDistance(spt, dist, l);
    spt[u] = true;

    for (let v=0; v<l; v++) {

      if (
        !spt[v] && graph[u][v] !=0 &&
        dist[u] !== Number.MAX_VALUE &&
        dist[u] + graph[u][v] < dist[v]
        )

        dist[v] = dist[u] + graph[u][v];

       console.log(">>>>>>", u, v, dist)
    }
  }

  console.log(spt, dist);
}






const graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
              [4, 0, 8, 0, 0, 0, 0, 11, 0],
              [0, 8, 0, 7, 0, 4, 0, 0, 2],
              [0, 0, 7, 0, 9, 14, 0, 0, 0],
              [0, 0, 0, 9, 0, 10, 0, 0, 0],
              [0, 0, 4, 14, 10, 0, 2, 0, 0],
              [0, 0, 0, 0, 0, 2, 0, 1, 6],
              [8, 11, 0, 0, 0, 0, 1, 0, 7],
              [0, 0, 2, 0, 0, 0, 6, 7, 0]
             ];

shortestPath(graph, 0);
