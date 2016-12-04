class Node {
  constructor(d) {
    this.d = d;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  add(d) {
    this.head = this.addRec(this.head, d);
  }
  
  addRec(node, d) {
    if (!node) 
      return new Node(d);
    
    node.next = this.addRec(node.next, d);
    return node;
  }
  
  get() {
    return this.head;
  }
  
  reverseInChunkOf(k) {
    this.head = this.reverseInChunkUtil(this.head, k);
  }
  
  reverseInChunkUtil(head, k) {
    let current = head;
    let prev;
    let next;
    let count = 0;
    
    while (count < k && current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count ++;
    }
    
    if (next) {
      head.next = this.reverseInChunkUtil(next, k);
    }
    
    return prev;
  }

  reverse(node) {
    let curr = node;
    let prev;
    let next;
    
    while(curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    
    return prev;
  }

  revRec(curr, prev) {
    let head, next;
    
    if (!curr.next) {
      head = curr;
      curr.next = prev;
      return head;
    }
    
    next = curr.next;
    curr.next = prev;

    return this.revRec(next, curr);
  }

}


const ll = new LinkedList();
for(let i=0; i<22; i++) {
  ll.add(i)
}

ll.reverseInChunkOf(3);
console.log(ll.head)
  