class Node {
  constructor(v) {
    this.v = v;
    this.next = null;
  }
}

const getLength = (n) => {
  if (!n) return 0;

  let i=0;
  let t = n;
  while(t) {
    t=t.next
    i+=1;
  }

  return i
}
let head = null;

const append = (node, newVal) => {
  if (!node) return newVal;

  node.next = append(node.next, newVal);
  return node;
};

const reverse = (curr, prev) => {
  if (!curr.next) {
    head = curr;
    return;
  }

  reverse(curr.next, curr);
  curr.next = null;
  head = append(head, curr);
};

const isEqual = (node1, node2, n) => {
  let i=0;
  let t1 = node1, t2 = node2;
  while(i<n) {
    if (t1.v !== t2.v) return false;
    t1 = t1.next;
    t2 = t2.next;
    i+=1;
  }

  return true;
};

const isPalindrome = (node) => {
  const len = getLength(node);
  const mid = parseInt((len+1)/2);

  let pointer = node;
  for(let i=1; i<mid; i++) {
    pointer = pointer.next;
  }

  const f = pointer.next;
  reverse(f);

  return isEqual(node, head, parseInt(len/2));
};


const isPalindrome = (str) => {
  let temp = str;
  let len = Math.floor(getLength(str)/2);

  const isPalindromeUtil = (str) => {
    if (!str) return;

    const res = isPalindromeUtil(str.next);
    if ( res === false || res === true) {
      return res;
    }

    if (str.v !== temp.v) return false;
    temp = temp.next;
    len -=1;


    if (len === 0) return true
  }

  return isPalindromeUtil(str)
}

const str = new Node('a');
str.next = new Node('b');
str.next.next = new Node('c');
str.next.next.next = new Node('d');
str.next.next.next.next = new Node('f');
str.next.next.next.next.next = new Node('c');
str.next.next.next.next.next.next = new Node('b');
str.next.next.next.next.next.next.next = new Node('a');

console.log(isPalindrome(str));
