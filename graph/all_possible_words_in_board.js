/**
Given a dictionary, a method to do lookup in dictionary and a M x N board where every cell has one character. 
Find all possible words that can be formed by a sequence of adjacent charactersNote that we can move to any of 8 adjacent characters, but a word should not have multiple instances of same cell.
**/


const M = 3;
const N = 3;
const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];

function isWord(str) {
  for (let i=0; i<dictionary.length; i++)
    if (dictionary[i] === str)
      return true;

  return false;
}

function findWords (boggle) {

  const visited = Array.apply(null, Array(M)).map(() => {
    return Array.apply(null, Array(N)).map(Boolean.prototype.valueOf, false);
  });

  let str = "";

  for (let i =0; i<M; i++)
    for (let j=0; j<N; j++)
      findWordsUtil(boggle, i, j, str, visited);
}

function findWordsUtil(boggle, i, j, str, visited) {

  str = str + boggle[i][j];
  visited[i][j] = true;

  if (isWord(str))
    console.log(str, "is a word");

  for (let row = i-1; row <= i+1, row < M; row++)
    for (let col = j-1; col<= j+1, col < N; col ++)
      if (row >= 0 && col >= 0 && !visited[row][col])
        findWordsUtil(boggle, row, col, str, visited);

  visited[i][j] = false;
  str = str.substring(0, str.length-2);
}




const boggle = [['G','I','Z'],
               ['U','E','K'],
               ['Q','S','E']];

findWords(boggle);