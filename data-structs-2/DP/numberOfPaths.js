function isSafe(i, j, count) {
  return (i-1>=0 && j-1>=0 && i<3 & j < 3);
}

function numberOfPaths( m,  n) { 
        // Create a 2D table to store results  
        // of subproblems 
        const count = Array.apply(null, Array(m)).map(() => Array.apply(null, Array(n))); 
   
        // Count of paths to reach any cell in  
        // first column is 1 
        for (let i = 0; i < m; i++) 
            count[i][0] = 1; 
   
        // // Count of paths to reach any cell in 
        // // first column is 1 
        for (let j = 0; j < n; j++) 
            count[0][j] = 1; 
   
        // Calculate count of paths for other  
        // cells in bottom-up manner using 
        // the recursive solution 
        for ( i = 1; i < m; i++) 
        { 
            for ( j = 1; j < n; j++) 
   
            if (isSafe(i, j, count)) 
            count[i][j] = count[i-1][j] + count[i][j-1]; //+ count[i-1][j-1]; 
   
        }

        console.log(count);
        return count[m-1][n-1]; 
    } 

    numberOfPaths(3, 3)