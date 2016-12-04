let str = "A car, a man, a maraca";
str = str.replace(/\W/g, '').toLowerCase();

console.log(str === str.split('').reverse().join(''))




function numWaysToDest(maze, R, C) {

  const visited = Array.apply(null, Array(R)).map(() => {
    return Array.apply(null, Array(C)).map(Boolean.prototype.valueOf, false);
  });
    if (maze[R-1][C-1] === -1) return 0;
    const res = new Array(1);

    for (let i=0; i<R; i++) {
      for (let j = 0; j<C; j++) {
        numWaysToDestUtil(maze, i, j, R, C, res, visited);
      }
    }
}


function numWaysToDestUtil(maze, i, j, R, C, res, visited) {

  if (maze[i][j] === -1) return false;

  if (i === R-1 && j === C-1) return true;
  
  for (let row = i-1; row<=i+1; row++) 
    for (let col = j-1; col<=j+1; col++) {
      if (row > 0 && row < R && col > 0 && col < C && numWaysToDestUtil(maze, row, col, R, C, res)) {
        res[0] += 1;
      }

    }

    
  visited[i][j] = false;
  console.log(res);
}



const R = 4;
const C = 4
const maze =  [[0, 0, 0, 0],
              [0, -1, 0, 0],
              [-1, 0, 0, 0],
              [0,  0, 0, 0]];


numWaysToDest(maze, R, C)