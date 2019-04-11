const baseAscii = "a".charCodeAt();

class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.index = -1;
    this.isWord = false;
    this.allIndicies = {}
  }
}


class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word, wordIdx) {
    let temp = this.root;
    for (let i=word.length-1; i>=0; i--) {
      const pos = word[i].charCodeAt() - baseAscii;
      if (!temp[pos]) {
        temp[pos] = new TrieNode();
      }

      if (i===0) {
        temp[pos].index = wordIdx;
        temp[pos].isWord = true;
      }

      temp.allIndicies[wordIdx] = true;
      temp = temp[pos];
    }
  }

  search(word, idx) {
    const matches = {};
    let temp = this.root;

    for(let i=0; i<word.length; i++) {
      const pos = word[i].charCodeAt() - baseAscii;
      if (!temp[pos]) break
      const node = temp[pos];
      if (node.isWord && node.index !== idx) {
        matches[node.index] = true;
      }
      
      temp = node;
      if (i === word.length-1) {
        Object.keys(temp.allIndicies).forEach(k => {
          if (k !== idx) matches[k] = true;
          });
      }
    }
    return Object.keys(matches);
  }
}


const findPalindromes = (words) => {
  const trie = new Trie();
  words.forEach((w, idx) => {
    trie.addWord(w, idx);
  });

  for (let i=0; i<words.length; i++) {
    const possibleMatches = trie.search(words[i], i);
    console.log('word', words[i], possibleMatches);
  }

  //check if is palindrome
}

const words = ["abcd","dcba","lls","s","sssll", "cba"];
findPalindromes(words)