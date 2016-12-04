

const getQNode = (src, moves) => ({
  src,
  moves
});

const getMinDiceThrows = (board, n) => {
  const visited = Array.apply(null, Array(n)).map(Boolean.prototype.valueOf, false);
  let qeSrc = getQNode(0, 0)
  const q = [qeSrc];

  while(q.length) {
    const u = q.shift();

    if (u.src >= n-1) return qeSrc.moves;

    for (let i=u.src + 1; i<=(u.src + 6) && i<n; i++) {

      if (!visited[i]) {
        visited[i] = true;

        src = board[i] != -1 ? board[i] : i;
        qeSrc = getQNode(src, u.moves + 1);
        q.push(qeSrc);
      }
    }
  }

  return qeSrc.moves;

}



const N = 30; 
const board = Array.apply(null, Array(N)).map(Number.prototype.valueOf, -1); 

// Ladders 
board[2] = 21; 
board[4] = 7; 
board[10] = 25; 
board[19] = 28; 

// Snakes 
board[26] = 0; 
board[20] = 8; 
board[16] = 3; 
board[18] = 6; 

console.log(getMinDiceThrows(board, N));