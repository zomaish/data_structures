class Node {
  constructor(d) {
    this.data = d !== undefined ? d : null;
    this.next = null;
  }
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


const detectLoops = (head) => {
  if (!head) return false;

  const slow = head;
  const fast = head;

  while(slow.next && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while(slow.next != fast.next) {
        slow = slow.next;
        fast = fast.next;
      }

      fast.next = null
    }
  }

  console.log(head)
};

detectLoops(a)