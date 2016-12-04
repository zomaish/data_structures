const countTriangles = (gr, isDirected) => {
  let trianglesCount = 0;
  const len = gr.length;

  for (let i=0; i<len; i++) {
    for(let j=0; j<len; j++) {
      for(let k=0; k<len; k++) {
        if (
            gr[i][j] === 1 &&
            gr[j][k] === 1 &&
            gr[k][i] === 1
          ) {
            ++trianglesCount
        }
      }
    }
  }

  if (isDirected)
    return trianglesCount/3;

  return trianglesCount/6;
}



const graph = [
  [0, 1, 1, 0], 
  [1, 0, 1, 1], 
  [1, 1, 0, 1], 
  [0, 1, 1, 0] 
]; 

// Create adjacency matrix 
// of a directed graph 
const digraph = [
  [0, 0, 1, 0], 
  [1, 0, 0, 1], 
  [0, 1, 0, 0], 
  [0, 0, 1, 0] 
]; 

console.log(countTriangles(digraph, true))