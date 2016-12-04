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
  
  add(d) {
    this.head = this.addRec(this.head, d)
  }
  
  addRec(node, d) {
    if(!node) return new Node(d);
    node.next = this.addRec(node.next, d);
    return node;
  }
  
  sum(ll) {
    let carry = new Node(0);
    let sum = 0;
    
    this.head = this.sumRec(this.head, ll.head, sum, carry);
   
    if (carry.data > 0) {
      let tmp = this.head;
      this.head = carry;
      this.head.next = tmp;
    }
  }
  
  sumRec(node1, node2, sum, carry) {
    
    if(!node1 && !node2) {
      return null;
    }
    
    node1.next = this.sumRec(node1.next, node2.next, sum, carry);
    
    sum = node1.data + node2.data + carry.data;
    node1.data = sum%10;
    carry.data = sum >=10 ? 1 : 0;
    return node1;
    
  }
}

const ll1 = new LinkedList();
ll1.add(5);
ll1.add(6);
ll1.add(3);

const ll2 = new LinkedList();
ll2.add(8);
ll2.add(4);
ll2.add(2);

ll1.sum(ll2)
console.log(ll1)


