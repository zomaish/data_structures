const N = 8;

const isSafe = (x, y, res) => { 
return ( x >= 0 && x < N && y >= 0 && y < N && res[x][y] == -1); 
} 


const solveKT = () =>{
const res = Array.apply(null, Array(N))
.map(
  () => Array.apply(null, Array(N)).map(Number.prototype.valueOf, -1)
);



// Since the Knight is initially at the first block 
res[0][0]  = 0; 

/* Start from 0,0 and explore all tours using 
solveKTUtil() */
if (solveKTUtil(0, 0, 1, res) == false) {
  console.log("Solution does not exist"); 
  return false; 
} 
else
  console.log(res); 

return true; 
} 

/* A recursive utility function to solve Knight Tour 
problem */
const solveKTUtil = (x, y, count, res) => {
  const movesMtrx = [
    [2, 1], [1, 2], [-1, 2], [-2, 1],
    [-2, -1], [-1, -2],  [1, -2], [2, -1]
  ];

if (count == N*N) return true; 

/* Try all next moves from the current coordinate x, y */
for (let i = 0; i < 8; i++) {
  let r = x + movesMtrx[i][0]; 
  let c = y + movesMtrx[i][1];
  if (isSafe(r, c, res)) {
    res[r][c] = count; 
    if (solveKTUtil(r, c, count+1, res)) {
      return true;
    } else {
      res[r][c] = -1;// backtracking
    }
  }
}

  return false; 
}


console.log(solveKT())