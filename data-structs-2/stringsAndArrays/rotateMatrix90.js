const transpose = (mtrx, n) => {
  for (let r=0; r<n; r++) {
    for (let c=r; c<n; c++) {
      let t = mtrx[r][c];
      mtrx[r][c] = mtrx[c][r];
      mtrx[c][r] = t;
    }
  }
}

const flipColumns = (mtrx, n) => {
  const mid = Math.ceil(n/2);

  for (let c=0; c<n; c++) {
    for (let r=0; r<mid; r++) {
      const t = mtrx[r][c];
      mtrx[r][c] = mtrx[n-1-r][c];
      mtrx[n-1-r][c] = t;
    }
  }  
};

const rotate90 = (mtrx) => {
  const n = mtrx.length;

  transpose(mtrx, n);
  console.log('trans', mtrx)
  flipColumns(mtrx, n);
  console.log('res', mtrx)
};


const mtrx = [  
  [ 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10 ],
  [ 11, 12,  13, 14, 15 ],
  [ 16, 17, 18, 19, 20 ],
  [ 21, 22, 23, 24, 25]
];


rotate90(mtrx);