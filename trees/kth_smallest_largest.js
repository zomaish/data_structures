
class Node {
  constructor(d) {
    this.d = d;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  insertIterative(d) {
  let current = this.root;
    let parent = this.root;
    
    while(current) {
      if (current.d>=d) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    
    if (!this.root) {
      this.root = new Node(d);
    } else if (parent.d >= d) {
      parent.left = new Node(d)
    } else {
      parent.right = new Node(d);
    } 
  }
  
  arrayToTree(arr) {
    for (let i=0; i<arr.length; i++)
      this.insertIterative(arr[i]);
  }
  
  //instead of using a stack, we can add lCount and rCount to the tree and loop subtracting from that
  kthSmallestWithStackExtraSpace(node, k){
    const s = [];
    let current = node;
    
    while(current) {
      s.push(current);
      current = current.left;
    }
    
    while(current = s.pop()) {
      if (!--k) {
        break;
      }
      
      if (current.right) {
        current = current.right;
    
        while(current) {
          s.push(current);
          current = current.left;
        }
      }
    }
    
    return current;
  }



  kthSmallestOneExtraSpace(root, k) {
    let current = root;
    let pre;
    let count = 0;

    while(current) {

      if (!current.left) {

        if (++count === k) {
          return current.d;
        }

        current = current.right;
      } else {
        pre = current.left;

        while(pre.right && pre.right !== current)
          pre = pre.right;

        if (!pre.right) {
          pre.right = current;
          current = current.left;
        } else {
          if (++count === k) {
            return current.d;
          }

          current = current.right;
        }
      }
    }
  }

  kthLargestRec() {
    //http://www.geeksforgeeks.org/kth-largest-element-in-bst-when-modification-to-bst-is-not-allowed/
  }
}

const arr = [20, 8, 22, 4, 12, 10, 14];
const bst = new BST();
bst.arrayToTree(arr);

console.log(bst.kthSmallestWithStackExtraSpace(bst.root, 3));
