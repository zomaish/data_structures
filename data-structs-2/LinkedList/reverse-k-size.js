class Node {
  constructor(v) {
    this.v = v;
    this.next = null
  }
}

const reverse = (node) => {
  let prev = null;
  let curr = node;
  let next = curr.next;

  while(curr) { 
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}


const reverseKGroup = (pointer, k) => {
  if (k<2) return pointer;

  let res;
  let temp;
  let start;
  let end;

  while(pointer) {
    start = pointer
    for(let i=1; i<k; i++) {
      if (!pointer.next) {
        end.next = start;
        return res;
      }
      pointer = pointer.next;
    }

    temp = pointer.next;
    pointer.next = null;

    const pre = reverse(start);
    if (!res) {
      res = pre;
      end = start;
    } else  {
      end.next = pre;
      end = start;
    }

    pointer = temp;
  }

  return res;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);


console.log(reverseKGroup(head, 4));
// Given this linked list: 1->2->3->4->5->6->7
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->6->5->4->7
//For k =4, 4->3->2->1->5->6->7