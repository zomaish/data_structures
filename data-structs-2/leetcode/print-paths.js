const isSafe = (grid, i, j, visited) => {
  const rows = grid.length;
  const cols = grid[0].length;
  return (i>=0 && i<rows && j>=0 && j<cols && visited[i][j] === false && grid[i][j] !== -1);
}

const printPathUtil = (grid, r, c, visited, path, startPos) => {
  const rows = grid.length;
  const cols = grid[0].length;

  if (grid[r][c] === 2) {
    console.log("path found", [...path]);
    // visited[startPos[0]][startPos[1]] = false;
    return true;
  }

  if (r>=rows || c>=cols) {
    return false;
  }

  visited[r][c] = true;


  if (isSafe(grid, r, c+1, visited)) {
    path.push([r, c+1]);
    if (printPathUtil(grid, r, c+1, visited, path, startPos) === true) {
      return true;
    }
    path.pop();
  }


  if (isSafe(grid, r+1, c, visited)) {
    path.push([r+1, c]);
    if (printPathUtil(grid, r+1, c, visited, path, startPos) === true) {
      return true;
    }
    path.pop();
  }

  if (isSafe(grid, r, c-1, visited)) {
    path.push([r, c-1]);
    if (printPathUtil(grid, r, c-1, visited, path, startPos) === true) {
      return true;
    }
    path.pop();
  }

  if (isSafe(grid, r-1, c, visited)) {
    path.push([r-1, c]);
    if (printPathUtil(grid, r-1, c, visited, path, startPos) === true) {
      return true;
    }
    path.pop();
  }

  return false;
};

const getStartPos = (grid) => [0,0]; 
const printPaths = (grid) => {

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.apply(null, Array(rows)).map(
    () => Array.apply(null, Array(cols)).map(Boolean.prototype.valueOf, false)
  );

  const startPos = getStartPos(grid);
  const path = [startPos];
  while(true) {
    res = printPathUtil(grid, startPos[0], startPos[1], visited, [startPos], startPos)
    if (res === false) break 
  }
};



// const grid = [
//   [1,0,0,0],
//   [0,0,0,0],
//   [0,0,2,-1]
// ]


const grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
printPaths(grid);