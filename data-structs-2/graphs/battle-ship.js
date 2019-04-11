


const countUtil = (r, c, rows, cols, board) => {
  if (r>=rows || c>=cols) return false;

  board[r][c] = '.';

  if (c+1 < cols && board[r][c+1] === "X") {
    for (let i=c+1; i<cols; i++) {
      if (board[r][i] === ".") return;
      board[r][i] = "."
    }
  } else if (r+1 < rows && board[r+1][c] === "X") {
    for (let i=r+1; i<rows; i++) {
      if (board[i][c] === ".") return;
      board[i][c] = "."
    }
  }
}

const countBattleships = (board) => {

  const rows = board.length;
  const cols = board[0].length;

  
  let count = 0;
  for (let r=0; r<rows; r++) {
    for (let c=0; c<cols; c++) {
      if (board[r][c] === 'X') {
        countUtil(r, c, rows, cols, board);
        count +=1;
      }
    }
  }

 return count
};


// const board = [
//   ["X", ".", ".", "X"],
//   [".", ".", ".", "X"],
//   [".", ".", ".", "X"]
// ];

const board = [["X","X","X"]]
// console.log('board', board)

console.log(countBattleships(board));
