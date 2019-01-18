
const dic = [[],
[],
['a', 'b', 'c'],
['d', 'e', 'f'],
['g', 'h', 'i'],
['j','k','l'],
['m', 'n', 'o'],
['p', 'q', 'r', 's'],
['t', 'u', 'v'],
['w', 'x', 'y', 'z']
]

const words=['tree', 'used'];


const printAllWordsUtil = (letters, i, res) => {
  if (i === letters.length) {
    const word = res.join('');
    if (words.indexOf(word) > -1) {
      console.log('found ', word);
    }
    return;
  }
  const g = letters[i];
  g.forEach(l => {

    res.push(l);
    printAllWordsUtil(letters, i+1, res);
    res.pop();
  });
}

const printAllWords = (num) => {

  const letters = []
  for (let i=0; i<num.length; i++) {
    const n = num[i] | 0;
    if (n>1) {
      letters.push(dic[n])
    }
  }

  const res = []
  printAllWordsUtil(letters, 0, res);
};

printAllWords('8733')