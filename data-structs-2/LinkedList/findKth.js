class Node {
  constructor(d) {
    this.data = d !== undefined ? d : null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(v) {
    return this.head = this.addRec(this.head, v)
  }

  addRec(node, v) {
    if (!node) {
      return new Node(v);
    }

    node.next = this.addRec(node.next, v);
    return node;
  }

  findKth(k) {
    if (!this.head) return null;
    if (!this.head.next) return this.head;

    let i = 1;
    let p1 = this.head;
    let p2 = this.head.next;
    while(i<k) {
      if (!p2.next) {
        return p2;
      }

      p2 = p2.next;
      ++i;
    }

    while(p2.next) {
      p2 = p2.next;
      p1 = p1.next;
    }

    return p1
  }

  findKthRec(node, k) {
    if (!node) return 0;

    const index = this.findKthRec(node.next, k) +1;
    if (index === k) return node;

    return index;

  }
}

const ll1 = new LinkedList();
ll1.add(5);
ll1.add(6);
ll1.add(7);
ll1.add(8);
ll1.add(9);
ll1.add(10);
ll1.add(13);

console.log(ll1)
