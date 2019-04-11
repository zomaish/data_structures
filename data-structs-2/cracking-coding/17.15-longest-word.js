


const canBuildWord = (word, memo, dic, i) => {
  if (word !== dic[i] && memo[word]) return memo[word];
  

  for (let i=1; i<word.length; i++) {
    const left = word.substring(0, i);
    const right = word.substring(i);

    if (memo[left] === true && canBuildWord(right, memo, dic, i)) {
      return true;
    }
  }

  memo[word] = false;
  return false;
};

const findLongetsWord = (dic, l, r) => {
  const memo = {};
  dic.forEach((w) => {
    memo[w] = true;
  });

  dic.sort((a, b) => {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  });

  for (let i=0; i<dic.length; i++) {
    const w = dic[i];
    console.log('word going in is ', w)
    if (canBuildWord(w, memo, dic, i)) {
      console.log('found ------- ', w)
      return w;
    };
  }
};


const dic = ["newspa", "paper", "geek", "news", "newspapernewsgeek"];
// const word = "newspapergeek";

console.log(findLongetsWord(dic, 0, dic.length));



