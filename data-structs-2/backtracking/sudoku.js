


const inSubMatrix = (board, val, r, c, n, subMatrixSize) => {
  // const rowStart = (r%subMatrixSize) * subMatrixSize;
  // const colStart = (c%subMatrixSize) * subMatrixSize;

  for (let i=0; i<3; i++) {
    for (let j=9; j<3; j++) {
      if (board[i+r][j+c] === val) return true;
    }
  }

  return false;
};


const isSafe = (board, val, r, c, n, subMatrixSize) => {
  if (r>=n || c>=n) return false
  if (board[r][c] !== 0) return false;

  //is in row
  for (let col=0; col<n; col++) {
    if (board[r][col] === val) return false;
  }

  //check in col
  for (let row=0; row<n; row++) {
    if (board[row][c] === val) return false;
  }

  //check if submartix already has the val
  return !inSubMatrix(board, val, r, c, n, subMatrixSize);
};

const isBoardFull = (board, n) => {

  for (let r=0; r<n; r++)
    for (let c=0; c<n; c++)
      if (board[r][c] === 0) return false;
      
  return true;
}


const getNextRowCol = (board, n) => {
  for (r=0; r<n; r++) {
    for (c=0; c<n; c++) {

      if (board[r][c] === 0) {
       return {r, c};
      }
    }
  }

}

const sloveSudoko = (board) => {
  
  const n = board.length;
  // const subMatrixSize = 3;

  if (isBoardFull(board, n)) {

    console.log('yaaaaaaaa =========== found it', board)
    return true;

  }

  const {r, c} = getNextRowCol(board, n);
  

  for (let val=1; val<=9; val++) {

    if (isSafe(board, val, r, c, n)) {
      board[r][c] = val;

      console.log('r', r, board)
      if (sloveSudoko(board)) {
        console.log('found')
        return true;
      }
      board[r][c] = 0;
    }
  
  }
  

  console.log('r', r, 'c', c)
  return false
};


const board = [[3,0,6,5,0,8,4,0,0], 
[5,2,0,0,0,0,0,0,0], 
[0,8,7,0,0,0,0,3,1], 
[0,0,3,0,1,0,0,8,0], 
[9,0,0,8,6,3,0,0,5], 
[0,5,0,0,9,0,6,0,0], 
[1,3,0,0,0,0,2,5,0], 
[0,0,0,0,0,0,0,7,4], 
[0,0,5,2,0,6,3,0,0]
]


console.log(sloveSudoko(board));

/**
3 1 6 5 7 8 4 9 2
5 2 9 1 3 4 7 6 8
4 8 7 6 2 9 5 3 1
2 6 3 4 1 5 9 8 7
9 7 4 8 6 3 1 2 5
8 5 1 7 9 2 6 4 3
1 3 8 9 4 7 2 5 6
6 9 2 3 5 1 8 7 4
7 4 5 2 8 6 3 1 9
 */