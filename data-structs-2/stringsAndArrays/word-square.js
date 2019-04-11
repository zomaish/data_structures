class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.startsWith = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.baseAscii = "a".charCodeAt();
  }

  createPrefixTree(words) {
    words.forEach(w => {
      let curr = this.root;

      for (let c of w) {
        const pos = c.charCodeAt() - this.baseAscii;
        if (curr.children[pos] === undefined) {
          curr.children[pos] = new TrieNode();
          curr.children[pos].startsWith.push(w);
        } else {
          curr.children[pos].startsWith.push(w);
        }
        curr = curr.children[pos];
      }
    });

    // console.log(JSON.stringify(this.root))
  }

  searchPrefixes(prefix) {

    let curr = this.root;
    
    for(let i=0; i<prefix.length;i++) {
      const pos = prefix[i].charCodeAt() - this.baseAscii;

      if (curr.children[pos]) {
         curr = curr.children[pos]
      } else {
        return [];
      }
    }
    return [...curr.startsWith];
  }
}

const doSearch = (len, words, trie, temp, res) => {
  if (!words.length) return;

  for (let i=0; i<words.length; i++) {
    temp.push(words[i]);
    search(len, words, trie, temp, res)
    temp.pop();
  }
};

const search = (len, words, trie, temp, res) => {
  const idx = temp.length;
  if (idx === len) {
    res.push([...temp]);
    return true;
  }

  let searchPrefix = '';
  for (let i=0; i<temp.length; i++) {
    searchPrefix += temp[i][idx];
  }


  // console.log('searchPrefix', searchPrefix, temp, idx);

  const options = trie.searchPrefixes(searchPrefix)

  console.log('found options', options)
  doSearch(len, options, trie, temp, res)
};

const makeValidWordSqr = (words) => {
  const trie = new Trie();
  trie.createPrefixTree(words)

  const res = [];
  const temp = [];
  doSearch(words[0].length, words, trie, temp, res)

  console.log('res is', res)

};

// const words = ["abat", "baba", "atan", "atal"];
const words = ["area","lead","wall","lady","ball"]

console.log(makeValidWordSqr(words))
