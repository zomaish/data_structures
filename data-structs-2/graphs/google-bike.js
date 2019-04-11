

const getMinFromNeighbors = (DP, r, c) => {

  let min = Number.MAX_SAFE_INTEGER;

  if(r<=9 || c<=7 || r>=0 || c>=0) {


    if (r+1 <=9) {
      min = Math.min(DP[r+1][c], min)
    }

    if (r-1 >=0) {
      min = Math.min(DP[r-1][c], min)
    }

    if (c+1 <=7) {
      min = Math.min(DP[r][c+1], min)
    }

    if (c-1 >=0) {
      min = Math.min(DP[r][c-1], min)
    }

  }

  return min === Number.MAX_SAFE_INTEGER ? -1 : min;
}


const findBikesUtil = (g, r, c, DP, visited, min) => {

  if(r>9 || c>7 || r<0 || c<0 || DP[r][c] !== Number.MAX_SAFE_INTEGER) {
    return;
  }

  visited[r][c] = true;
  DP[r][c] = 1+ getMinFromNeighbors(DP, r, c);
  
  if (g[r][c] === 1) {
    min.val = Math.min(min.val, DP[r][c]);

    // console.log("DP", DP[r][c])
    return;
  }

  findBikesUtil(g, r+1, c, DP, visited, min);
  findBikesUtil(g, r, c+1, DP, visited, min);
  findBikesUtil(g, r, c-1, DP, visited, min);
  findBikesUtil(g, r-1, c, DP, visited, min);
  
  
  
  return min;
}

const findBikes = (g) => {
  const rows = g.length;
  const cols = g[0].length;

  const DP = Array.apply(null, Array(10)).map( _ => Array(8).fill(Number.MAX_SAFE_INTEGER));
  const visited = Array.apply(null, Array(10)).map( _ => Array(8).fill(false));

  // DP[4][4] = 0
  const min = {val: Number.MAX_SAFE_INTEGER};
  findBikesUtil(g, 4, 4, DP, visited, min);

  console.log('DP', DP)

  console.log(min)

}


const g = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1]
];


findBikes(g)