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

}


function mergeSort(node) {
  if(!node || !node.next) return node;
  
  const sl = splitLL(node);

  return merge(mergeSort(sl.a), mergeSort(sl.b))
}

function merge(a, b) {
  let r = new LinkedList();
  
  while(a && b) {
    if (a.d <= b.d) {
      r.add(a.d);
      a = a.next;
    } else {
      r.add(b.d);
      b = b.next;
    }
  }
  
  while(a) {
    r.add(a.d);
    a = a.next;
  }
  
  while(b) {
    r.add(b.d);
    b = b.next;
  }
  
  return r.head;
}


function splitLL(node) {
  if (!node || !node.next)
    return {
      a: node,
      b: null
    };

  let slow = node;
  let fast = node.next;
  
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
  }
  
  let b = slow.next;
  let a = node;
  slow.next = null;
  
  return {
    a: a,
    b: b
  }
  
}
  

const ll = new LinkedList();

ll.add(10);
ll.add(9);
ll.add(8);
ll.add(24);
ll.add(234);
ll.add(1);
ll.add(1);
ll.add(14);
console.log(mergeSort(ll.head));