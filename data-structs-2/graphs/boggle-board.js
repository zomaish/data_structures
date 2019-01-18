const dictionary = {
  "GEEKS":true,
  "FOR":true,
  "QUIZ":true,
  "GO":true
};

const board = [ 
  ['G','I','Z'],
  ['U','E','K'],
  ['Q','S','E']
];

const findWordsUtil = (board, visited, q, len, i, j, c) => {
  

  //console.log("i and j coming in ------- ", i, j)
  visited[i][j] = true;
  q.push(board[i][j]);

  console.log(q)
  const word = q.join('');

  // console.log('word is ', word, ++c.c);

  if (dictionary[word]) console.log(word);

  for (let k=i-1; k<=i+1; k++) {
    for (let m=j-1; m<=j+1; m++) {
      if(k>=0 && m >=0 && m<len && k<len && !visited[k][m]) {
        findWordsUtil(board, visited, q, len, k, m, c);
      }
    }
  }

  //console.log("i and j before reset is ", i, j)
  visited[i][j] = false;
  q.pop();
};

const findWords = (board) => {
  const len = board.length;
  const visited = Array.apply(null, Array(len)).map(() => Array.apply(null, Array(len)).map(Boolean.prototype.valueOf, false));
  const q = [];

  for (let i=0; i<len; i++)
    for(let j=0; j<len; j++)
      findWordsUtil(board, visited, q, len, i, j, { c: 0});
};


findWords(board);
// GEEKS
// QUIZ 
