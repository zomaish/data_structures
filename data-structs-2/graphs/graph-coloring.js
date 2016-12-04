

const graphColoring = (gr, m) => {
  const colors = Array.apply(null, Array(m|0)).map((i) => i);
  const res = [];
  const visited = Array.apply(null, Array(gr.length)).map(Boolean.prototype.valueOf, false);
  
  for (let i=0; i<gr.length; i++) {
    if (!visited[i])
      graphColoringUtil(gr, i, 0, [], colors, visited, res)  
  }

  return res;
}

const getColor = (n, arr) => {
  let x = n;
  const lastIdx  = arr.length-1;

  while(x>lastIdx)
    x -= lastIdx;

    //add safe check
    return arr[x];
}

const graphColoringUtil = (gr, i, lvl, q, colors, visited, res) => {

  visited[i] = true;

  q.push(i);
  res[i] = getColor(lvl, colors)

  while(q.length) {

    const list = gr[i];

    for(let j=0; j<list.legth; j++) {
      if (!visited[j]) {
        return graphColoringUtil(gr, j, lvl + 1, q, colors, visited, res);
      }
    }
  }
};



const graph =  [ [0, 1, 1, 1], 
 [1, 0, 1, 0], 
 [1, 1, 0, 1], 
 [1, 0, 1, 0], 
]; 
const m = 3; // Number of colors 
graphColoring (graph, m); 