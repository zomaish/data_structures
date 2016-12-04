//http://www.geeksforgeeks.org/count-number-ways-reach-destination-maze/
const R = 4;
const C = 4;
function countPaths(maze) {

    if (maze[0][0]==-1)
        return 0;
 
    for (let i=0; i<R; i++) {
        if (maze[i][0] == 0)
            maze[i][0] = 1;
        else
            break;
    }
  
    for (let i=1; i<C; i++) {
        if (maze[0][i] == 0)
            maze[0][i] = 1;
        else
            break;
    }
  
  
  for (let i=1; i<R; i++) {
        for (let j=1; j<C; j++) {
            // If blockage is found, ignore this cell 
            if (maze[i][j] == -1)
                continue;
 
            // If we can reach maze[i][j] from maze[i-1][j]
            // then increment count.
            if (maze[i-1][j] > 0)
                maze[i][j] = (maze[i][j] + maze[i-1][j]);
 
            // If we can reach maze[i][j] from maze[i][j-1]
            // then increment count.
            if (maze[i][j-1] > 0)
                maze[i][j] = (maze[i][j] + maze[i][j-1]);
        }
    }
 
  console.log(maze)
  
    return (maze[R-1][C-1] > 0)? maze[R-1][C-1] : 0;
  
 

}





const maze =  [[0,  0, 0, 0],
               [0, -1, 0, 0],
               [-1, 0, 0, 0],
               [0,  0, 0, 0]];
    countPaths(maze);