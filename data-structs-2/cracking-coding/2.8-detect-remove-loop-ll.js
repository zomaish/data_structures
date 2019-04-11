class Node {
  constructor(d) {
    this.data = d !== undefined ? d : null;
    this.next = null;
  }
}

const removeLoop = (node, loop) => {

  let slow = node;
  let fast = loop;

  while(slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = null;
}

const detectLoop = (node) => {
  if (!node) return false;
  let slow = fast = node;

  while(slow.next && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      removeLoop(node, fast);
    }
  }

  return false;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;


console.log(detectLoop(a), a);