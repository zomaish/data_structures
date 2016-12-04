 

const n = 4
const N = 4

const isSafe = (row, col, board) => {

  console.log('r c ', row, col)
  if(row>=n || col>=n) return false;

  for (let i=0; i<n; i++) {
    if (board[i][col] || board[i][col]) return false;
  }

  for (let r=row, c=col; r<n && c<n; r++, c++) {
    if (board[r][c]) return false
  }

  for (let r=row, c=col; r>=0 && c>=0; r--, c--) {
    if (board[r][c]) return false
  }

  //do the other direction in diagonal

  return true
}

const placeQueensUtil = (r, board) => {
  if(r>=n) return true;


  //we can d both column or row
  for (let c=0; c<n; c++) {
    if (isSafe(r, c, board)) {
      console.log('ya safe', r, c)
      board[r][c] = 1;
      if (placeQueensUtil(r+1, board)) {
        return true
      } else {
        board[r][c] = 0;
        console.log('failed',board)
      }
    }
  }
  return false;
}



const placeQueens = (board) => {
    placeQueensUtil(0, board)

    console.log(board)
};


const board = [
  [0, 0, 0, 0], 
  [0, 0, 0, 0], 
  [0, 0, 0, 0], 
  [0, 0, 0, 0] 
];

placeQueens(board);


[
[ 0, 1, 0, 0 ],
[ 0, 0, 0, 1 ],
[ 1, 0, 0, 0 ],
[ 0, 0, 1, 0 ] ]