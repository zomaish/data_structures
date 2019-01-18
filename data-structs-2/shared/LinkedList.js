class LinkedList {
  constructor() {
    this.head = null;
  }

  add(n) {
    return this.head = this.addRec(this.head, n)
  }

  addRec(node, n) {
    if (!node) {
      return n;
    }

    node.next = this.addRec(node.next, n);
    return node;
  }
}

module.exports = LinkedList;