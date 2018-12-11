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
}

const ll1 = new LinkedList();
ll1.add(0);
ll1.add(1);
ll1.add(2);
ll1.add(3);
ll1.add(2);
ll1.add(1);
ll1.add(0);


const isPalindrome = (ll, length) => {
  if (length === 0 || length === 1) return {node: ll, res: true} ;

  const res = isPalindrome(ll.next, length - 2);

  if (!res.node || !res.res) {
    return {res: false};
  }

  if (res.node.data === ll.data) {
    res.node = res.node.next;
    return res;

  }

  return {res: false};
  
}

console.log(isPalindrome(ll1, 7))