//warnsdorffs-algorithm-knights-tour-problem


// const moveCols = [1, 1, 2, 2, -1, -1, -2, -2]; 
// const moveRows = [2, -2, 1, -1, 2, -2, 1, -1]; 

const moveCols = [1, -1, 2, -2, 2, -2, 1, -1]; 
const moveRows = [2, 2, 1, 1, -1, -1, -2, -2]; 


const N = 8;
const rand = () => Math.random() * 8;

const isSafe = (r, c, visited) => {
  return (c>=0 && c<N && r>=0 && r<N && visited[r][c] === -1)
}
const getDegree = (r, c, visited) => {
  let count =0;

  for (let i=0; i<N; i++) {
    if (isSafe(r+moveRows[i], c+moveCols[i], visited)) count +=1;
  }

  return count;
}

const ktUtil = (r, c, visited, movs) => {

  if (movs === N*N-1) return true;

  let nR, nC, minDeg = N+1, idx = -1, temp;

  for (let i=0; i<N; i++) {
    nR = r + moveRows[i];
    nC = c + moveCols[i];

    if (isSafe(nR, nC, visited)
      && (temp = getDegree(nR, nC, visited)) < minDeg) {
        minDeg = temp;
        idx = i
      }
  }

  if (idx === -1) {

    console.log('idx was -1', [...visited])
    return false;
  }

  nR = r + moveRows[idx];
  nC = c + moveCols[idx];

  movs += 1;
  visited[nR][nC] = movs;

  if (ktUtil(nR, nC, visited, movs)) {
    return true;
  } else {
    movs -= 1;
    visited[nR][nC] = -1;
  }
} 

const findClosedTour = () => {

  const sR = parseInt(rand() % N);
  const sC = parseInt(rand() % N);

  visited = Array.apply(null, Array(N)).map( _ => Array(N).fill(-1));

  visited[sR][sC] = 0;
  if (ktUtil(sR, sC, visited, 0)) {
    console.log([...visited]);
  } else {
    console.log("i give up")
  }
}

findClosedTour()


