
//bottom up 

const eggDrop = (eggs, flrs) => {
  
  const dp = Array.apply(null, Array(eggs+1)).map(() => Array.apply(null, Array(flrs+1)));

  for (let f=0; f<=flrs; f++) {
    dp[0][f] = 0;
    dp[1][f] = f;
  }

  for (let e=1; e<=eggs; e++) {
    dp[e][1] = 1; 
    dp[e][0] = 0;
  }

  for (let f=2; f<=flrs; f++) {
    for (let e=2; e<=eggs; e++) {
      dp[e][f] = Number.MAX_SAFE_INTEGER;
      let temp = Number.MAX_SAFE_INTEGER;
      for (let k=1; k<=f; k++) {
        temp = Math.max(
            dp[e-1][k-1], dp[e][f-k]
        );

        dp[e][f] = Math.min(1+temp, dp[e][f]);
      }
    }
  }

  console.log('dp', dp)
}



eggDrop( 3, 14)