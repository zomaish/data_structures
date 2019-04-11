

const isOneDistance = (w1, w2) => {
  let diff = 1;
  for (let i=0; i<w1.length; i++) {
    if (w1[i] !== w2[i]) --diff;

    if (diff < 0) return false;
  }

  return true;
};

const printPathUtil = (start, end, dic, path, visited, count) => {

  count.c++;
  if (start === end) return true;

  
  for (let i=0; i<dic.length; i++) {
    if (!visited[i] && isOneDistance(start, dic[i])) {
      visited[i] = true;
      const newStart = dic[i];
      path.push(newStart);
      if (printPathUtil(newStart, end, dic, path, visited, count)) return true;
      path.pop();
      visited[i] = false;
    }
  }

  return false;
};

const printPath = (start, end, dic) => {
  const visited = Array.apply(null, Array(dic.length)).map(Boolean.prototype.valueOf, false);
  const path = [];
  const count = {c: 1}
  if (printPathUtil(start, end, dic, path, visited, count)) {
    console.log('found', path, count);
    return true;
  }

  return false;
}


beginWord = "hit",
endWord = "cog",
wordList = ["log","hot","dot","dog","lot","cog"]

printPath(beginWord, endWord, wordList);

//wordList = ["hot","dot","dog","lot","log","cog"]

//[[5,0]. [2,1], [6,2], [1, 3]]

//[[1,3],[2,1],5, 6]

// const input = [5,2,6,1]
// Output: [2,1,1,0] 