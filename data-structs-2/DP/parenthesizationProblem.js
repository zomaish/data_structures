


const countParens = (symbols, operators) => {
  const n = symbols.length;
  const T = Array.apply(null, Array(n)).map(() => Array.apply(null, Array(n)));
  const F = Array.apply(null, Array(n)).map(() => Array.apply(null, Array(n)));


  //populate diagonal
  for (let i=0; i<n; i++) {
    T[i][i] = symbols[i] === 'T' ? 1 : 0;
    F[i][i] = symbols[i] === 'F' ? 1 : 0;
  }

  for (let slice=1; slice<n; slice++) {
    for (let i=0, j=slice; j<n; j++, i++) {

      T[i][j] = 0;
      F[i][j] = 0;
      // for (let g=0; g<slice; g++) {

      //   let k = i+g;

      //   // console.log('ikj', i, k, j)
      // }

    }
  }


  for (let slice=n-1; slice>=0; slice--) {
    for (let i=n-1, j=slice-1; j>=0; j--, i--) {

      T[i][j] = -1;
      F[i][j] = -1;
    }
  }


  console.log('t', T)
  // console.log('f', F)
}


const symbols = "TTFT"; 
const operators = "|&^"; 

// There are 4 ways 
// ((T|T)&(F^T)), (T|(T&(F^T))), (((T|T)&F)^T) and (T|((T&F)^T)) 
console.log(countParens(symbols, operators));