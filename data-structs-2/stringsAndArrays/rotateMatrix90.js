

const printMatrix = (ar) => {
  console.log(JSON.stringify(ar));
}

const transpose = (ar, c, r) => {
  //to replace the colume with the row, the value of row where we take the values will always equal
  //the value of the colum they are moving to 
  for (let i=0; i<r; i++) {
  	for (let j = i; j<c; j++) {
      let t = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = t;
    }
  }
  
  return ar;
};

const reverseCol = (ar, c, r) => {
  for (let i=0; i<c; i++) {
   	for(let j=0, k=r-1; j<k; j++, k--) {
      let t = ar[j][i];
      ar[j][i] = ar[k][i];
      ar[k][i] = t;
    } 
  }
  return ar;
  
};

arr = [  
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ] 
];

const rotate90 = (ar, c, r) => {
  //transpose(ar, c, r)
  return reverseCol(transpose(ar, c, r), c, r);
  
}
printMatrix(rotate90(arr, 4, 4));
// printMatrix(arr);
