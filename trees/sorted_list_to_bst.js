class LLNode {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  add(d) {
    this.head = this.addRec(this.head, d);
      
  }
  
  addRec(node, d) {
    if (!node) {
      ++this.length;
      return new LLNode(d);
    }
    node.next = this.addRec(node.next, d);
    return node;
  }
}
class Node {
  constructor(n) {
    this.n = n >> 0;
    this.left = null;
    this.right = null;
  }
  
}


class BST {
  constructor() {
    this.root = null;
  }

  push(n) {
    if (!this.root) {
      this.root = new Node(n);
        return;
    }
    
    this.insert(this.root, n);
  }
  
  
  insert(node, n) {
    if (!node) return new Node(n);
    
    if (node.n >= n) node.left = this.insert(node.left, n);
    else node.right = this.insert(node.right, n);
    
    return node;
  }
}

function sortedListToBST(list) {
  let head = list.head;
  return sortedListRec(list.length)
  
  function sortedListRec(l) {
    const m = l/2 | 0;
      
    
    if (l <= 0) {
      return null;
    }
    
    const left = sortedListRec(m);
    let root = new Node(head.data);
    root.left = left;
    
    head = head.next;
    
    const right = sortedListRec(l - (l/2|0) - 1);
    root.right = right;
    return root;
  }
}



const ll = new LinkedList();
for (let i=1; i<8; i++) {
  ll.add(i)
}


console.log(sortedListToBST(ll));

