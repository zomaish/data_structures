
//Find shortest Path

function floydWarshall(graph) {
  const l = graph.length;
  const dist = new Array(l);
  let i, j ,k;
  
  for (i=0; i<l; i++) {
    dist[i] = new Array(l);
    for (j=0; j<l; j++)
      dist[i][j] = graph[i][j];
  }
  
  for (let k=0; k<l; k++)  
    for (i=0; i<l; i++)
        for (j=0; j<l; j++)
        if (dist[i][k]+dist[k][j] < dist[i][j])
              dist[i][j] = dist[i][k]+dist[k][j];

  console.log(dist)
}


const graph = [[0,   5,  Infinity, 10],
               [Infinity, 0,   3, Infinity],
               [Infinity, Infinity, 0,   1],
               [Infinity, Infinity, Infinity, 0]
              ];

 
        // Print the solution
        floydWarshall(graph);
