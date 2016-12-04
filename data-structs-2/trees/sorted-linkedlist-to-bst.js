class LLNode {
  constructor(v) {
    this.v = v;
    this.next = null;
  }
}

class BSTNode {
  constructor(v) {
    this.v = v;
    this.right = this.left = null;
  }
}

class BSTUtils {
  constructor(ll) {
    this.head = ll;
  }
  
  countLLNodes() {
    if (!this.head) return 0;

    let temp = this.head;
    let i = 1;

    while(temp.next) {
      temp = temp.next;
      i +=1;
    }

    return i;
  }

  llToBst() {
    const len = this.countLLNodes();
    return this.llToBstUtils(len);
  }


  llToBstUtils(n) {
    if (n <= 0) return null;

    const left = this.llToBstUtils(Math.floor(n/2));
    const root = new BSTNode(this.head.v);
    root.left = left;

    this.head = this.head.next;
    
    const right = this.llToBstUtils(Math.floor(n - Math.floor(n/2) - 1));

    
    root.right = right;

    return root;
  }
  
  preOrderTraversalRec(node) {
    if (!node) return
    console.log(node.v);
    this.preOrderTraversalRec(node.left);
    this.preOrderTraversalRec(node.right);
  }
};

const intoBst = (arr, start, end) => {
  if (start>end) return null;

  const m = Math.floor((end - start)/2) + start;
  const root = new BSTNode(arr[m])

  root.left = intoBst(arr, start, m-1);
  root.right = intoBst(arr, m+1, end);

  return root;
}

const ll = new LLNode(1);
ll.next = new LLNode(2);
ll.next.next = new LLNode(3);
ll.next.next.next = new LLNode(4);
ll.next.next.next.next = new LLNode(5);
ll.next.next.next.next.next = new LLNode(6);
ll.next.next.next.next.next.next = new LLNode(7);

const bst = new BSTUtils(ll)

//const tree = bst.llToBst()
//bst.preOrderTraversalRec(tree);


//bst.preOrderTraversalRec(intoBst([1,2,3,4,5,6,7], 0, 7))

bst.preOrderTraversalRec(intoBst([1,2,3,4,5,6,7], 0, 7))
