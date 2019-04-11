//https://leetcode.com/problems/copy-list-with-random-pointer/

class Node {
  constructor(v) {
    this.v = v;
    this.next = this.random = null;
  }
}

const deepCopy = (head) => {

  let ptr = head; 

  while(ptr) {
    const newNode = new Node(ptr.v + "==");
    newNode.next = ptr.next;
    ptr.next = newNode;

    ptr = ptr.next.next;
  }


  ptr = head;

  while(ptr) {
    ptr.next.random = ptr.random.next;
    ptr = ptr.next.next;
  }

  ptr = head;

  let newList = ptr.next;
  let oldList = ptr;

  let resNew = newList;
  let resOld = oldList;

  while(newList) {
    const orig = oldList.next ? oldList.next.next : null;
    const cpy = newList.next ? newList.next.next : null;
    
    newList.next = cpy;
    oldList.next = orig;
    
    newList = newList.next;
    oldList = oldList.next;
  }


  head = resOld;
  return resNew;
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');


a.random = c;
a.next = b;
b.random = a;
b.next = c;
c.random = b;


let res = deepCopy(a);

// console.log(res)
while(res) {
  console.log(res.v, 'random', res.random.v);
  res = res.next;
}

let x = a
while(x) {
  console.log(x.v, 'random', x.random.v);
  x = x.next;
}