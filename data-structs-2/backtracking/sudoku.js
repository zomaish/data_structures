const N = 9;

const isSafe = (d, r, c, board) => {
  const sqrt = Math.sqrt(N);
  const rowStart = r - (r%sqrt)
  const colStart = c - (c%sqrt);

  for (let i=0; i<N; i++) {
    if (board[r][i] === d || board[i][c] === d) return false;
  }

  for (let i=rowStart; i<(rowStart+sqrt); i++) {
    for (let j=colStart; j<(colStart+sqrt); j++) {
      if (board[i][j] === d) return false;
    }
  }

  return true;
}

const solveUtil = (r, c, board) => {
  if (r===N-1 && c===N) return true;

  if (c===N) {
    c = 0;
    r +=1;
  }

  if (r===N) {
    return false;
  }

  if (board[r][c] === ".") {
    for (let d=1; d<=N; d++) {
      if (isSafe(d + "", r, c, board)) {
        board[r][c] = d+ "";
        if (solveUtil(r, c+1, board)) return true;

        board[r][c] = ".";
      }
    }
  } else {
    return solveUtil(r, c+1, board)
  }

  return false;
};

const solveSudoku = (board) => {
  solveUtil(0, 0, board)
};



  board = [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]];

  /**
  [["5","3","4","6","7","8","9","1","2"],
  ["6","7","2","1","9","5","3","4","8"],
  ["1","9","8","3","4","2","5","6","7"],
  ["8","5","9","7","6","1","4","2","3"],
  ["4","2","6","8","5","3","7","9","1"],
  ["7","1","3","9","2","4","8","5","6"],
  ["9","6","1","5","3","7","2","8","4"],
  ["2","8","7","4","1","9","6","3","5"],
  ["3","4","5","2","8","6","1","7","9"]]
 */

  solveSudoku(board);
  console.log(board)
