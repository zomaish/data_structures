


const printPath = (maze) => {
  const path = Array.apply(null, Array(maze.length))
  .map(
    () => Array.apply(null, Array(maze.length)).map(Number.prototype.valueOf, 0)
  );

  // path[0][0] = 1;

  if (hasPath(0, 0, maze, path)) console.log('found', path);
  else console.log('no path found');
}

const isSafe = (r, c, maze) => {
  return (r<4 && c <4 && maze[r][c] === 1)
}

const hasPath = (r, c, maze, path) => {

  if (r>=3 && c >=3) {
    path[r][c] = 1;
    return true;
  }

  if (isSafe(r, c, maze)) {
    path[r][c] = 1;
    if (hasPath(r+1, c, maze, path) || hasPath(r, c+1, maze, path)) {
    return true;
    } else {
      path[r][c] = false;
      return false;
    }
  }
}

const maze = [
  [1, 0, 0, 0], 
  [1, 1, 0, 1], 
  [0, 1, 0, 0], 
  [1, 1, 1, 1] 
];

printPath(maze);