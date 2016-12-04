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

  unshift(d) {
    let node = new LLNode(d);
    node.next = this.head;
    this.head = node;
  }

  searchAt(pos) {
    let count = 0;

    if (pos < 0 || pos > this.length-1) {
      throw new Error("Invalid Position");
    }

    return this.findRec(this.head, pos, count);
  }
  
  findRec(node, pos, count) {
    count = count >> 0 || 0;
    
    if (pos == 0) return this.head;
    if (count === pos) return node;
    return this.findRec(node.next, pos, ++count);
  }
  
  remove(pos) {
    if (pos < 0 || pos > this.length-1) {
      throw new Error("Invalid position");
    }
    
    if (pos === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let count = 0;
    let currPos = this.head;
    let prev;
    while(count < pos) {
      prev = currPos;
      currPos = currPos.next;
      count++;
    }
    
    prev.next = currPos.next;
    this.length--;
  }
}

const ll = new LinkedList();
for (let i=1; i<4; i++) {
  ll.add(i)
}
console.log(ll.head)
ll.remove(0)
console.log(ll.head)
