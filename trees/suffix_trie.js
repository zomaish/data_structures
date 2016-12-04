class SuffixTrieNode {
  constructor(c) {
    this.children = new Array(26);
    this.leaf = false;
  }
}

class SuffixTrie {
  constructor() {
    this.root = new SuffixTrieNode();
  }
  
  insert(node, str) {
    if (!str) return;
    
    this.insertSubStr(node, str);
    this.insert(node, str.substring(1));
  }
  
  insertSubStr(node, str) {
    if (!str) {
      node.leaf = true;
    return;
    }

    const idx = str.charCodeAt(0) - "a".charCodeAt();
    let currentNode = node.children[idx];
    
    if (!currentNode) {
      currentNode = new SuffixTrieNode();
      node.children[idx] = currentNode;
    }
    
    this.insertSubStr(currentNode, str.substring(1)); 
  }
}

const t = new SuffixTrie();
t.insert(t.root, "bannana");
console.log(t.root)
