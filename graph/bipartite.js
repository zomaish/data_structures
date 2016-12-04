const M = 4;
const N = 4;
function isBipartite(G, V, src) {
  
  const color = new Array(V);
  
  for (let i = 0; i<V; i++)
    color[i] = -1;
  
  color[src] = 1;
  const q = [];
  q.push(src);

  let u;
  
  while (q.length) {
    u = q.shift();
    
    for (let v=0; v<V; v++) {
      if ((color[v] === -1) && G[u][v]) {
        console.log(color)
        color[v] = 1-color[u];
        q.push(v);
      } else if (G[u][v] && (color[u] === color[v])) {
        return false;
      }
    }
   
  }

  console.log(color)
  
  return true
}





const G= [[0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0]];
 
    console.log(isBipartite(G, 4, 0))