

const printSpiral = (mtrx) => {
  let rowStart=0, colStart=0;
  let rowEnd = mtrx.length-1, colEnd = mtrx[0].length-1;
  let k = 0;
  const res = new Array(mtrx.length*mtrx[0].length);
  while(rowStart<=rowEnd && colStart<=colEnd && k<res.length) {
    //go left Right
    for (let i=colStart; i<colEnd; i++) {
      res[k++] = mtrx[rowStart][i];
    }

    //go topRight Down
    for (let i=rowStart; i<rowEnd; i++) {
      res[k++] = mtrx[i][colEnd];
    }

    //go bottomRight left
    for (let i=colEnd; i>colStart; i--) {
      res[k++] = mtrx[rowEnd][i]; 
    }

    //go bottomLeft up
    for (let i=rowEnd; i>rowStart; i--) {
      res[k++] = mtrx[i][colStart];
    }

    rowStart +=1;
    rowEnd -=1;
    colStart +=1;
    colEnd -=1;
  }
  
  console.log(res)
};




mtrx = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

printSpiral(mtrx);
