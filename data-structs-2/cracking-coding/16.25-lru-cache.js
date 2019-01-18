



class DoubleLinkedList {
  constructor(size) {
    this.size = size |0;
    this.head = this.tail = null;
  }

  addToFront(node) {
    const temp = this.head;
    this.head = node;
    this.head.next = temp;
  }
}

class LRU {
  constructor(size) {
    this.size = size |0;
    this.map = Object.create(null);
    this.dll = new DoubleLinkedList(this.size);
  }

  removeFromLinkedList(node) {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
  }

  get(k, v) {
    if (Object.prototype.hasOwnProperty.call(this.map, k)) {
      const node = this.map[k];
      this.removeFromLinkedList(node);
      this.dll.addToFront(node);

      return node;
    }
  }
}