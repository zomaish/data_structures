

const isSafe = (mtrx, r, c, visited) =>  (
  r>=0 && r<mtrx.length 
  && c>=0 && c<mtrx.length
  && visited[r][c] === false
  && mtrx[r][c] === 0
);

const pondSizesUtil = (mtrx, r, c, visited) => {
  if (!isSafe(mtrx, r, c, visited)) {return 0}

  visited[r][c] = true;
  let size = 1;

  for (let i=r-1; i<=r+1; i++) {
    for (let j=c-1; j<=c+1; j++) {    
      size += pondSizesUtil(mtrx, i, j, visited);
    }
  }

  return size
}

const pondSizes = (mtrx) => {
  const visited = Array.apply(null, Array(mtrx.length)).map((e, idx) => Array.apply(null, Array(mtrx.length)).map(Boolean.prototype.valueOf, false));
  for (let i=0; i<mtrx.length; i++) {
    for (let j=0; j<mtrx.length; j++) {
      if (!visited[i][j]) {
        console.log('found ', pondSizesUtil(mtrx, i, j, visited));
      }
    }
  }
}


pondSizes([ 
  [0,1,0,3],
  [0,2,0,4],
  [1,5,0,2],
  [0,1,2,3]
])