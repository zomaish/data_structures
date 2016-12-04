const ALPHABET_SIZE = 26;
class TrieNode {
  constructor(c) {
    this.children = new Array(ALPHABET_SIZE);
    this.isLeaf = false;
    this.c = c;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.count = 0;
  }

  insert(node, word) {
    if (!word) {
      node.isLeaf = true;
      return;
    }

    const c = word.charAt(0); 
    const idx = c.charCodeAt() - "a".charCodeAt();
    //console.log("idx", idx);
    
    let currNode = node.children[idx];

    if (!currNode) {
      currNode = new TrieNode(c);
      node.children[idx] = currNode;
    } 
    
    this.insert(currNode, word.substring(1));
  }

  find(word) {
    const levels = word.length;
    const startIndex = "a".charCodeAt();
    
    let node = this.root;
    let index;
    let c;
    let res;
    
    for (let i=0; i<levels; i++) {
      index = word.charCodeAt(i) - startIndex;
      c = word[i];
      node = node.children[index];
      if (!node || !node.c === c) {
        return false;
      }
    }
    
    if (!node.isLeaf)
      return false;
    
    return true;
  }
}
}
const words = ["this", "is", "a", "test", "hello", "hell", "he", "him", "the", "a", "there", "answer", "any", "by", "bye", "their", "payment", "for", "your", "invoice", "is", "processed", "by", "amazon", "payments,", "inc", "Box", "81226", "Seattle,", "Washington", "98108-1226", "if", "you", "need", "more", "information,", "please", "contact", "By", "placing", "your", "order,", "you", "agree", "to", "amazoncoms", "privacy", "Notice", "and", "conditions", "of", "use", "unless", "otherwise", "noted,", "items", "sold", "by", "amazoncom", "llc", "are", "subject", "to", "sales", "tax", "in", "select", "states", "in", "accordance", "with", "the", "applicable", "laws", "of", "that", "state", "if", "your", "order", "contains", "one", "or", "more", "items", "from", "a", "seller", "other", "than", "amazoncom", "llc", "it", "may", "be", "subject", "to", "state", "and", "local", "sales", "tax,", "depending", "upon", "the", "seller's", "business", "policies", "and", "the", "location", "of", "their", "operations", "learn", "more", "about", "tax", "and", "seller", "information","This", "email", "was", "sent", "from", "a", "notificationonly", "address", "that", "cannot", "accept", "incoming", "email", "please", "do", "not", "reply", "to", "this", "message"];
const tr = new Trie();
for (let i=0; i<words.length; i++) {
  tr.insert(tr.root, words[i]);
}

console.log(tr.root)