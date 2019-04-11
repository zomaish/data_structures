

const addQueen = (r, c, queens, cols, diag, hills) => {
  queens[r] = c;
  cols[c] = 1;
  diag[r-c] = 1;
  hills[r+c] = 1
}

const clear = (r, c, queens, cols, diag, hills) => {
  queens[r] = -1;
  cols[c] = -1;
  diag[r-c] = undefined;
  hills[r+c] = undefined
}

const isSafe = (r, c, cols,queens, diag, hills, N) => {
  return (r>=0 && r<N
  && c >=0 && c<N
  && cols[c] === -1
  && diag[r-c] === undefined
  && hills[r+c] === undefined
  && queens[r] === -1);
}

const backtrack = (r, queens, cols, diag, hills, res, N) => {
  for (let c=0; c<N; c++) {
    if (isSafe(r, c, cols, queens, diag, hills, N)) {

      addQueen(r, c, queens, cols, diag, hills)

      if (r+1 === N) {
        res.push([...queens])
      } else {
        backtrack(r+1, queens, cols, diag, hills, res, N);
      }

      clear(r, c, queens, cols, diag, hills);
    }
  }
}

const solveNQueens = (N) => {
  const queens = Array(N).fill(-1);
  const cols = Array(N).fill(-1);
  const diag = {};
  const hills = {};
  const res = [];

  backtrack(0, queens, cols, diag, hills, res, N);

  console.log(res)
};

solveNQueens(4)
