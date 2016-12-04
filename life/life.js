class GameOfLife {

  constructor(height = 6, width = 6) {
    if (height < 1) {
      throw new Error("Invalid matrix height");
    }

    this.createMatrix(height-1, width);
  }

 createMatrix(rows, cols) {
    let matrix = {};
    const m = rows/2 | 0;

    for (let i=0; i<=m; i++) {
      matrix[i] = new Array(cols);
      matrix[rows - i] = new Array(cols);
    }

    console.log( matrix );

   return matrix
  }

  setAliveCells(obj) {

  }
}


const m = new GameOfLife();
