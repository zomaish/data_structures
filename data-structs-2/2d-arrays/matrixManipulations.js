

//n = arr.length of NXN 
//populate diagonal
for (let i=0; i<n; i++) {
  T[i][i] = symbols[i] === 'T' ? 1 : 0;
  F[i][i] = symbols[i] === 'F' ? 1 : 0;
}

//populate top right triangle
for (let slice=1; slice<n; slice++) {
  for (let i=0, j=slice; j<n; j++, i++) {
    T[i][j] = 0;
    F[i][j] = 0;
  }
}

//populate bottom left triangle
for (let slice=n-1; slice>=0; slice--) {
  for (let i=n-1, j=slice-1; j>=0; j--, i--) {
    T[i][j] = -1;
    F[i][j] = -1;
  }
}

//reverse column
for (let i=0; i<C; i++) 
  for (let j=0, k=C-1; j<k; j++, k--) 
      swap(arr[j][i], arr[k][i]); 
