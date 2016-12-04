

const board = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1]
];

const countIslandsUtil = (board, visited, len, i, j) => {
  visited[i][j] = true;

  console.log('countIslandsUtil called')

  for (let k=i-1; k<=i+1 && k<len; k++)
    for(let m=j-1; m<=j+1 && m<len; m++)
      if (k>=0 && m>=0 && !visited[k][m] && board[k][m] === 1)
        countIslandsUtil(board, visited, len, k, m);
};

const countIslands = (board) => {
  let count = 0;
  const len = board.length;
  const visited = Array.apply(null, Array(len)).map(() => Array.apply(null, Array(board.length).map(Boolean.prototype.valueOf, false)));

  for (let i=0; i< len; i++)
     for(let j=0; j < len; j++)
      if (board[i][j] === 1 && !visited[i][j]) {

        console.log('i j ', i, j, JSON.stringify(visited))
        ++count;
        countIslandsUtil(board, visited, len, i, j);
      }

  return count;
};


console.log(countIslands(board));


