
const hasPlot = (dp, plot, r, c, money) => {
  for (let i=r; i>=1; i--) {
    let sum = 0
    for (let j=c; j>=1; j--) {

    }
  }
};


const colHas = (dp, c, money) => {
  const rows = dp.length;
  const arr = dp[0][c];

  for (let j=0; j<arr.length; j++) {
    let sum = 0;
    for (let i=0; i<rows; i++) {
      sum += dp[i][c][j];
      if (sum === money)return true 
    }

    for (let i=0; i<rows-2; i++) {
      sum -= dp[i][c][j];
      if (sum === money)return true 
    }
  }
}

const canBuy = (plot, money) => {
  const rows = plot.length;
  const cols = plot[0].length;

  const dp = Array.apply(null, Array(rows)).map( _ => Array.apply(null, Array(cols)).map( _ => []));

  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      let curr = parseInt(plot[i][j]);
      if (j===0) {
        dp[i][j].unshift(curr);
      } else {

        const rowLeft = curr + plot[i][j-1]
        
        if (rowLeft === money) {
          console.log('found here row',  i, dp[i][j].length, j)
          return true;
        }

        dp[i][j].unshift(rowLeft)

        if (j> 1) {
          const arr = dp[i][j-1];
          let sum = 0;

          for (let k=0; k<arr.length; k++) {
            sum = arr[k] + curr;
            
            if (sum === money) {
              console.log('found in subsequent', dp[i][j].length, i)
              return true;
            }
            dp[i][j].unshift(sum)
          }
        }
          
      }
    }
  }
  
  console.log('dp', dp)

  for (let j=0; j<dp[0].length; j++) {
    if (colHas(dp, j, money)) {
      console.log("found the col");
      return true
    } 
  }


  console.log('dp', dp)
}

/**
 [ 
    [ [ [ 1 ], [ 3 ], [ 6, 5 ] ],
  [ [ 4 ], [ 9 ], [ 15, 11 ] ],
  [ [ 7 ], [ 15 ], [ 24, 17 ] ],
  [ [ 10 ], [ 21 ], [ 33, 23 ] ] ]
 */


const plot = [ 
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

console.log(canBuy(plot, 72))