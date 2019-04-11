
const isSafe = (grid, currR, currC, r, c) => {
  return currR<r && currC<c && grid[currR][currC] === 1;
}

const robotInGridUtil = (grid, currR, currC, r, c, path) => {
  if (currR >= r || currC >= c) return false;

  if (isSafe(grid, currR, currC, r, c)) {
    path.push([currR, currC]);

    if (currR === r-1 && currC === c-1) {
      return true;
    }

    if (robotInGridUtil(grid, currR, currC+1, r, c, path) || robotInGridUtil(grid, currR+1, currC, r, c, path)) {
      return true;
    } else {
      path.pop()
      return false;
    }
  }

  return false;
}

const robotInGrid = (grid, r, c) => {
  
  const path = [];
  if (robotInGridUtil(grid, 0, 0, r, c, path)) 
    return path

  return [];
};


const g = [
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 1]
];
console.log(robotInGrid(g, 3, 4))

/**
 *  1 1 1 1
 *  1 0 1 0
 *  0 1 1 1
[ [ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 3 ], [ 2, 3 ] ]
 */
//obstacle = 0
//path = 1