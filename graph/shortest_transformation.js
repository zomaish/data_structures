/**
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s)
from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
*/



function shortestTransformation(start, end, dict) {

  let dictMap = Object.create(null);
  let visited = Array.apply(null, Array(dict.length)).map(Boolean.prototype.valueOf, false);
  let result = [];

  for(let i=0; i<dict.length; i++) {
    dictMap[dict[i]] = Number.MAX_VALUE;
  }

  dictMap[start] = 0;
  result[0] = start;
  let currMatch = start;
  let currMatchArr = start.split("");

  let alphStart = "a".charCodeAt();
  let alphEnd = "z".charCodeAt();

  while(currMatch !== end) {

    for (let i=0; i<currMatchArr.length-1; i++)
      for (let j = alphStart; j<= alphEnd; j++) {

        let step = dictMap[currMatch] + 1;
        currMatchArr[i] = String.fromCharCode(alphStart)
        currMatch = currMatchArr.join("");

        if (dictMap.hasOwnProperty(currMatch) && dictMap[currMatch] > step) {
          result.push(currMatch);
          dictMap[currMatch] = step;
          break;
        }
      }
    }

    console.log(result);
  }








}



let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];

shortestTransformation(start, end, dict);
