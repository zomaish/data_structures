

const isSafe = (board, n, r, c) => {

  for (let c=0; c<n; c++) {
      if (board[r][c] === 1) return false;
  }

  for (let r=0; r<n; r++) {
      if (board[r][c] === 1) return false;
  }

  let i = r, j=c;

  while(i>=0 && j>=0) {
      if (board[i--][j--] === 1) return false
  }

  i = r+1, j=c+1;

  while(i<n && j<n) {
      if (board[i++][j++] === 1) return false
  }

  return true;
}

const nQueenUtil = (board, n, r) => {
  if (r>=n) return true;

  for (let c=0; c<n; c++) {
      if (isSafe(board, n, r, c)) {
          board[r][c] = 1
          if(nQueenUtil(board, n, r+1)) return true;

          board[r][c] = 0;
      }
  }

  return false;
}

const nQueen = (n) => {
  const board = Array.apply(null, Array(n)).map(() => Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0));

  if (nQueenUtil(board, n, 0)) {
      console.log(board)
      return board;
  }
  
  
  return false;
}


nQueen(8);