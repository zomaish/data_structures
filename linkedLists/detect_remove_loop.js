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

  push(d) {
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

  detectLoop() {
    let slow = this.head;
    let fast = this.head;

    while(slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next

      if (slow === fast)
        return true;
    }
    return false;

  }

  detectAndRemoveLoop() {
    let slow = this.head;
    let fast = this.head;

    while(fast !== null || slow !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (slow === fast) {
        slow = this.head;

        while(slow.next != fast.next) {
          slow = slow.next;
          fast = fast.next;
        }

        fast.next = null;
        return true;
      }
    }

    return false;
  }
}

const llist = new LinkedList();

llist.push(20);
llist.push(4);
llist.push(15);
llist.push(10);
llist.push(10);

/*Create loop for testing */
llist.head.next.next.next.next = llist.head;

console.log(llist.detectLoop());
