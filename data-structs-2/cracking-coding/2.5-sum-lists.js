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

const calcSumUtil = (n1, n2, carry) => {
  if (!n1 || !n2) return;

  calcSumUtil(n1.next, n2.next, carry)
  const sum = n1.v + n2.v + carry.v;
  carry.v = sum >= 10 ? 1 : 0;
  n1.v = sum % 10;
}

const calcRemainig = (n1, carry, n) => {
  if (n === 0) return;;
  calcRemainig(n1.next, carry, n-1);
  const sum = n1.v + carry.v;
  carry.v = sum >= 10 ? 1 : 0;
  n1.v = sum % 10;
}


const sum = (num1, num2) => {

  const len1 = getLength(num1);
  const len2 = getLength(num2);
  let temp = num1;

  for (let i=len1; i>len2; i--) temp=temp.next
  const carry = new Node(0);
  calcSumUtil(temp, num2, carry);

  const rem = len1-len2;
  if (rem === 0) return num1;

  calcRemainig(num1, carry, len1-len2);
  
  if (carry.v > 0) {
    carry.next = num1
    return carry;
  }

  return num1;
};


const num1 = new Node(9);
num1.next = new Node(9);
num1.next.next = new Node(5);
num1.next.next.next = new Node(7);

const num2 = new Node(2);
num2.next = new Node(2);


console.log(sum(num1, num2));